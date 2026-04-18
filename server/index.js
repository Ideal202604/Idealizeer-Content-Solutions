/* eslint-env node */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, 'data');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');
const PORT = Number(process.env.PORT || 5000);
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

function validateContactPayload(payload) {
  const errors = [];

  if (!payload.firstName || payload.firstName.trim().length < 2) {
    errors.push('First name must be at least 2 characters.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.email || !emailRegex.test(payload.email)) {
    errors.push('Please provide a valid email address.');
  }

  if (!payload.message || payload.message.trim().length === 0) {
    errors.push('Message is required.');
  }

  if (payload.phone && payload.phone.trim().length > 30) {
    errors.push('Phone number is too long.');
  }

  return errors;
}

function buildEmailText(entry) {
  return `Hello Team,

You have received a new inquiry from the website contact form.

Details:

First Name: ${entry.firstName}
Last Name: ${entry.lastName || 'Not provided'}
Email Address: ${entry.email}
Phone Number: ${entry.phone || 'Not provided'}
Message:
${entry.message}

Regards,
Idealizeer Website`;
}

async function sendContactEmail(entry) {
  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error('EMAIL_USER and EMAIL_PASS must be configured on the server.');
  }

  await transporter.sendMail({
    from: EMAIL_USER,
    to: 'info@idealizeer.com',
    replyTo: entry.email,
    subject: 'New Contact Form Submission - Idealizeer Website',
    text: buildEmailText(entry)
  });
}

async function ensureDataFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(MESSAGES_FILE);
  } catch {
    await fs.writeFile(MESSAGES_FILE, '[]', 'utf-8');
  }
}

async function appendMessage(entry) {
  await ensureDataFile();
  const current = JSON.parse(await fs.readFile(MESSAGES_FILE, 'utf-8'));
  current.push(entry);
  await fs.writeFile(MESSAGES_FILE, JSON.stringify(current, null, 2), 'utf-8');
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'idealizeer-api' });
});

app.post('/api/contact', async (req, res) => {
  const payload = req.body || {};
  const errors = validateContactPayload(payload);

  if (errors.length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  const message = {
    id: crypto.randomUUID(),
    firstName: payload.firstName.trim(),
    lastName: (payload.lastName || '').trim(),
    email: payload.email.trim().toLowerCase(),
    phone: (payload.phone || '').trim(),
    message: payload.message.trim(),
    createdAt: new Date().toISOString()
  };

  try {
    // Persist first to avoid inquiry data loss when SMTP is temporarily unavailable.
    await appendMessage(message);
    await sendContactEmail(message);
    return res.status(200).json({
      ok: true,
      message: 'Message Sent Successfully.'
    });
  } catch (error) {
    console.error('Failed to process contact message:', {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    return res.status(500).json({
      ok: false,
      errors: ['Unable to send your message right now. Please try again later.']
    });
  }
});

app.use((_req, res) => {
  res.status(404).json({ ok: false, errors: ['Not found'] });
});

app.listen(PORT, () => {
  console.log(`Idealizeer API running on http://localhost:${PORT}`);
});
