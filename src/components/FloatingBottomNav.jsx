import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function FloatingBottomNav() {
    const location = useLocation()
    const [visible, setVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setVisible(false)
            } else {
                setVisible(true)
            }
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const navItems = [
        { path: '/', label: 'Home', icon: 'home' },
        { path: '/barber', label: 'Barber', icon: 'content_cut' },
        { path: '/spa', label: 'Spa', icon: 'spa' },
        { path: '/dining', label: 'Dining', icon: 'restaurant' },
        { path: '/services', label: 'Services', icon: 'grid_view' },
    ]

    return (
        <nav
            className={`mobile-dock-nav ${visible ? 'dock-visible' : 'dock-hidden'}`}
            aria-label="Mobile Navigation"
        >
            <div className="mobile-dock-inner">
                {navItems.map(item => {
                    const isActive = location.pathname === item.path
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`mobile-dock-tab ${isActive ? 'active' : ''}`}
                        >
                            <span className="material-symbols-outlined dock-icon">{item.icon}</span>
                            <span className="mobile-dock-label">{item.label}</span>
                            {isActive && <span className="active-line" />}
                        </Link>
                    )
                })}
                <a
                    href="https://wa.me/254719506995"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-dock-tab mobile-dock-book"
                >
                    <span className="material-symbols-outlined dock-icon">calendar_month</span>
                    <span className="mobile-dock-label">Book</span>
                </a>
            </div>
        </nav>
    )
}
