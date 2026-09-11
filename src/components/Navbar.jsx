import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const LOGO = 'https://lh3.googleusercontent.com/aida/AEtjO1XX8GoStUNmA3oqNHbYFP3jaTtmudxfNBIA6sznRB5gYT5qoGAG68xvMznWmyzXSpX3VcnfDPq4k1-z4Xfd7EBwl3x3FZ_LIXgGoBKrn2is6J8UfRCT3pl-27kP5IbL2eJJIA9i7754tDdoCZMZ5m2ASPWyBUWvEw_BM0m9J03aP21mPHKyATIXtunAhxfDOWRO9BBweZIm0jZ6EnPYLlGAnfVl4JgPKmmYcFpmvn6Q3srcU2jrKpUymf4'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/barber', label: 'Barber' },
    { to: '/spa', label: 'Spa' },
    { to: '/services', label: 'Services' },
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

    return (
        <>
            <header className="navbar">
                <div className="container navbar-inner">
                    {/* Brand */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', flexShrink: 0 }}>
                        <img src={LOGO} alt="Executive Hideaway" style={{ height: '2rem', objectFit: 'contain' }} />
                        <div>
                            <div className="headline-sm text-primary" style={{ lineHeight: 1 }}>EXECUTIVE HIDEAWAY</div>
                            <div className="label-md text-on-surface-variant" style={{ marginTop: '0.25rem', letterSpacing: '0.2em' }}>BARBER &amp; SPA • KILELESHWA</div>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav style={{ display: 'none', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
                        {navLinks.map(l => (
                            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                                {l.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                        <button
                            onClick={() => setIsLightMode(!isLightMode)}
                            style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', padding: '0.25rem', display: 'flex', alignItems: 'center' }}
                            aria-label="Toggle light/dark mode"
                            title="Toggle Theme"
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                                {isLightMode ? 'dark_mode' : 'light_mode'}
                            </span>
                        </button>

                        <a href="https://wa.me/254719506995" target="_blank" rel="noopener noreferrer" className="btn-outline"
                            style={{ display: 'none' }} id="book-btn">
                            BOOK APPOINTMENT
                        </a>
                        {/* Hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', padding: '0.25rem' }}
                            aria-label="Toggle menu"
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                                {menuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile menu overlay */}
            {menuOpen && (
                <div className="mobile-menu">
                    <button onClick={() => setMenuOpen(false)}
                        style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>close</span>
                    </button>
                    {navLinks.map(l => (
                        <NavLink key={l.to} to={l.to} end={l.to === '/'}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) => `headline-md text-${isActive ? 'primary' : 'on-surface'}`}
                            style={{ textDecoration: 'none', transition: 'color 0.2s' }}>
                            {l.label}
                        </NavLink>
                    ))}
                    <a href="https://wa.me/254719506995" target="_blank" rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="btn-primary" style={{ marginTop: '1rem' }}>
                        BOOK APPOINTMENT
                    </a>
                </div>
            )}

            <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          #book-btn { display: inline-flex !important; }
        }
      `}</style>
        </>
    )
}
