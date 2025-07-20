# 🦷 Sakthi Dental Clinic Website

A modern, responsive dental clinic website with appointment booking functionality and email notifications.

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Professional UI** - Clean, modern design with pastel colors
- **Appointment Booking** - Online appointment form with email notifications
- **Interactive Elements** - Hero carousel, testimonials, floating WhatsApp button
- **Contact Integration** - Google Maps integration with directions
- **Privacy Policy** - Modal popup with comprehensive privacy information

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- Gmail account for email functionality

### Installation

1. **Clone or download the project**
   ```bash
   cd sakthi-dental-clinic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Email Settings**
   
   Open `server.js` and update the email configuration:
   ```javascript
   const transporter = nodemailer.createTransporter({
     service: 'gmail',
     auth: {
       user: 'your-email@gmail.com', // Your Gmail address
       pass: 'your-app-password'     // Your Gmail app password
     }
   });
   ```

   Also update the recipient email:
   ```javascript
   const mailOptions = {
     from: 'your-email@gmail.com',     // Your Gmail
     to: 'clinic-email@gmail.com',     // Clinic's email
     cc: email,                        // Patient's email (auto-filled)
     // ... rest of the code
   };
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📧 Email Setup Instructions

### Gmail App Password Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in the server.js file

### Email Configuration

1. **Update `server.js`** with your email details:
   ```javascript
   // Replace these values
   user: 'your-email@gmail.com',     // Your Gmail
   pass: 'your-app-password',        // App password from step above
   to: 'clinic-email@gmail.com',     // Where to receive appointments
   ```

2. **Test the email functionality**:
   - Fill out the appointment form
   - Submit the form
   - Check both the clinic email and patient email for notifications

## 📁 Project Structure

```
sakthi-dental-clinic/
├── public/                 # Static files
│   ├── index.html         # Homepage
│   ├── appointment.html   # Appointment booking
│   ├── about.html         # About us
│   ├── services.html      # Services page
│   ├── contact.html       # Contact page
│   ├── testimonials.html  # Testimonials
│   ├── faq.html          # FAQ page
│   ├── styles.css         # Custom styles
│   └── script.js          # JavaScript functions
├── server.js              # Node.js server with email functionality
├── package.json           # Dependencies
└── README.md             # This file
```

## 🎨 Customization

### Colors and Styling
- **Primary Colors**: Blue (#1e40af), Pastel shades
- **Background**: Light lavender (#faf7ff)
- **Font**: Inter (Google Fonts)

### Content Updates
- **Logo**: Replace `SDC Logo.png` in the public folder
- **Banner Images**: Add your banner images to the public folder
- **Contact Info**: Update phone numbers and addresses in all HTML files
- **Doctor Photos**: Replace placeholder images with actual photos

## 🔧 Technical Details

### Frontend
- **HTML5** with semantic markup
- **Tailwind CSS** for styling
- **Vanilla JavaScript** for interactivity
- **AOS (Animate On Scroll)** for animations

### Backend
- **Node.js** with Express.js
- **Nodemailer** for email functionality
- **CORS** enabled for cross-origin requests

### Email Features
- **Professional HTML email template**
- **Automatic CC to patient**
- **Form validation**
- **Success/error notifications**
- **Loading states**

## 📱 Responsive Features

- **Mobile-first design**
- **Floating WhatsApp button**
- **Responsive navigation**
- **Touch-friendly buttons**
- **Optimized for all screen sizes**

## 🔒 Security & Privacy

- **Form validation** on both client and server
- **CORS protection**
- **Input sanitization**
- **Privacy policy modal**
- **Secure email transmission**

## 🚀 Deployment

### Local Development
```bash
npm run dev  # Uses nodemon for auto-restart
```

### Production Deployment
1. **Install dependencies**: `npm install`
2. **Set environment variables** for email credentials
3. **Start server**: `npm start`
4. **Use PM2** for process management: `pm2 start server.js`

## 📞 Support

For technical support or customization requests:
- **Email**: [Your contact email]
- **Phone**: [Your contact number]

## 📄 License

This project is licensed under the MIT License.

---

**Made with ❤️ for Sakthi Dental Clinic** 