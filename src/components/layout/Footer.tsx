import { Link } from 'react-router-dom'
import { COURSES } from '@/data/courses'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="Fly Nirvana Home">
              🪂 Fly<span>Nirvana</span>
            </Link>
            <p>India's first and leading paragliding school with ISO&nbsp;9001:2008 certification. Based in Kamshet, Maharashtra since 1997.</p>
            <address className="footer-contact">
              <a href="tel:+919323708809">📞 +91 9323708809</a>
              <a href="mailto:flynirvana@gmail.com">✉ flynirvana@gmail.com</a>
              <a
                href="https://maps.google.com/?q=Kamshet,Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 Kamshet, Maharashtra, India
              </a>
            </address>
            <div className="footer-social" aria-label="Social media links">
              <a href="https://facebook.com/NirvanaFlyingClub" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">FB</a>
              <a href="https://instagram.com/flynirvana" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">IG</a>
              <a href="https://twitter.com/flynirvana" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">𝕏</a>
              <a href="https://youtube.com/user/flynirvana" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">▶</a>
            </div>
          </div>

          {/* Courses */}
          <nav className="footer-col" aria-label="Paragliding courses">
            <h3>Learn Paragliding</h3>
            <ul>
              {COURSES.map((c) => (
                <li key={c.slug}>
                  <Link to={`/learn-paragliding/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Explore */}
          <nav className="footer-col" aria-label="Explore">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/tandem-paragliding">Tandem Paragliding</Link></li>
              <li><Link to="/paragliding-holidays">Paragliding Holidays</Link></li>
              <li><Link to="/paragliding-holidays">About Kamshet</Link></li>
              <li><Link to="/corporate-adventures">Corporate Adventures</Link></li>
              <li><Link to="/accommodation">Accommodation</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Certifications */}
          <div className="footer-col">
            <h3>Certified By</h3>
            <div className="cert-badges">
              <div className="cert-badge">🏅 ISO 9001:2008</div>
              <div className="cert-badge">🪂 APPI Affiliated</div>
              <div className="cert-badge">🌟 Est. 1997</div>
            </div>
            <h3 style={{ marginTop: '28px' }}>Quick Links</h3>
            <ul>
              <li><Link to="/contact">Book a Course</Link></li>
              <li><Link to="/tandem-paragliding">Book Tandem Flight</Link></li>
              <li><Link to="/accommodation">Book Accommodation</Link></li>
              <li><Link to="/corporate-adventures">Corporate Enquiry</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Nirvana Adventures Pvt. Ltd. · Kamshet, Maharashtra, India</p>
          <div className="footer-bottom-links">
            <Link to="/about">Privacy Policy</Link>
            <Link to="/about">Terms of Use</Link>
            <Link to="/about">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
