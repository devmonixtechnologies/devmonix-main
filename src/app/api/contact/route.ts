import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic sanitization to prevent HTML injection in emails
    const escapeHtml = (str: string) =>
      str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    const safeName = escapeHtml(String(name || ''));
    const safeEmail = escapeHtml(String(email || ''));
    const safeSubject = escapeHtml(String(subject || ''));
    const safeMessage = escapeHtml(String(message || ''));

    // Validate required fields
    if (!safeName || !safeEmail || !safeSubject || !safeMessage) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to company
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: ['sales@devmonix.io', 'salesdevmonixtechnologies@gmail.com'],
      replyTo: email, // reply directly to the user
      subject: `New Contact Form Submission: ${safeSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #6366f1;">
              ${safeMessage.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            This email was sent from the DEVMONIX TECHNOLOGIES contact form.
          </p>
        </div>
      `,
    };

    // Auto-reply to user with enhanced theme and configured display email
    const senderEmail = (process.env.PREFERRED_SENDER_EMAIL && process.env.PREFERRED_SENDER_EMAIL.trim().length > 0)
      ? process.env.PREFERRED_SENDER_EMAIL.trim()
      : 'sales@devmonix.io';
    const senderLabel = `DEVMONIX Technologies <${senderEmail}>`;

    const userMailOptions = {
      from: senderLabel,
      replyTo: process.env.EMAIL_USER || 'sales@devmonix.io',
      to: email,
      subject: 'We got your message! — DEVMONIX TECHNOLOGIES',
      html: `
      <div style="background:#0b0f1a; padding:24px; font-family:Inter,Arial,sans-serif;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px; margin:0 auto; background:#0f172a; border-radius:16px; overflow:hidden; box-shadow:0 6px 24px rgba(0,0,0,0.25)">
          <tr>
            <td style="padding:32px; background:linear-gradient(135deg,#4f46e5 0%,#7c3aed 60%,#0ea5e9 100%); color:#fff;">
              <div style="font-size:18px; opacity:0.9;">DEVMONIX TECHNOLOGIES</div>
              <div style="font-size:28px; font-weight:800; letter-spacing:0.2px; margin-top:6px;">Thank you for reaching out</div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px; color:#e5e7eb;">
              <p style="margin:0 0 12px 0; font-size:16px;">Hi ${safeName},</p>
              <p style="margin:0 0 16px 0; line-height:1.6;">We’ve received your message and our team will get back to you within <strong>24 hours</strong>. Below is a copy for your records.</p>
              <div style="background:#111827; border:1px solid #1f2937; border-radius:12px; padding:16px;">
                <div style="font-size:14px; color:#9ca3af; margin-bottom:8px;">Your message</div>
                <div style="font-size:15px; color:#f3f4f6; line-height:1.6;">${safeMessage.replace(/\n/g, '<br>')}</div>
              </div>
              <div style="margin-top:20px; font-size:14px; color:#9ca3af;">Subject: <span style="color:#e5e7eb;">${safeSubject}</span></div>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                <tr>
                  <td>
                    <a href="https://devmonix.io" style="display:inline-block; background:#4f46e5; color:#fff; text-decoration:none; font-weight:600; padding:12px 18px; border-radius:10px; box-shadow:0 4px 14px rgba(79,70,229,0.35)">Visit our website</a>
                  </td>
                </tr>
              </table>
              <p style="margin:20px 0 0 0; font-size:14px; color:#9ca3af;">If you need to add more details, just reply to this email.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 28px; background:#0b1220; color:#94a3b8; font-size:13px;">
              <div style="opacity:0.9;">DEVMONIX TECHNOLOGIES</div>
              <div>Email: <a href="mailto:sales@devmonix.io" style="color:#c7d2fe; text-decoration:none;">sales@devmonix.io</a></div>
              <div>Phone: +919061402804</div>
            </td>
          </tr>
        </table>
      </div>
      `,
    };

    // Send emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
