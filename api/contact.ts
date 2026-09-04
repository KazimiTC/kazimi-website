import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email, message, _honey } = (req.body ?? {}) as Record<string, unknown>;

  // Honeypot: real visitors never see or fill this field, bots often do.
  // Pretend success so bots don't learn to skip it.
  if (typeof _honey === 'string' && _honey.length > 0) {
    res.status(200).json({ ok: true });
    return;
  }

  if (typeof email !== 'string' || typeof message !== 'string' || !email.trim() || !message.trim()) {
    res.status(400).json({ error: 'Email and message are required' });
    return;
  }

  if (!EMAIL_PATTERN.test(email)) {
    res.status(400).json({ error: 'Invalid email address' });
    return;
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables');
    res.status(500).json({ error: 'Server misconfigured' });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  try {
    await transporter.sendMail({
      from: gmailUser,
      to: gmailUser,
      replyTo: email,
      subject: `New contact form message from ${email}`,
      text: message,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Failed to send contact form email', err);
    res.status(502).json({ error: 'Failed to send message' });
  }
}
