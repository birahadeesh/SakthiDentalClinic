require('dotenv').config({ path: './config.env' });
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Email template function
function createEmailContent(formData) {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #1e40af; text-align: center; margin-bottom: 30px;">🦷 New Appointment Request</h2>
        
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #1e40af; margin-top: 0;">Patient Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Preferred Date:</strong> ${formData.date}</p>
          ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ''}
        </div>
        
        <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin-top: 20px;">
          <p style="margin: 0; color: #92400e; font-size: 14px;">
            <strong>📅 Next Steps:</strong><br>
            • Please review this appointment request<br>
            • Contact the patient to confirm availability<br>
            • Send confirmation email to the patient
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px;">
            This email was sent from the Sakthi Dental Clinic website appointment form.
          </p>
        </div>
      </div>
    </div>
  `;
}

// Appointment form submission endpoint
app.post('/api/appointment', async (req, res) => {
    try {
        const { name, email, phone, date, message } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !date) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all required fields'
            });
        }

        // Email options
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.CLINIC_EMAIL,
            cc: email, // Send copy to patient
            replyTo: email, // Patient's email for replies
            subject: `🦷 New Appointment Request - ${name}`,
            html: createEmailContent({ name, email, phone, date, message })
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.json({
            success: true,
            message: 'Appointment request sent successfully! We will contact you soon.'
        });

    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send appointment request. Please try again or contact us directly.'
        });
    }
});

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/appointment', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'appointment.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/testimonials', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'testimonials.html'));
});

app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'faq.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📧 Email functionality ready`);
    console.log(`⚠️  Remember to update email credentials in server.js`);
}); 