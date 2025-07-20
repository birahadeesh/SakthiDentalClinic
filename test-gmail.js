const nodemailer = require('nodemailer');

console.log('🧪 Testing Gmail configuration...');

// Test email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'birahan2005@gmail.com',
        pass: 'ccytcsrghyklbbze'
    }
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.error('❌ Gmail connection failed:', error);
        console.log('💡 Possible solutions:');
        console.log('1. Check if 2FA is enabled');
        console.log('2. Verify app password is correct');
        console.log('3. Check Gmail security settings');
    } else {
        console.log('✅ Gmail connection successful!');

        // Test sending email
        const mailOptions = {
            from: 'birahan2005@gmail.com',
            to: 'birahadeesh05@gmail.com',
            subject: '🧪 Gmail Test Email',
            text: 'This is a test email to verify Gmail configuration.',
            html: '<h2>🧪 Gmail Test Email</h2><p>This is a test email to verify Gmail configuration.</p>'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('❌ Email sending failed:', error);
            } else {
                console.log('✅ Email sent successfully!');
                console.log('📧 Message ID:', info.messageId);
                console.log('📧 Response:', info.response);
            }
        });
    }
}); 