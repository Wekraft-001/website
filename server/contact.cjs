const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Resend with your API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, question } = req.body;

  if (!firstName || !email || !question) {
    return res.status(400).json({ ok: false, error: 'Missing required fields.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Wekraft Contact Form <onboarding@resend.dev>', // Change after verifying your domain
      to: ['skillseerw@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #FAB548; margin-bottom: 16px;">📬 New Contact Message — Wekraft</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 140px;">Full Name:</td>
              <td style="padding: 8px 0; color: #1E1E1E;">${firstName} ${lastName}</td>
            </tr>
            <tr style="background: #fafafa;">
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3C91BA;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #1E1E1E;">${phone || 'Not provided'}</td>
            </tr>
          </table>

          <hr style="margin: 20px 0; border-color: #e5e7eb;" />
          
          <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message / Question:</p>
          <p style="background: #FFF1DC; padding: 16px; border-left: 4px solid #FAB548; border-radius: 4px; color: #1E1E1E; line-height: 1.6;">
            ${question}
          </p>

          <p style="margin-top: 24px; font-size: 12px; color: #aaa;">This email was sent from the Wekraft contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ ok: false, error: error.message });
    }

    console.log('Email sent successfully:', data);
    res.json({ ok: true });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Contact API running on http://localhost:${port}`));
