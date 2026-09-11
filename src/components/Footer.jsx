import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                {/* Diamond divider */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '3rem', textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <div style={{ width: '3rem', height: '1px', backgroundColor: 'rgba(236,194,70,0.4)' }}></div>
                        <span className="material-symbols-outlined text-primary">diamond</span>
                        <div style={{ width: '3rem', height: '1px', backgroundColor: 'rgba(236,194,70,0.4)' }}></div>
                    </div>
                    <p className="headline-sm text-primary" style={{ fontStyle: 'italic' }}>Luxury grooming. Exceptional wellness.</p>
                </div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(53,53,52,0.4)' }}>
                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: '1rem' }}>
                            <Logo height="3.5rem" />
                        </div>
                        <p className="body-sm text-on-surface-variant" style={{ lineHeight: 1.7 }}>
                            An ultra-refined sanctuary in Kileleshwa, Nairobi, dedicated to bespoke executive styling and restorative holistic wellness treatments.
                        </p>
                    </div>

                    {/* Navigation + Services side-by-side on mobile (2 columns), individual grid columns on desktop */}
                    <div className="footer-nav-services-grid">
                        {/* Navigation */}
                        <div>
                            <h4 className="label-lg text-primary" style={{ marginBottom: '1.25rem', letterSpacing: '0.18em' }}>NAVIGATION</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                                {[['/', 'Home'], ['/barber', 'The Barber Atelier'], ['/spa', 'Private Spa Suites'], ['/services', 'Services Menu']].map(([to, label]) => (
                                    <li key={to} className="body-sm">
                                        <Link to={to} className="text-on-surface-variant nav-link">{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="label-lg text-primary" style={{ marginBottom: '1.25rem', letterSpacing: '0.18em' }}>SERVICES</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                                {['Executive Haircut', 'Beard Sculpting', 'Deep Tissue Massage', 'Facial Therapy', 'Royal Hot Towel Shave', 'Executive Detox Pedicure'].map(s => (
                                    <li key={s} className="body-sm text-on-surface-variant">{s}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="label-lg text-primary" style={{ marginBottom: '1.25rem', letterSpacing: '0.18em' }}>THE HIDEAWAY</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="body-sm text-on-surface-variant">
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '1px' }}>location_on</span>
                                <span>275 Nyeri Close, Kileleshwa, Nairobi, Kenya</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>call</span>
                                <a href="tel:+254719506995" className="nav-link">+254 719 506 995</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>mail</span>
                                <a href="mailto:executivehideawaybarberandspa@gmail.com" className="nav-link" style={{ wordBreak: 'break-all' }}>
                                    executivehideawaybarberandspa@gmail.com
                                </a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>schedule</span>
                                <span>Mon - Sun: 7:00 AM – 11:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{ paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}
                    className="body-sm text-on-surface-variant">
                    <p>© 2026 Executive Hideaway Barber &amp; Spa. All Rights Reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        {['Instagram', 'TikTok', 'Facebook', 'WhatsApp'].map(s => (
                            <a key={s} href={`https://${s.toLowerCase()}.com`} target="_blank" rel="noopener"
                                className="label-md nav-link">{s.toUpperCase()}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
