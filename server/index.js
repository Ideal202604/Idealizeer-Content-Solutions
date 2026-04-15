/* eslint-env node */
import express from 'express';
import cors from 'cors';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, 'data');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');
const PORT = Number(process.env.PORT || 5000);
const WHATSAPP_NUMBER = '919922021699';

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));

function validateContactPayload(payload) {
  const errors = [];

  if (!payload.firstName || payload.firstName.trim().length < 2) {
    errors.push('First name must be at least 2 characters.');
  }

  if (!payload.lastName || payload.lastName.trim().length < 2) {
    errors.push('Last name must be at least 2 characters.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.email || !emailRegex.test(payload.email)) {
    errors.push('Please provide a valid email address.');
  }

  if (!payload.message || payload.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters.');
  }

  if (payload.phone && payload.phone.trim().length > 30) {
    errors.push('Phone number is too long.');
  }

  return errors;
}

function buildWhatsAppUrl(entry) {
  const whatsappText = [
    'New client enquiry from Idealizeer website',
    `Name: ${entry.firstName} ${entry.lastName}`,
    `Email: ${entry.email}`,
    `Phone: ${entry.phone || 'Not provided'}`,
    `Message: ${entry.message}`,
    `Received At: ${entry.createdAt}`
  ].join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
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
    lastName: payload.lastName.trim(),
    email: payload.email.trim().toLowerCase(),
    phone: (payload.phone || '').trim(),
    message: payload.message.trim(),
    createdAt: new Date().toISOString()
  };

  try {
    await appendMessage(message);
    const whatsappUrl = buildWhatsAppUrl(message);
    return res.status(201).json({
      ok: true,
      message: 'Thank you! Your message has been sent successfully.',
      whatsappUrl
    });
  } catch (error) {
    console.error('Failed to persist contact message:', error);
    return res.status(500).json({
      ok: false,
      errors: ['Unable to process your request right now. Please try again later.']
    });
  }
});

app.use((_req, res) => {
  res.status(404).json({ ok: false, errors: ['Not found'] });
});

app.listen(PORT, () => {
  console.log(`Idealizeer API running on http://localhost:${PORT}`);
});
