# ناصر شايع الهاجري - محامي واستشاري قانوني | Nasser Shayea Al Hajeri - Lawyer and Legal Consultant

موقع إلكتروني ثنائي اللغة (عربي/إنجليزي) لمكتب محاماة في مدينة العين، الإمارات العربية المتحدة.

A bilingual (Arabic/English) website for a law office in Al Ain City, United Arab Emirates.

## 📋 Project Overview

**Project Name**: Al Ain Law Office Website  
**Code Name**: webapp  
**Technology Stack**: Hono + Cloudflare Pages + TypeScript + TailwindCSS  
**Languages**: Arabic (RTL - Default) | English (LTR)

### Main Features | الميزات الرئيسية

✅ **Bilingual Support** - دعم اللغتين العربية والإنجليزية  
✅ **Responsive Design** - تصميم متجاوب مع جميع الأجهزة  
✅ **Professional Layout** - تصميم احترافي يليق بمكتب محاماة  
✅ **Dark Green & Gold Theme** - ألوان خضراء داكنة وذهبية  
✅ **WhatsApp Integration** - زر واتساب عائم  
✅ **Contact Form** - نموذج تواصل تفاعلي  
✅ **Google Maps** - خريطة موقع المكتب  
✅ **SEO Friendly** - محسن لمحركات البحث

## 🌐 URLs

### Development URL (Sandbox)
**Live Preview**: https://3000-iwhifi37jo9ew5go3bj8s-0e616f0a.sandbox.novita.ai

### Pages Structure

**Arabic (Default - RTL)**:
- 🏠 Home: `/` or `/ar`
- 👤 About: `/ar/about`
- 🛠️ Services: `/ar/services`
- ⚖️ Practice Areas: `/ar/practice-areas`
- 📰 Articles: `/ar/articles`
- 📞 Contact: `/ar/contact`

**English (LTR)**:
- 🏠 Home: `/en`
- 👤 About: `/en/about`
- 🛠️ Services: `/en/services`
- ⚖️ Practice Areas: `/en/practice-areas`
- 📰 Articles: `/en/articles`
- 📞 Contact: `/en/contact`

## 📱 Contact Information

📞 **Phone**: +971 50 123 4567  
📱 **WhatsApp**: +971 50 123 4567  
✉️ **Email**: info@alhajeri-law.ae  
📍 **Location**: Al Ain City, United Arab Emirates  
🕒 **Working Hours**: Sunday - Thursday, 9:00 AM - 6:00 PM

## 🎨 Design & Colors

### Color Palette
- **Primary**: Dark Green `#0B3B2E` - للثقة والاحترافية
- **Secondary**: Gold `#C9A44F` - للفخامة والتميز
- **Background**: White `#FFFFFF` - للوضوح والنظافة
- **Text**: Dark Gray - للقراءة المريحة

### Fonts
- **Arabic**: Tajawal (خط تجول)
- **English**: Poppins

## 📦 Services Offered | الخدمات المقدمة

1. **التقاضي والترافع** | Litigation & Advocacy
2. **الاستشارات القانونية** | Legal Consultations
3. **صياغة العقود** | Contract Drafting
4. **التحكيم وحل النزاعات** | Arbitration & Dispute Resolution
5. **تحصيل الديون** | Debt Collection
6. **القضايا العمالية** | Labor Cases

## ⚖️ Practice Areas | مجالات الممارسة

- القضايا التجارية | Commercial Cases
- القضايا المدنية | Civil Cases
- القضايا العمالية | Labor Cases
- قضايا الأحوال الشخصية | Family Law
- قضايا الشركات | Corporate Law
- قضايا الإيجارات والعقارات | Real Estate & Rental

## 🚀 Technology Stack

```json
{
  "Framework": "Hono 4.x",
  "Runtime": "Cloudflare Workers",
  "Language": "TypeScript",
  "Styling": "TailwindCSS (CDN)",
  "Icons": "Font Awesome 6.4",
  "Process Manager": "PM2",
  "Build Tool": "Vite"
}
```

## 💻 Development

### Prerequisites
- Node.js 18+
- npm or pnpm
- Wrangler CLI

### Setup

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start development server (sandbox)
pm2 start ecosystem.config.cjs

# Check status
pm2 list

# View logs
pm2 logs webapp --nostream

