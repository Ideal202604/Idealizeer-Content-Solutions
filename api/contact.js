import nodemailer from 'nodemailer';

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

function getTransporter() {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    throw new Error('EMAIL_USER and EMAIL_PASS must be configured on the server.');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });

  return { transporter, emailUser };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, errors: ['Method not allowed'] });
  }

  const payload = req.body || {};
  const errors = validateContactPayload(payload);

  if (errors.length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  const message = {
    firstName: payload.firstName.trim(),
    lastName: (payload.lastName || '').trim(),
    email: payload.email.trim().toLowerCase(),
    phone: (payload.phone || '').trim(),
    message: payload.message.trim()
  };

  try {
    const { transporter, emailUser } = getTransporter();
    await transporter.sendMail({
      from: emailUser,
      to: 'info@idealizeer.com',
      replyTo: message.email,
      subject: 'New Contact Form Submission - Idealizeer Website',
      text: buildEmailText(message)
    });

    return res.status(200).json({
      ok: true,
      message: 'Message Sent Successfully.'
    });
  } catch (error) {
    console.error('Vercel /api/contact error:', error);
    return res.status(500).json({
      ok: false,
      errors: ['Unable to send your message right now. Please try again later.']
    });
  }
}
