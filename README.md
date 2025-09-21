# Harshhaa Vardhan Reddy - DevOps Engineer Portfolio

A modern, performant, and accessible CV/portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

### Performance Optimizations
- **React.memo** for component memoization
- **Font preloading** for faster text rendering
- **Image optimization** with Next.js Image component
- **Bundle analysis** with @next/bundle-analyzer
- **CSS optimization** with Tailwind CSS
- **Code splitting** and lazy loading
- **Console removal** in production builds

### Accessibility Improvements
- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **Focus management** with visible focus indicators
- **Semantic HTML** structure
- **Reduced motion** support for users with vestibular disorders
- **High contrast** support

### SEO Enhancements
- **Comprehensive metadata** with Open Graph and Twitter cards
- **Sitemap generation** for better indexing
- **Robots.txt** optimization
- **Structured data** for search engines
- **Performance monitoring** with Vercel Analytics and Speed Insights

### Security Features
- **Content Security Policy (CSP)** headers
- **XSS Protection** headers
- **HSTS** for secure connections
- **Frame options** to prevent clickjacking
- **Referrer policy** for privacy

### Developer Experience
- **TypeScript** for type safety
- **ESLint** with Next.js rules
- **Prettier** for code formatting
- **Husky** for git hooks (optional)
- **Comprehensive scripts** for development workflow

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics & Speed Insights

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/NotHarshhaa/cv-portfolio.git
cd cv-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Performance
npm run analyze      # Analyze bundle size
npm run clean        # Clean build cache
```

## 📁 Project Structure

```
cv-portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Main portfolio page
│   │   ├── loading.tsx     # Loading component
│   │   ├── error.tsx       # Error boundary
│   │   ├── sitemap.ts      # Sitemap generator
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── project-card.tsx
│   │   ├── command-menu.tsx
│   │   └── theme-toggle.tsx
│   ├── data/              # Data files
│   │   └── resume-data.tsx
│   ├── lib/               # Utility functions
│   └── types.d.ts         # TypeScript types
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Updating Personal Information
Edit `src/data/resume-data.tsx` to update your personal information, work experience, education, skills, and projects.

### Styling
- Modify `src/app/globals.css` for global styles
- Update `tailwind.config.js` for theme customization
- Edit component styles in individual component files

### SEO
- Update metadata in `src/app/layout.tsx`
- Modify `public/site.webmanifest` for PWA settings
- Update `public/robots.txt` for search engine directives

## 📊 Performance Metrics

The site is optimized for:
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All metrics in the green
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Loading Speed**: Sub-2 second initial load time

## 🔧 Recent Optimizations

### Performance
- ✅ Added React.memo for component memoization
- ✅ Implemented font preloading
- ✅ Optimized images with Next.js Image component
- ✅ Added bundle analyzer for performance monitoring
- ✅ Implemented code splitting and lazy loading
- ✅ Added console removal in production

### Accessibility
- ✅ Added comprehensive ARIA labels
- ✅ Implemented keyboard navigation support
- ✅ Added focus management with visible indicators
- ✅ Improved semantic HTML structure
- ✅ Added reduced motion support
- ✅ Enhanced color contrast

### SEO
- ✅ Comprehensive metadata with Open Graph and Twitter cards
- ✅ Automatic sitemap generation
- ✅ Optimized robots.txt
- ✅ Added structured data
- ✅ Implemented performance monitoring

### Security
- ✅ Content Security Policy headers
- ✅ XSS Protection headers
- ✅ HSTS for secure connections
- ✅ Frame options to prevent clickjacking
- ✅ Referrer policy for privacy

### Developer Experience
- ✅ TypeScript for type safety
- ✅ ESLint with Next.js rules
- ✅ Prettier for code formatting
- ✅ Comprehensive development scripts
- ✅ Error boundaries and loading states

## 🚀 Deployment

The site is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Environment variables are automatically handled
4. Analytics and Speed Insights are automatically enabled

## 📈 Monitoring

- **Vercel Analytics**: Track user behavior and performance
- **Speed Insights**: Monitor Core Web Vitals
- **Bundle Analyzer**: Analyze bundle size and composition
- **Error Tracking**: Automatic error reporting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

- **Name**: Harshhaa Vardhan Reddy
- **Email**: harshhaa03@gmail.com
- **LinkedIn**: [harshhaa-vardhan-reddy](https://www.linkedin.com/in/harshhaa-vardhan-reddy)
- **GitHub**: [NotHarshhaa](https://github.com/NotHarshhaa)
- **Portfolio**: [notharshhaa.site](https://notharshhaa.site)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
