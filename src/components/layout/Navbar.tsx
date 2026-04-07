import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COURSES } from '@/data/courses'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on route change
  useEffect(() => { setDrawerOpen(false) }, [pathname])

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="topbar">
        <span>
          CONTACT:&nbsp;
          <a href="tel:+919323708809">+91 9323708809</a>
          &nbsp;|&nbsp;
          <a href="mailto:flynirvana@gmail.com">flynirvana@gmail.com</a>
        </span>
        <div className="topbar-social">
          <a href="https://facebook.com/NirvanaFlyingClub" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
          <a href="https://instagram.com/flynirvana" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
          <a href="https://twitter.com/flynirvana" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
          <a href="https://youtube.com/user/flynirvana" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <Link to="/" className="nav-logo" aria-label="Fly Nirvana Home">
          🪂 Fly<span>Nirvana</span>
        </Link>

        <ul className="nav-links" role="menubar">
          {/* Learn Paragliding dropdown */}
          <li className="nav-item has-dropdown" role="none">
            <Link to="/learn-paragliding" className="nav-link" role="menuitem">
              Learn Paragliding <span className="nav-caret">▾</span>
            </Link>
            <div className="nav-dropdown" role="menu" aria-label="Learn Paragliding submenu">
              <Link to="/learn-paragliding" className="dropdown-link" role="menuitem">All Courses →</Link>
              {COURSES.map((c) => (
                <Link key={c.slug} to={`/learn-paragliding/${c.slug}`} className="dropdown-link" role="menuitem">
                  <span className="dropdown-dur">{c.duration}</span> — {c.name}
                </Link>
              ))}
            </div>
          </li>
          <li role="none"><Link to="/paragliding-holidays" className="nav-link" role="menuitem">Paragliding Holidays</Link></li>
          <li role="none"><Link to="/tandem-paragliding" className="nav-link" role="menuitem">Tandem Flights</Link></li>
          <li role="none"><Link to="/corporate-adventures" className="nav-link" role="menuitem">Corporate</Link></li>
          <li role="none"><Link to="/accommodation" className="nav-link" role="menuitem">Accommodation</Link></li>
          <li role="none"><Link to="/about" className="nav-link" role="menuitem">About</Link></li>
          <li role="none">
            <Link to="/contact" className="nav-link nav-cta" role="menuitem" aria-label="Book Now">
              Book Now →
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger${drawerOpen ? ' open' : ''}`}
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
          aria-controls="mobile-drawer"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div
        id="mobile-drawer"
        className={`drawer${drawerOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">✕</button>
        <div className="drawer-content">
          <div className="drawer-section-title">Learn Paragliding</div>
          <Link to="/learn-paragliding" className="drawer-link bold">View All Courses</Link>
          {COURSES.map((c) => (
            <Link key={c.slug} to={`/learn-paragliding/${c.slug}`} className="drawer-sub">{c.name}</Link>
          ))}
          <Link to="/paragliding-holidays" className="drawer-link">Paragliding Holidays</Link>
          <Link to="/tandem-paragliding" className="drawer-link">Tandem Paragliding</Link>
          <Link to="/corporate-adventures" className="drawer-link">Corporate Adventures</Link>
          <Link to="/accommodation" className="drawer-link">Accommodation</Link>
          <Link to="/about" className="drawer-link">About Us</Link>
          <Link to="/contact" className="drawer-link">Contact</Link>
          <Link to="/contact" className="drawer-link cta">Book Now →</Link>
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div className="drawer-overlay" onClick={() => setDrawerOpen(false)} aria-hidden="true" />
      )}
    </>
  )
}
