# Sakthi Dental Clinic Website

A modern, responsive dental clinic website built with HTML, CSS, and JavaScript. Features a clean design with Tailwind CSS and includes appointment booking and contact forms.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Forms**: Integrated with Formspree for email handling
- **Interactive Elements**: Carousels, accordions, and smooth scrolling
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Optimized images and lazy loading

## 📁 Project Structure

```
public/
├── index.html          # Homepage
├── about.html          # About Us page
├── services.html       # Treatments page
├── appointment.html    # Appointment booking
├── contact.html        # Contact page
├── testimonials.html   # Patient reviews
├── faq.html           # Frequently Asked Questions
├── styles.css          # Custom CSS
├── script.js           # JavaScript functionality
├── favicon.png         # Website icon
└── images/            # All website images
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sakthi-dental-clinic.git
   cd sakthi-dental-clinic
   ```

2. **Open in browser**
   - Simply open `public/index.html` in your web browser
   - Or use a local server: `python -m http.server 8000`

## 📧 Form Setup (Required)

This website uses **Formspree** for handling contact and appointment forms. You need to set up your own Formspree account:

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form

### Step 2: Get Your Form ID
1. After creating a form, you'll get a form ID like: `xrgjqjqj`
2. Your form endpoint will be: `https://formspree.io/f/xrgjqjqj`

### Step 3: Update the Forms
Replace `YOUR_FORMSPREE_ID` in these files:
- `public/appointment.html` (line with `action="https://formspree.io/f/YOUR_FORMSPREE_ID"`)
- `public/contact.html` (line with `action="https://formspree.io/f/YOUR_FORMSPREE_ID"`)

**Example:**
```html
<!-- Change this: -->
<form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">

<!-- To this: -->
<form action="https://formspree.io/f/xrgjqjqj" method="POST">
```

## 🎨 Customization

### Colors
The website uses a blue color scheme. To change colors:
1. Update Tailwind classes in HTML files
2. Modify `styles.css` for custom colors

### Content
- Update text content directly in HTML files
- Replace images in the `public/` folder
- Update contact information in headers and footers

### Styling
- Main styles: Tailwind CSS classes in HTML
- Custom styles: `public/styles.css`
- Animations: AOS (Animate On Scroll) library

## 📱 Responsive Features

- Mobile-first design
- Touch-friendly navigation
- Optimized images for all devices
- Collapsible mobile menu
- Floating WhatsApp button

## 🔧 Technical Details

- **HTML5**: Semantic markup
- **CSS3**: Tailwind CSS framework
- **JavaScript**: Vanilla JS for interactivity
- **Images**: WebP format with JPG fallbacks
- **Icons**: Emoji and SVG icons
- **Fonts**: Google Fonts (Inter, Quicksand)

## 📋 Pages Overview

1. **Home** (`index.html`): Hero carousel, services overview, testimonials
2. **About** (`about.html`): Dr. Anupriya's story, team, vision
3. **Services** (`services.html`): Complete list of dental treatments
4. **Appointment** (`appointment.html`): Booking form with validation
5. **Contact** (`contact.html`): Contact form and clinic location
6. **Testimonials** (`testimonials.html`): Patient reviews carousel
7. **FAQ** (`faq.html`): Accordion-style frequently asked questions

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Deploy automatically on push
3. Custom domain support available

### Vercel
1. Import your GitHub repository
2. Automatic deployments
3. Great performance and analytics

## 📞 Support

For questions or issues:
- Check the FAQ page
- Review the code comments
- Contact through the website forms

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: Remember to update the Formspree IDs before deploying to make the forms functional! 