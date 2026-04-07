import { Link } from 'react-router-dom'
import {
  SEOMeta, Marquee, TestimonialsGrid,
  WhySection, Newsletter, CourseCard,
} from '@/components/ui/index'
import { COURSES } from '@/data/courses'
import { TESTIMONIALS, EVENTS } from '@/data/index'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import './HomePage.css'

const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nirvana Adventures',
  url: 'https://www.flynirvana.com',
  logo: 'https://www.flynirvana.com/favicon.svg',
  description: "India's first ISO 9001:2008 certified paragliding school since 1997 in Kamshet, Maharashtra.",
  telephone: '+919323708809',
  email: 'flynirvana@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kamshet',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://facebook.com/NirvanaFlyingClub',
    'https://instagram.com/flynirvana',
    'https://twitter.com/flynirvana',
  ],
}

export default function HomePage() {
  useScrollReveal()

  return (
    <>
      <SEOMeta
        title="Fly Nirvana – India's #1 Paragliding School | Kamshet, Maharashtra Since 1997"
        description="Nirvana Adventures is India's first ISO 9001:2008 certified paragliding school in Kamshet, Maharashtra. Courses, tandem flights, accommodation & corporate adventures since 1997. Just 60km from Pune."
        canonical="/"
        keywords="paragliding Kamshet, paragliding school India, tandem paragliding Maharashtra, learn paragliding Pune Mumbai, APPI paragliding course India"
        schema={HOME_SCHEMA}
      />

      {/* ── HERO ── */}
      <section className="hero" aria-label="Hero section">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-stars" aria-hidden="true" />
        <div className="hero-cloud c1" aria-hidden="true" />
        <div className="hero-cloud c2" aria-hidden="true" />

        {/* Animated paraglider SVG */}
        <svg className="hero-paraglider" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <ellipse cx="140" cy="58" rx="128" ry="36" fill="none" stroke="rgba(232,168,48,0.65)" strokeWidth="2.5" />
          <ellipse cx="140" cy="58" rx="128" ry="36" fill="rgba(232,168,48,0.07)" />
          <path d="M12 58 Q70 22 140 58 Q210 22 268 58" fill="none" stroke="rgba(232,168,48,0.45)" strokeWidth="2" />
          <path d="M82 58 L102 130 M140 56 L140 130 M198 58 L178 130" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
          <rect x="116" y="128" width="48" height="20" rx="10" fill="rgba(232,168,48,0.55)" />
          <circle cx="140" cy="148" r="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        </svg>

        <div className="hero-content">
          <div className="hero-badge" role="status">
            <span className="badge-pulse" aria-hidden="true" />
            India's Oldest Paragliding School · Est. 1997
          </div>

          <h1 className="display-xl hero-title">
            Soar Above<br />
            <em>the Sahyadris</em>
          </h1>

          <p className="hero-subtitle body-lg">
            India's first ISO 9001:2008 certified paragliding school in Kamshet, Maharashtra
            — just a few hours from Mumbai &amp; Pune. Experience the freedom of flight.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-gold btn-lg">
              Book Your Flight ↗
            </Link>
            <Link to="/learn-paragliding" className="btn btn-outline btn-lg">
              View Courses
            </Link>
          </div>

          <div className="hero-stats" role="list" aria-label="Key statistics">
            {[
              { value: '25+', label: 'Years of Experience' },
              { value: '10K+', label: 'Pilots Trained' },
              { value: 'ISO', label: '9001:2008 Certified' },
              { value: '11', label: 'Courses Available' },
            ].map((s) => (
              <div key={s.label} className="stat-item" role="listitem">
                <span className="stat-value" aria-label={`${s.value} ${s.label}`}>{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      <Marquee />

      {/* ── ABOUT STRIP ── */}
      <section className="about-strip" aria-label="About Nirvana Adventures">
        <div className="container">
          <div className="about-grid">
            <div className="reveal-left">
              <div className="section-tag">About Nirvana Adventures</div>
              <h2 className="display-lg">Welcome to India's First Flying Family</h2>
              <div className="about-body">
                <p className="body-lg" style={{ marginTop: '20px' }}>
                  Nirvana Adventures came into being in 1997 to fulfil your dreams of free flight
                  by offering a safe, standardized and encouraging atmosphere to anyone interested
                  in joining the magical world of paragliding.
                </p>
                <p className="body-md" style={{ marginTop: '14px' }}>
                  Located in Kamshet, Maharashtra, we are just a few hours' drive from Mumbai and
                  Pune, and offer food-and-stay facilities by the tranquil Lake Vadivali, amidst
                  the majestic Sahyadri mountain range.
                </p>
              </div>
              <div className="badge badge-green" style={{ marginTop: '22px' }}>
                ✔ ISO 9001:2008 Certified &nbsp;·&nbsp; APPI Affiliated
              </div>
              <Link to="/about" className="btn btn-gold" style={{ marginTop: '28px' }}>
                Our Story →
              </Link>
            </div>
            <div className="about-mosaic reveal">
              <div className="mosaic-tile tall">🏔️</div>
              <div className="mosaic-tile">🌅</div>
              <div className="mosaic-tile">🍽️</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section aria-label="Paragliding courses">
        <div className="container">
          <div className="section-tag reveal">Learn to Fly</div>
          <h2 className="display-lg reveal">Paragliding Courses</h2>
          <p className="body-lg reveal" style={{ maxWidth: '620px', marginTop: '12px' }}>
            From your very first flight to an APPI international licence — a course for every
            stage of your paragliding journey.
          </p>
          <div className="courses-preview-grid">
            {COURSES.slice(0, 6).map((c, i) => (
              <CourseCard key={c.slug} course={c} delay={Math.min(i + 1, 5)} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link to="/learn-paragliding" className="btn btn-outline">
              View All 11 Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TANDEM + STAY SPLIT ── */}
      <section className="split-section" aria-label="Tandem flights and accommodation">
        <div className="container">
          <div className="split-grid">
            {/* Tandem */}
            <div className="reveal-left">
              <div className="section-tag">No Training Needed</div>
              <h2 className="display-md" style={{ marginTop: '4px', marginBottom: '16px' }}>
                Tandem Paragliding
              </h2>
              <p className="body-md" style={{ marginBottom: '28px' }}>
                Experience the thrill of flight with an expert pilot — no training required. Book
                a 10-to-35 minute flight over Kamshet's breathtaking landscape.
              </p>
              <div className="pricing-table">
                <div className="pricing-head pricing-cols-3">
                  <span>Package</span><span>Weekday</span><span>Weekend</span>
                </div>
                {[
                  { plan: 'Easy Flight', sub: '10–15 mins', wd: '₹3,000', we: '₹3,500' },
                  { plan: 'Learning Flight', sub: '20–25 mins', wd: '₹5,000', we: '₹5,500' },
                  { plan: 'Pro Flight', sub: '30–35 mins', wd: '₹7,000', we: '₹7,500' },
                ].map((r) => (
                  <div key={r.plan} className="pricing-row pricing-cols-3">
                    <div>
                      <div className="price-plan-name">{r.plan}</div>
                      <div className="price-plan-sub">{r.sub}</div>
                    </div>
                    <div className="price-amount">{r.wd}</div>
                    <div className="price-amount">{r.we}</div>
                  </div>
                ))}
              </div>
              <Link to="/tandem-paragliding" className="btn btn-gold" style={{ marginTop: '22px' }}>
                Full Tandem Details →
              </Link>
            </div>

            {/* Stay */}
            <div className="reveal-right">
              <div className="section-tag">Food &amp; Stay</div>
              <h2 className="display-md" style={{ marginTop: '4px', marginBottom: '16px' }}>
                Native Place Guesthouse
              </h2>
              <p className="body-md" style={{ marginBottom: '22px' }}>
                Overlooking Lake Vadivali and the majestic Sahyadri range, our eco-friendly
                guesthouse is your home away from home.
              </p>
              <div className="check-list">
                {[
                  { icon: '🌿', text: 'Stay in the Midst of Nature — wake up to misty Sahyadri mornings' },
                  { icon: '🍛', text: 'Enjoy Local Cuisine — home-cooked Maharashtrian meals from our garden' },
                  { icon: '🌅', text: 'Catch Gorgeous Sunsets over Lake Vadivali every evening' },
                  { icon: '🤝', text: 'Meet pilots & adventurers from around the world' },
                ].map((item) => (
                  <div key={item.text} className="check-item">
                    <span className="check-icon">✓</span>
                    <span><strong>{item.icon}</strong> {item.text}</span>
                  </div>
                ))}
              </div>
              <Link to="/accommodation" className="btn btn-outline" style={{ marginTop: '24px' }}>
                View Accommodation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section aria-label="Customer testimonials">
        <div className="container">
          <div className="section-tag reveal">Student Stories</div>
          <h2 className="display-lg reveal">What Our Pilots Say</h2>
          <p className="body-lg reveal" style={{ maxWidth: '580px', marginTop: '12px' }}>
            Hear from students, visiting pilots and corporate clients who've experienced the
            Nirvana difference.
          </p>
          <TestimonialsGrid items={TESTIMONIALS.slice(0, 3)} />
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className="events-section" aria-label="Upcoming events">
        <div className="container">
          <div className="section-tag reveal">Mark Your Calendar</div>
          <h2 className="display-lg reveal">Events Calendar</h2>
          <p className="body-lg reveal" style={{ maxWidth: '560px', marginTop: '12px' }}>
            Join us for exciting events, seasonal openings, and community gatherings at Kamshet.
          </p>
          <div className="events-list" role="list">
            {EVENTS.map((ev) => (
              <article key={ev.title} className="event-card reveal card" role="listitem">
                <div className="ev-date">
                  <span className="ev-day">{ev.day}</span>
                  <span className="ev-month">{ev.month}</span>
                </div>
                <div className="ev-body">
                  <h3 className="ev-title">{ev.title}</h3>
                  <p className="ev-desc body-sm">{ev.description}</p>
                </div>
                <span className="ev-arrow" aria-hidden="true">→</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhySection />
      <Newsletter />
    </>
  )
}
