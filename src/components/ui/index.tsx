// ─── SEO Meta Component ───────────────────────────
import { Helmet } from 'react-helmet-async'

interface SEOMetaProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  keywords?: string
  schema?: object
}

export function SEOMeta({ title, description, canonical, ogImage, keywords, schema }: SEOMetaProps) {
  const baseUrl = 'https://www.flynirvana.com'
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl
  const image = ogImage || `${baseUrl}/og-image.jpg`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Fly Nirvana – Nirvana Adventures" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@flynirvana" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}

// ─── WhatsApp Floating Button ─────────────────────
export function WhatsAppButton() {
  const msg = encodeURIComponent('Hi! I would like to make an enquiry for paragliding at Nirvana Adventures.')
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=919323708809&text=${msg}`}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      💬
      <style>{`
        .wa-float {
          position: fixed;
          bottom: 28px; right: 28px;
          width: 56px; height: 56px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          box-shadow: 0 6px 22px rgba(37,211,102,0.45);
          z-index: 990;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .wa-float:hover {
          transform: scale(1.12);
          box-shadow: 0 10px 32px rgba(37,211,102,0.55);
        }
      `}</style>
    </a>
  )
}

// ─── Marquee Banner ───────────────────────────────
const MARQUEE_ITEMS = [
  'Paragliding Courses', 'Tandem Flights', 'Kamshet Maharashtra',
  'ISO 9001:2008 Certified', 'Since 1997', 'APPI Licensed',
  'Native Place Guesthouse', 'Corporate Adventures',
]

export function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {[...Array(2)].map((_, i) => (
          <span key={i} style={{ display: 'inline-flex' }}>
            {MARQUEE_ITEMS.map((item) => (
              <span key={item} className="marquee-item">
                {item}<span className="marquee-dot" />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Page Hero Banner ─────────────────────────────
interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs: { label: string; path?: string }[]
}

import { Link } from 'react-router-dom'

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="page-hero" aria-label={`${title} page header`}>
      <div className="container">
        <div className="page-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>›</span>
                {b.path ? <Link to={b.path}>{b.label}</Link> : <span>{b.label}</span>}
              </span>
            ))}
          </nav>
          <h1 className="display-lg">{title}</h1>
          {subtitle && <p className="body-lg" style={{ marginTop: '16px', maxWidth: '680px' }}>{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials Grid ────────────────────────────
import type { Testimonial } from '@/types'

interface TestimonialsGridProps {
  items: Testimonial[]
}

export function TestimonialsGrid({ items }: TestimonialsGridProps) {
  return (
    <div className="testimonials-grid">
      {items.map((t) => (
        <article key={t.name} className="testimonial-card card" aria-label={`Review by ${t.name}`}>
          <span className="quote-mark" aria-hidden="true">"</span>
          <div className="stars" aria-label="5 stars">★★★★★</div>
          <p className="t-text">{t.text}</p>
          <div className="t-author">
            <div className="t-avatar" aria-hidden="true">{t.avatar}</div>
            <div>
              <div className="t-name">{t.name}</div>
              <div className="t-loc">{t.location}</div>
            </div>
          </div>
        </article>
      ))}
      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 48px;
        }
        .testimonial-card { padding: 30px; }
        .quote-mark {
          font-family: var(--font-display);
          font-size: 68px;
          color: rgba(232,168,48,0.18);
          line-height: 0.8;
          margin-bottom: 14px;
          display: block;
        }
        .stars { color: var(--gold); font-size: 12px; letter-spacing: 2px; margin-bottom: 14px; }
        .t-text { color: rgba(255,255,255,0.78); font-size: 14px; line-height: 1.8; font-weight: 300; margin-bottom: 22px; }
        .t-author { display: flex; align-items: center; gap: 12px; }
        .t-avatar { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, var(--horizon), var(--sun)); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
        .t-name { font-weight: 600; font-size: 14px; }
        .t-loc { font-size: 12px; color: var(--muted); margin-top: 2px; }
        @media (max-width: 900px) { .testimonials-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .testimonials-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}

// ─── Why Us Section ───────────────────────────────
import { WHY_US } from '@/data/index'

export function WhySection() {
  return (
    <section style={{ background: 'var(--sky2)' }} aria-label="Why choose Fly Nirvana">
      <div className="container">
        <div className="section-tag">The Nirvana Edge</div>
        <h2 className="display-lg">5 Reasons to Fly With Us</h2>
        <div className="why-grid">
          {WHY_US.map((w, i) => (
            <div key={w.number} className={`why-card card reveal delay-${i + 1}`}>
              <div className="why-num" aria-hidden="true">{w.number}</div>
              <span className="why-icon" role="img" aria-label={w.title}>{w.icon}</span>
              <h3 className="why-title">{w.title}</h3>
              <p className="why-desc">{w.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .why-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 18px; margin-top: 52px; }
        .why-card { padding: 26px 20px; text-align: center; }
        .why-num { font-family: var(--font-display); font-size: 44px; font-weight: 900; color: rgba(232,168,48,0.18); line-height: 1; margin-bottom: 10px; }
        .why-icon { font-size: 30px; margin-bottom: 14px; display: block; }
        .why-title { font-weight: 700; font-size: 13.5px; margin-bottom: 8px; line-height: 1.3; }
        .why-desc { font-size: 12.5px; color: var(--muted); line-height: 1.6; font-weight: 300; }
        @media (max-width: 1024px) { .why-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 640px) { .why-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 400px) { .why-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}

// ─── Newsletter Section ───────────────────────────
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) { setSubmitted(true); setEmail('') }
  }

  return (
    <section className="newsletter-section" aria-label="Newsletter signup">
      <div className="container">
        <div className="nl-inner">
          <div className="nl-text">
            <h2 className="display-md">Stay in the Loop ✉️</h2>
            <p className="body-md" style={{ marginTop: '8px' }}>
              Get course updates, seasonal schedules & adventure news delivered to your inbox.
            </p>
          </div>
          {submitted ? (
            <div className="nl-success">
              <span>🎉</span> Thank you! You're subscribed.
            </div>
          ) : (
            <form className="nl-form" onSubmit={handleSubmit} aria-label="Newsletter form">
              <input
                type="email"
                className="nl-input"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-gold">Subscribe</button>
            </form>
          )}
        </div>
      </div>
      <style>{`
        .newsletter-section {
          background: linear-gradient(135deg, var(--sky3) 0%, var(--sky2) 100%);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 68px 0;
        }
        .nl-inner { display: flex; align-items: center; justify-content: space-between; gap: 48px; flex-wrap: wrap; }
        .nl-text { flex: 1; min-width: 240px; }
        .nl-form { display: flex; gap: 12px; flex: 1; max-width: 420px; min-width: 260px; }
        .nl-input {
          flex: 1;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          border-radius: 50px;
          padding: 13px 22px;
          color: #fff;
          font-family: var(--font-body);
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }
        .nl-input::placeholder { color: var(--muted); }
        .nl-input:focus { border-color: var(--gold); }
        .nl-success {
          display: flex; align-items: center; gap: 10px;
          background: rgba(45,90,61,0.25); border: 1px solid rgba(45,90,61,0.45);
          border-radius: 12px; padding: 14px 20px;
          font-size: 15px; font-weight: 500; color: #7dc99e;
        }
        @media (max-width: 640px) { .nl-inner { flex-direction: column; } .nl-form { max-width: 100%; width: 100%; } }
      `}</style>
    </section>
  )
}

// ─── Course Card ──────────────────────────────────
import { useNavigate } from 'react-router-dom'
import type { Course } from '@/types'

interface CourseCardProps {
  course: Course
  delay?: number
}

export function CourseCard({ course, delay = 0 }: CourseCardProps) {
  const navigate = useNavigate()
  return (
    <article
      className={`course-card card reveal delay-${delay}`}
      onClick={() => navigate(`/learn-paragliding/${course.slug}`)}
      role="button"
      tabIndex={0}
      aria-label={`${course.name} — ${course.duration}`}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/learn-paragliding/${course.slug}`)}
    >
      <span className="cc-icon" role="img" aria-label={course.name}>{course.icon}</span>
      <div className="cc-dur">{course.duration}</div>
      <h3 className="cc-name">{course.name}</h3>
      <p className="cc-level">{course.level}</p>
      <p className="cc-desc">{course.shortDesc}</p>
      <div className="cc-arrow" aria-hidden="true">Learn more →</div>
      <style>{`
        .course-card {
          padding: 30px; cursor: pointer;
          position: relative; overflow: hidden;
        }
        .course-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(232,168,48,0.07), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .course-card:hover::before { opacity: 1; }
        .cc-icon { font-size: 36px; margin-bottom: 18px; display: block; }
        .cc-dur { font-size: 10.5px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; }
        .cc-name { font-family: var(--font-display); font-size: 19px; font-weight: 700; margin-bottom: 6px; line-height: 1.3; }
        .cc-level { font-size: 11px; color: var(--muted); font-weight: 500; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 12px; }
        .cc-desc { color: var(--muted); font-size: 13.5px; line-height: 1.7; font-weight: 300; }
        .cc-arrow { display: inline-flex; align-items: center; gap: 6px; color: var(--gold); font-size: 12.5px; font-weight: 600; margin-top: 18px; transition: gap 0.2s; }
        .course-card:hover .cc-arrow { gap: 12px; }
      `}</style>
    </article>
  )
}