# Stop service
pm2 stop webapp
```

### Available Scripts

```bash
npm run dev          # Vite development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run deploy       # Deploy to Cloudflare Pages
npm run clean-port   # Clean port 3000
npm test            # Test local server
```

## 📂 Project Structure

```
webapp/
├── src/
│   ├── index.tsx           # Main Hono application
│   ├── components/
│   │   └── Layout.tsx      # Main layout component
│   └── pages/
│       ├── index.ts        # Pages export
│       ├── home.tsx        # Home page
│       ├── about.tsx       # About page
│       ├── services.tsx    # Services page
│       ├── practice-areas.tsx  # Practice areas
│       ├── articles.tsx    # Blog/Articles
│       └── contact.tsx     # Contact page
├── public/
│   └── static/
│       ├── logo.png        # Office logo
│       ├── lawyer-photo.jpg # Lawyer photo
│       └── style.css       # Custom styles (if needed)
├── dist/                   # Build output
├── ecosystem.config.cjs    # PM2 configuration
├── wrangler.jsonc         # Cloudflare configuration
├── package.json           # Dependencies
└── README.md             # This file
```

## 🌟 Features Implementation

### ✅ Completed Features

1. **Bilingual System**
   - Arabic (RTL) as default language
   - English (LTR) as secondary language
   - Language switcher in top bar

2. **Top Navigation Bar**
   - Phone number (click to call)
   - WhatsApp button
   - Language switcher
   - Responsive mobile menu

3. **Home Page**
   - Hero section with CTA buttons
   - Founder/About section with photo
   - Services cards grid
   - Practice areas overview
   - Client testimonials
   - Google Reviews integration
   - Contact CTA section

4. **About Page**
   - Founder biography
   - Mission & Vision
   - Core values
   - Experience timeline
   - Statistics

5. **Services Page**
   - Detailed service descriptions
   - Service features
   - CTA for each service

6. **Practice Areas Page**
   - All practice areas grid
   - Individual area details

7. **Articles/Blog**
   - Articles listing page
   - Single article page
   - Placeholder content

8. **Contact Page**
   - Contact form with validation
   - Contact information
   - Google Maps integration
   - Quick action buttons

9. **Common Elements**
   - WhatsApp floating button
   - Comprehensive footer
   - Social media links
   - Responsive design

## 📝 Content Management

### To Update Content:

1. **Contact Information**: Edit in `src/components/Layout.tsx` and `src/pages/contact.tsx`
2. **Services**: Edit in `src/pages/services.tsx`
3. **Practice Areas**: Edit in `src/pages/practice-areas.tsx`
4. **Articles**: Edit in `src/pages/articles.tsx`
5. **About Content**: Edit in `src/pages/about.tsx`

### Important Notes:
- Phone: `+971 50 123 4567` (placeholder - update with real number)
- WhatsApp: `+971 50 123 4567` (placeholder - update with real number)
- Email: `info@alhajeri-law.ae` (placeholder - update with real email)
- Google Maps: Update embed URL in `contact.tsx` with actual location
- Google Reviews: Update link in home page with actual Google Place ID

## 🔄 Next Steps for Production

### Before Going Live:

1. **Update Real Contact Information**
   - [ ] Update phone numbers
   - [ ] Update WhatsApp number
   - [ ] Update email address
   - [ ] Update office address details
   - [ ] Add actual Google Maps location

2. **Content**
   - [ ] Add real lawyer biography
   - [ ] Add actual article content
   - [ ] Update placeholder text
   - [ ] Add real client testimonials
   - [ ] Update statistics with actual data

3. **SEO & Analytics**
   - [ ] Add meta descriptions
   - [ ] Add Open Graph tags
   - [ ] Set up Google Analytics
   - [ ] Create sitemap.xml
   - [ ] Submit to search engines

4. **Social Media**
   - [ ] Add real social media links
   - [ ] Set up Google Business Profile
   - [ ] Enable Google Reviews

5. **Legal**
   - [ ] Add privacy policy page
   - [ ] Add terms of service
   - [ ] Add cookie consent

6. **Deploy to Cloudflare Pages**
   - [ ] Set up Cloudflare account
   - [ ] Deploy to production
   - [ ] Configure custom domain
   - [ ] Set up SSL certificate

## 🚀 Deployment to Cloudflare Pages

### Step 1: Setup Cloudflare API Key
```bash
# Call setup_cloudflare_api_key tool first
# Then verify authentication
npx wrangler whoami
```

### Step 2: Build the Project
```bash
npm run build
```

### Step 3: Create Cloudflare Pages Project
```bash
npx wrangler pages project create webapp \
  --production-branch main \
  --compatibility-date 2024-01-01
```

### Step 4: Deploy
```bash
npx wrangler pages deploy dist --project-name webapp
```

### Step 5: Custom Domain (Optional)
```bash
npx wrangler pages domain add yourdomain.com --project-name webapp
```

## 📊 Current Status

✅ **Development**: Complete  
✅ **Design**: Professional law office theme  
✅ **Bilingual**: Arabic & English fully implemented  
✅ **Responsive**: Mobile, tablet, desktop tested  
⏳ **Content**: Placeholder content (needs real content)  
⏳ **Deployment**: Ready for Cloudflare Pages deployment  

## 👥 Credits

**Developed for**: Nasser Shayea Al Hajeri Law Office  
**Location**: Al Ain City, UAE  
**Framework**: Hono (Cloudflare Workers)  
**Design**: Professional law office theme with dark green and gold colors

## 📄 License

© 2024 Nasser Shayea Al Hajeri - All Rights Reserved

---

**Last Updated**: December 8, 2024  
**Version**: 1.0.0  
**Status**: ✅ Ready for content update and deployment
