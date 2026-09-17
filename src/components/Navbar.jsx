import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/barber', label: 'Barber' },
  { to: '/spa', label: 'Spa' },
  { to: '/dining', label: 'Dining' },
  { to: '/services', label: 'Services' },
  { to: '/membership', label: 'Membership' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light-mode', 'light')
    } else {
      document.documentElement.classList.remove('light-mode', 'light')
    }
  }, [isLightMode])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          {/* Brand */}
          <Link to="/" className="navbar-brand">
            <Logo height="2.5rem" />
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav">
            {navLinks.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right controls */}
          <div className="navbar-controls">
            {/* Theme toggle */}
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="icon-btn"
              aria-label="Toggle light/dark mode"
              title="Toggle Theme"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                {isLightMode ? 'dark_mode' : 'light_mode'}
              </span>
            </button>

            {/* Desktop CTA */}
            <a href="https://wa.me/254719506995" target="_blank" rel="noopener noreferrer"
              className="btn-outline desktop-cta">
              BOOK NOW
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="icon-btn hamburger-btn"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          {/* Drawer links */}
          <nav className="mobile-nav">
            {navLinks.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="mobile-drawer-divider" />

          {/* CTA */}
          <a
            href="https://wa.me/254719506995"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mobile-cta"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calendar_month</span>
            BOOK APPOINTMENT
          </a>

          {/* Theme row */}
          <button
            onClick={() => setIsLightMode(!isLightMode)}
            className="mobile-theme-row"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--primary)' }}>
              {isLightMode ? 'dark_mode' : 'light_mode'}
            </span>
            <span className="label-md text-on-surface-variant" style={{ letterSpacing: '0.12em' }}>
              {isLightMode ? 'DARK MODE' : 'LIGHT MODE'}
            </span>
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="mobile-drawer-backdrop" onClick={() => setMenuOpen(false)} />}

      <style>{`
        /* ── Desktop nav visibility ── */
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .hamburger-btn { display: none !important; }
        }

        /* ── Navbar brand ── */
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          flex-shrink: 0;
          min-width: 0;
        }
        .navbar-logo {
          height: 2rem;
          width: auto;
          object-fit: contain;
          flex-shrink: 0;
        }
        .navbar-brand-text {
          min-width: 0;
          overflow: hidden;
        }
        .navbar-title {
          line-height: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .navbar-subtitle {
          margin-top: 0.2rem;
          letter-spacing: 0.18em;
          white-space: nowrap;
        }

        /* Hide subtitle on small phones */
        @media (max-width: 420px) {
          .navbar-subtitle { display: none; }
          .navbar-title { font-size: 14px; }
          .navbar-logo { height: 1.6rem; }
        }
        @media (max-width: 600px) and (min-width: 421px) {
          .navbar-subtitle { display: none; }
          .navbar-title { font-size: 16px; }
        }

        /* ── Controls cluster ── */
        .navbar-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }
        .icon-btn {
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
          padding: 0.4rem;
          display: flex;
          align-items: center;
          border-radius: 50%;
          transition: background 0.2s;
        }
        .icon-btn:hover { background: rgba(201,162,39,0.1); }

        /* Desktop nav */
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 1.75rem;
        }
        .desktop-cta { display: none; }

        /* ── Mobile drawer ── */
        .mobile-drawer {
          position: fixed;
          top: 5rem; /* navbar height */
          left: 0;
          right: 0;
          z-index: 49;
          transform: translateY(-110%);
          opacity: 0;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease;
          pointer-events: none;
        }
        .mobile-drawer.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
        .mobile-drawer-inner {
          background: color-mix(in srgb, var(--surface) 96%, transparent);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--gold-border);
          padding: 1.5rem 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        /* Drawer nav links */
        .mobile-nav {
          display: flex;
          flex-direction: column;
        }
        .mobile-nav-link {
          font-family: 'Manrope', sans-serif;
          font-size: 13px;
          letter-spacing: 0.15em;
          font-weight: 600;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--on-surface-variant);
          padding: 0.95rem 0;
          border-bottom: 1px solid var(--outline-variant);
          transition: color 0.2s, padding-left 0.2s;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          opacity: 0;
          transform: translateY(-8px);
        }
        .mobile-drawer.open .mobile-nav-link {
          opacity: 1;
          transform: translateY(0);
          transition: color 0.2s, opacity 0.3s ease, transform 0.3s ease, padding-left 0.2s;
        }
        .mobile-nav-link:hover { color: var(--primary); padding-left: 0.5rem; }
        .mobile-nav-link.active { color: var(--primary); }
        .mobile-nav-link.active::before {
          content: '';
          display: inline-block;
          width: 3px;
          height: 14px;
          background: var(--primary);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .mobile-drawer-divider {
          height: 1px;
          background: var(--gold-border);
          margin: 1rem 0 0.75rem;
        }

        .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.9rem 1.5rem;
          font-size: 12px;
          letter-spacing: 0.14em;
        }

        .mobile-theme-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.75rem 0;
          width: 100%;
          margin-top: 0.5rem;
        }

        /* Backdrop */
        .mobile-drawer-backdrop {
          position: fixed;
          inset: 0;
          top: 5rem;
          z-index: 48;
          background: rgba(0,0,0,0.4);
        }

        /* Hide drawer on desktop */
        @media (min-width: 900px) {
          .mobile-drawer { display: none; }
          .mobile-drawer-backdrop { display: none; }
        }
      `}</style>
    </>
  )
}
