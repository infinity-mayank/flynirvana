# 🪂 Fly Nirvana — React + TypeScript Website

A modern, fully responsive, SEO-optimised redesign of [flynirvana.com](https://www.flynirvana.com) built with **React 18 + TypeScript + Vite**.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18 or higher
- **npm** v9 or higher

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## 📦 Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 🗂️ Project Structure

```
flynirvana/
├── public/
│   ├── favicon.svg          # SVG favicon (paraglider icon)
│   └── robots.txt           # SEO robots file
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx   # Sticky navbar with dropdown + mobile drawer
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.tsx   # 4-column footer
│   │   │   └── Footer.css
│   │   └── ui/
│   │       ├── index.tsx    # Shared components (SEOMeta, Marquee, PageHero,
│   │       │                #   TestimonialsGrid, WhySection, Newsletter, CourseCard)
│   │       └── WhatsAppButton.tsx
│   ├── data/
│   │   ├── courses.ts       # All 11 paragliding course definitions
│   │   └── index.ts         # Testimonials, events, flying sites, why-us data
│   ├── hooks/
│   │   └── useScrollReveal.ts  # IntersectionObserver scroll animations
│   ├── pages/
│   │   ├── HomePage.tsx     # Full home page
│   │   ├── HomePage.css
│   │   ├── LearnPage.tsx    # All courses listing
│   │   ├── CoursePage.tsx   # Dynamic individual course page
│   │   ├── CoursePage.css
│   │   ├── TandemPage.tsx   # Tandem paragliding page
│   │   ├── TandemPage.css
│   │   ├── HolidaysPage.tsx
│   │   ├── CorporatePage.tsx
│   │   ├── AccommodationPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx  # Working contact form with validation
│   │   └── NotFoundPage.tsx # Custom 404
│   ├── styles/
│   │   └── global.css       # Design tokens, resets, shared utility classes
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── App.tsx              # Router setup + scroll-to-top
│   └── main.tsx             # React entry point with HelmetProvider
├── index.html               # Full SEO meta tags + Schema.org JSON-LD
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/learn-paragliding` | All Courses |
| `/learn-paragliding/:courseSlug` | Individual Course (11 courses) |
| `/tandem-paragliding` | Tandem Flights + Pricing |
| `/paragliding-holidays` | Kamshet Holidays + Flying Sites |
| `/corporate-adventures` | Corporate & School Groups |
| `/accommodation` | Native Place Guesthouse |
| `/about` | About Us + Timeline |
| `/contact` | Contact Form + Info |
| `*` | 404 Not Found |

---

## 🔍 SEO Features

- **Per-page `<title>` and `<meta description>`** via `react-helmet-async`
- **Open Graph** tags (Facebook, LinkedIn sharing)
- **Twitter Card** tags
- **Canonical URLs** on every page
- **Schema.org JSON-LD** structured data:
  - `LocalBusiness` on homepage
  - `Course` schema on each course page
  - `Service` schema on tandem page
  - `ContactPage` schema on contact page
- **`robots.txt`** included
- **Geo / Local SEO** meta tags (`geo.region`, `geo.position`)
- **Semantic HTML** (`<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, ARIA labels)
- **Preconnect** to Google Fonts for performance

---

## ✨ Features

- ✅ React 18 + TypeScript + Vite
- ✅ React Router v6 (client-side routing, scroll-to-top)
- ✅ Fully mobile responsive (hamburger drawer, fluid grids)
- ✅ Scroll-reveal animations (IntersectionObserver)
- ✅ Animated hero with SVG paraglider
- ✅ Sticky navbar with dropdown menus
- ✅ 11 individual course pages (dynamic routing)
- ✅ Tandem pricing table
- ✅ Contact form with validation
- ✅ WhatsApp floating button
- ✅ Newsletter signup
- ✅ Custom 404 page
- ✅ Accessible markup (ARIA, semantic HTML, keyboard navigation)

---

## 🎨 Design

| Token | Value |
|-------|-------|
| `--sky` | `#07111f` (deep navy) |
| `--gold` | `#e8a830` (amber gold accent) |
| `--horizon` | `#c8773a` (warm orange) |
| Font Display | Playfair Display (serif) |
| Font Body | DM Sans (sans-serif) |

---

## 📞 Contact (Original Site)

- **Phone:** +91 9323708809
- **Email:** flynirvana@gmail.com
- **Location:** Kamshet, Maharashtra, India

---

*Built with ❤️ using React + TypeScript + Vite*
