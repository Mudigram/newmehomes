# NewMe Independent Living Website

A modern, responsive website for NewMe Independent Living - providing safe, supportive, and affordable housing for independent seniors, military veterans, and adults in transition.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## 🏠 About NewMe Independent Living

NewMe Independent Living provides a safe, supportive, and affordable home environment for adults seeking independence with dignity. We serve:

- Independent seniors
- Military veterans
- Adults in transition
- Re-entry residents

## ✨ Features

### 🎨 Modern Design
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Premium Aesthetics**: Warm color palette with smooth animations
- **Accessible**: WCAG compliant with semantic HTML

### 📄 Pages
- **Homepage**: Hero section with trust indicators and call-to-action
- **About**: Mission, vision, and who we serve
- **Services**: Comprehensive list of amenities and services
- **Accommodations**: Shared and private room options
- **Contact**: Contact form with FAQ accordion
- **Reviews**: Testimonials from residents and families

### 🔍 SEO Optimized
- **Structured Data**: Organization, LocalBusiness, and FAQPage schemas
- **Meta Tags**: Optimized titles, descriptions, and Open Graph tags
- **Page-Specific Metadata**: Custom SEO for each page
- **Mobile-First**: Fast loading and mobile-optimized

### 🎯 Interactive Features
- **FAQ Accordion**: Expandable/collapsible questions on Contact page
- **Lightbox Gallery**: Full-screen image viewer on Accommodations page
- **Testimonial Carousel**: Auto-playing reviews with manual controls
- **Smooth Animations**: Fade-in effects and hover interactions

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist Sans & Geist Mono](https://vercel.com/font)
- **Image Optimization**: Next.js Image component

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/newmehomes.git
   cd newmehomes
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
newmehomes/
├── public/
│   └── assets/          # Images and static files
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── about/
│   │   ├── accommodations/
│   │   ├── contact/
│   │   ├── reviews/
│   │   ├── services/
│   │   ├── layout.tsx   # Root layout with SEO schemas
│   │   └── page.tsx     # Homepage
│   └── components/
│       ├── home/        # Homepage sections
│       │   ├── HeroSection.tsx
│       │   ├── AboutSection.tsx
│       │   ├── ServicesSection.tsx
│       │   ├── Testimonials.tsx
│       │   ├── WhyChooseUs.tsx
│       │   └── CTASection.tsx
│       ├── layout/      # Layout components
│       │   ├── NavBar.tsx
│       │   ├── Footer.tsx
│       │   └── PageHeader.tsx
│       └── ui/          # Reusable UI components
│           └── button.tsx
└── tailwind.config.ts   # Tailwind configuration
```

## 🎨 Brand Colors

```css
--primary-brown: #6B4423    /* Primary text and headings */
--medium-brown: #A67C52     /* Accents and buttons */
--light-brown: #D4B896      /* Borders and subtle elements */
--cream: #FFFDF8            /* Background */
--warm-cream: #F4E4B8       /* Highlights and CTAs */
--olive-green: #7A8450      /* Success states and checkmarks */
```

## 📞 Contact Information

- **Phone**: 682-407-5920
- **Email**: irednewme@gmail.com
- **Address**: [To Be Updated]

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Customization

### Update Contact Information

Edit the following files:
- `src/app/layout.tsx` - Structured data schemas
- `src/components/layout/Footer.tsx` - Footer contact info
- `src/app/contact/page.tsx` - Contact page details

### Change Brand Colors

Update `src/app/globals.css` and search/replace color values throughout components.

### Add New Pages

Create a new folder in `src/app/` with a `page.tsx` file. Next.js will automatically create the route.

## 🔒 SEO Features

- ✅ Organization Schema (JSON-LD)
- ✅ LocalBusiness Schema
- ✅ FAQPage Schema
- ✅ Open Graph tags for social sharing
- ✅ Page-specific meta titles and descriptions
- ✅ Semantic HTML structure
- ✅ Mobile-optimized

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Vercel](https://vercel.com/font)

---

**NewMe Independent Living** - *Your Home Away From Home*

For questions or support, contact us at irednewme@gmail.com or call 682-407-5920.
