const nodemailer = require('nodemailer');

// Test email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'birahan2005@gmail.com',
        pass: 'ccyt csrg hykl bbze'
    }
});

// Test email
const mailOptions = {
    from: 'birahan2005@gmail.com',
    to: 'birahadeesh05@gmail.com',
    subject: '🦷 Test Email from Sakthi Dental Clinic',
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #1e40af; text-align: center;">Test Email</h2>
            <p>This is a test email to verify that the email functionality is working properly.</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            <p>If you receive this email, the email system is working correctly!</p>
        </div>
    `
};

console.log('📧 Sending test email...');

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('❌ Email error:', error);
    } else {
        console.log('✅ Email sent successfully!');
        console.log('📧 Message ID:', info.messageId);
        console.log('📧 Response:', info.response);
    }
}); 