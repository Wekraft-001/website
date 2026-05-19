require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, '..', 'data');
const RESULTS_FILE = path.join(DATA_DIR, 'results.json');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(RESULTS_FILE)) fs.writeFileSync(RESULTS_FILE, '[]');

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Existing save-result endpoint
app.post('/save-result', (req, res) => {
  try {
    const payload = req.body;
    const raw = fs.readFileSync(RESULTS_FILE, 'utf8');
    const arr = JSON.parse(raw || '[]');
    arr.push(payload);
    fs.writeFileSync(RESULTS_FILE, JSON.stringify(arr, null, 2));
    res.json({ ok: true });
  } catch (err) {
    console.error('save-result error', err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

// New contact endpoint
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, question } = req.body;

  if (!firstName || !email || !question) {
    return res.status(400).json({ ok: false, error: 'Missing required fields (First name, Email, or Question).' });
  }

  try {
    // 1. Send notification email to the Wekraft admin (skillseed@wekraft.co)
    const adminEmailPromise = resend.emails.send({
      from: 'Wekraft Contact Form <onboarding@resend.dev>', // Until domain verification, sent from onboarding@resend.dev
      to: ['skillseed@wekraft.co'],
      replyTo: email,
      subject: `New Contact Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #FFFCF8;">
          <h2 style="color: #3C91BA; border-bottom: 2px solid #FAB548; padding-bottom: 8px; margin-top: 0;">New Contact Form Message</h2>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName || 'Not provided'}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone Number:</strong> ${phone || 'Not provided'}</p>
          <div style="margin-top: 20px; padding: 16px; background-color: #FFF1DC; border-left: 4px solid #FAB548; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #1E1E1E;">Question / Message:</p>
            <p style="margin: 8px 0 0 0; white-space: pre-wrap; color: #1E1E1E;">${question}</p>
          </div>
          <p style="font-size: 11px; color: #888; margin-top: 30px; text-align: center;">Sent via Wekraft Web App Contact Form Integration</p>
        </div>
      `
    });

    // 2. Send confirmation email back to the customer
    const customerEmailPromise = resend.emails.send({
      from: 'Wekraft <onboarding@resend.dev>',
      to: [email],
      subject: 'Your email was received by Wekraft',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #FFFCF8;">
          <h2 style="color: #3C91BA; border-bottom: 2px solid #FAB548; padding-bottom: 8px; margin-top: 0;">We've received your message!</h2>
          <p>Hi ${firstName},</p>
          <p>Thank you for contacting Wekraft. Your message has been successfully received, and our team will get back to you shortly.</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px dashed #e5e7eb;" />
          <p style="color: #666; font-style: italic;">A copy of your message is included below:</p>
          <div style="padding: 12px; background-color: #f9fafb; border-left: 3px solid #3C91BA; border-radius: 4px; color: #4b5563;">
            ${question}
          </div>
          <br />
          <p>Best regards,<br/><strong>The Wekraft Team</strong></p>
        </div>
      `
    });

    // Run both email requests in parallel
    const [adminResult, customerResult] = await Promise.all([adminEmailPromise, customerEmailPromise]);

    if (adminResult.error) {
      console.error('Admin notification error:', adminResult.error);
      return res.status(500).json({ ok: false, error: adminResult.error.message });
    }

    res.json({ ok: true, data: adminResult.data });
  } catch (err) {
    console.error('Contact endpoint error:', err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API server listening on http://localhost:${port}`));
