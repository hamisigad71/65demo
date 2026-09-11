import { Link } from 'react-router-dom'
import { useState } from 'react'

const HERO_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBuyaSQjJKSzKDuPYgHsO0aYBZV9-Q55KKbuRlKkc5Vef9SIHIpteKkGUAvmYnl2tyuaG9BWEYThLl3iE3sCdwqkKl5HdcBpwb0yMm4g6gZ4-likEKySzX0RMC0s3c2Nb-ywjfw6qq21J7v20iVQo2cCwWFTl-s79Cpv8LucW62ocWjDVD4N5hsWGC-6C9NBqy3Cq2qdyxrIdR4EnXa6mXeDf_dP4mnSaPm7TUg9an7I-uFWccN4Xm0"
const BARBER_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBNx5HmYtOjYk5u233w4nB0V66KcmkD81M3DckYNQuE-wnH7_eC6Cv1G0zbIEMQaCjcF0r0NmQdLZqmGtAGXYJ6N2E4vAFpjKpBqA4BdbPVSmwDRT8RU0jIJ1plVDJIT_EUF829HxQjNPFn-CCZHi1neArVSexgcyU8I3GJIC0b1hfspcgy1brw5Z0eKS4YfJr6cJt4qMpJNb_88XypIgox9YPA5-1MFqpQxqu5DlJDjwahKwplJ26-"
const SPA_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBvmmyTA-oa3K4zO1U09L_-AG6bVPZ9f76qhy0Dd3aJ2CW0myZGu6pMMI4tqpyNtiwUFOxLTcQfnPN2bxNhwy5UWs-EWw4noSQ059DPInMY8hUtColdUhbG3pE5oKAcZt--Ihk66958CqPy1FnujNIEZPstVQNAd1tSZ4TB_JJl6Wa3zaRi7KOfyJg55fPBgPUscl2tdSlI0nCyPB1pkwMUWRXxY-hIQzz4eIEGp8-fI051myKOalNd"
const LOUNGE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDOpbQ5hQBsPyjIgehnXN83vIntfg9XsloCPJ7J-AL4jPFd-q-BBLNBwU5qatYD0bRemP5eCHHZw_K9ql0MTzqWT0NQ3IZSTpR326PHuMv39s4_5r7qc8EwZ-z7-HAMahlcXq8lJHY08vqgofdO7alIxdn6O3XSQdN9MT02LUgZFzImjmf-M0aRmi0CEhIk1hMQbysMtnmR8EVmTsngQTO9Gg4NvZu50eVrmXTderTs00NzgoFdbLkP"
const EDITORIAL_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBw7-RDmElyQ4FJgJAx_NUuth55U_9zjJeMB7JqufLUz8ZqVzrFifXVjXjo_vDXGUt0A6HOZH2oBNw7hqWnNHNqhwRP_3jxPZkFK44Wf0KzBlogPAzD--P2aEnxao1k13Of9_-x9vgLB3cmWIBZZrFwLUdcePdUFfEWUwZK91cmMEPdnFyo9VzXtIN9RM3idwswZiUi37ep_4VB50wR6fC9-Znl0QuSc1flBHl8mybP4NvU4tXSHFDL"
const MAP_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDnemhVGcq-fGCcrDjcdDsd6GbhXo2vgkrkzYuZMtAnPN9850oCSHtx8lYvSd_saB645vVUNZeIX8RooWbmRIbph1M-XqSPUDg5kyXppThZM9h9F8C-riO-RO7rnPHJkcPb-Te_TihzI7hdzbZuFwbCmmcSXcJTrKOSZz6Bh-2GA5J5hOZmGgv--Ba-fIL1kpUZB2dbUgMVNtxf2udsl9qsKp25XiqrhkkQrl6vi-07xDjDyGa5ONuy"

const experienceCards = [
    { suite: 'Suite 01', title: 'THE BARBER', desc: 'Precision cuts, bespoke beard architecture, and traditional hot towel lather shaves delivered by master barbers.', cta: 'Explore Atelier', img: BARBER_IMG, link: '/barber' },
    { suite: 'Suite 02', title: 'THE SPA', desc: 'Holistic body therapies, deep tissue recovery, and clinical-grade skin treatments to dissolve metropolitan fatigue.', cta: 'View Spa Menu', img: SPA_IMG, link: '/spa' },
    { suite: 'Private Club', title: 'THE EXPERIENCE', desc: 'Discreet private booths, bespoke soundscapes, curated refreshments, and an atmosphere tailored for total unwinding.', cta: 'The Lounge Ritual', img: LOUNGE_IMG, link: '/services' },
]

const barberServices = [
    { name: 'Executive Haircut & Styling', desc: 'Consultation, precision razor fade or tailored scissor cut, botanical shampoo wash, and finished blow dry.', price: 'Starting from KES 2,500' },
    { name: 'Beard Sculpting & Conditioning', desc: 'Geometric beard contouring, natural oil hydration bath, and warm ionic comb treatment.', price: 'Starting from KES 1,800' },
    { name: 'Royal Hot Towel Shave', desc: 'Triple steamed eucalyptus towel infusions, badger brush pre-shave cream, feather razor finish, and cold compress.', price: 'Starting from KES 2,200' },
    { name: 'Full Executive Grooming Package', desc: 'Haircut, royal shave, detoxifying charcoal facial mask, ear-nose grooming, and shoulder acupressure.', price: 'Starting from KES 5,500' },
]

const spaServices = [
    { name: 'Deep Tissue Recovery Massage', desc: 'Intensive myofascial release aimed at chronic muscular tension, travel stiffness, and posture realignment.', price: 'Starting from KES 4,500' },
    { name: 'Therapeutic Hot Stone Ritual', desc: 'Warmed basalt stones coupled with infused organic essential oils to promote deep circulatory release.', price: 'Starting from KES 5,000' },
    { name: 'Executive Anti-Stress Facial', desc: 'Ultrasonic pore cleanse, hyaluronic hydration mask, and micro-current lifting for fatigued executive skin.', price: 'Starting from KES 4,000' },
    { name: 'Detox Pedicure & Foot Reflex', desc: 'Himalayan salt soak, cuticle cleanup, calf exfoliation, and 30-minute acupressure foot massage.', price: 'Starting from KES 3,500' },
]

const features = [
    { num: '01', icon: 'verified', title: 'Premium Quality', desc: 'We exclusively deploy premium imported tonics, surgical-grade sanitized tools, and luxury organic botanical infusions.' },
    { num: '02', icon: 'military_tech', title: 'Expert Professionals', desc: 'Our barbers and certified spa therapists possess over a decade of high-profile experience across Nairobi and abroad.' },
    { num: '03', icon: 'lock', title: 'Private & Comfortable', desc: 'Discreet booth architecture ensures your conversations remain confidential, paired with plush ergonomic seating.' },
    { num: '04', icon: 'schedule', title: 'Flexible Scheduling', desc: 'Operating 7 days a week from 7:00 AM until 11:00 PM to accommodate early morning meetings or late-evening unwinding.' },
]

const testimonials = [
    { quote: "The best grooming experience I've ever had in East Africa. Attention to detail is exceptional, from the hot towel aroma to the razor-clean hairline.", name: 'James M.', role: 'Business Executive', initials: 'JM' },
    { quote: "A perfect oasis in the city. The deep tissue massage therapy relieved weeks of corporate stress. The discretion and ambiance are unmatched.", name: 'David M.', role: 'Tech Entrepreneur', initials: 'DM' },
    { quote: "Professional service with a warm, personal touch. It has become my bi-weekly non-negotiable ritual before court sessions and boardroom meetings.", name: 'Michael M.', role: 'Senior Partner & Lawyer', initials: 'MM' },
]

export default function Home() {
    const [barberExpanded, setBarberExpanded] = useState(false)
    const [spaExpanded, setSpaExpanded] = useState(false)

    return (
        <div>
            {/* ── 1. HERO ─────────────────────────────────────────── */}
            <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '-5rem', overflow: 'hidden' }}>
                {/* Backdrop */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <div className="img-cover hero-bg" style={{ backgroundImage: `url('${HERO_BG}')`, transition: 'transform 1s ease-out' }}></div>
                    <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }}></div>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right, rgba(236,194,70,0.1), transparent)' }}></div>
                </div>

                {/* Content */}
                <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '9rem', paddingBottom: '4rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ maxWidth: '44rem' }}>
                        {/* Badge */}
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'color-mix(in srgb, var(--surface-container) 80%, transparent)', backdropFilter: 'blur(12px)', marginBottom: '1.5rem' }}>
                            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>location_on</span>
                            <span className="label-md text-secondary" style={{ letterSpacing: '0.2em' }}>KILELESHWA • NAIROBI, KENYA</span>
                        </div>

                        {/* Headline */}
                        <h1 className="display-lg text-light-primary" style={{ marginBottom: '1.5rem' }}>
                            Where Executive Grooming{' '}
                            <br className="hidden-sm" />
                            <em style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: 400 }}>Meets Total Wellness</em>
                        </h1>

                        <p className="body-lg text-on-surface-variant" style={{ maxWidth: '40rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            Premium barbering, bespoke spa rituals, and wellness experiences architected exclusively for the discerning modern gentleman. An intimate retreat away from the capital's bustle.
                        </p>

                        <div style={{ display: 'flex', gap: '0.875rem', marginBottom: '1rem' }}>
                            <Link to="/services" className="btn-primary" style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>Book An Appointment</Link>
                            <a href="#services" className="btn-ghost" style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>Explore Services</a>
                        </div>

                        {/* Live */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="body-sm text-on-surface-variant">
                            <span className="pulse-dot"></span>
                            <span>Private Suites Open Today • Valet Concierge on Nyeri Close</span>
                        </div>
                    </div>
                </div>

                {/* Stats strip */}
                <div style={{ position: 'relative', zIndex: 10, background: 'color-mix(in srgb, var(--surface-container-lowest) 90%, transparent)', backdropFilter: 'blur(20px)' }}>
                    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                            {[['500+', 'Happy Clients'], ['50+', 'Premium Services'], ['15+', 'Expert Professionals'], ['98%', 'Client Satisfaction']].map(([v, l]) => (
                                <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                    <span className="headline-lg text-primary" style={{ fontWeight: 600 }}>{v}</span>
                                    <span className="label-md text-on-surface-variant" style={{ letterSpacing: '0.18em' }}>{l.toUpperCase()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <style>{`@media(min-width:640px){div.stats-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
                </div>
            </section>

            {/* ── 2. EXPERIENCE SECTION ───────────────────────────── */}
            <section className="section bg-surface-dark">
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
                        <span className="label-md text-primary" style={{ letterSpacing: '0.25em' }}>AN ESCAPE FROM THE ORDINARY</span>
                        <h2 className="headline-lg text-light-primary">Curated Spaces for Restoration &amp; Distinction</h2>
                        <p className="body-md text-on-surface-variant" style={{ maxWidth: '28rem' }}>
                            Step into a private sanctuary where razor precision, restorative massage, and quiet hospitality merge seamlessly.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {experienceCards.map(c => (
                            <div key={c.title} className="service-card" style={{ cursor: 'default' }}>
                                <div style={{ height: '20rem', position: 'relative', overflow: 'hidden' }}>
                                    <div className="img-cover" style={{ backgroundImage: `url('${c.img}')`, transition: 'transform 0.7s ease-out' }}
                                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                    ></div>
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface-container), color-mix(in srgb, var(--surface-container) 30%, transparent), transparent)' }}></div>
                                    <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'color-mix(in srgb, var(--surface-container-lowest) 80%, transparent)', backdropFilter: 'blur(8px)', padding: '0.25rem 0.75rem', borderRadius: '2px' }}
                                        className="label-md text-primary">{c.suite}</span>
                                </div>
                                <div style={{ padding: '2rem' }}>
                                    <h3 className="headline-sm text-light-primary" style={{ marginBottom: '0.75rem' }}>{c.title}</h3>
                                    <p className="body-md text-on-surface-variant" style={{ lineHeight: 1.7, marginBottom: '1rem' }}>{c.desc}</p>
                                    <Link to={c.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', transition: 'transform 0.3s', textDecoration: 'none' }}
                                        className="label-md">
                                        <span>{c.cta}</span>
                                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 3. FEATURED SERVICES ────────────────────────────── */}
            <section className="section bg-surface-container-lowest" id="services" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    {/* Section header */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '5rem' }}>
                        <div>
                            <span className="label-md text-primary" style={{ letterSpacing: '0.3em', display: 'block', marginBottom: '0.75rem' }}>TAILORED MENU</span>
                            <h2 className="headline-lg text-light-primary" style={{ marginBottom: '0.75rem' }}>Featured Grooming &amp; Wellness</h2>
                            <p className="body-md text-on-surface-variant" style={{ maxWidth: '32rem' }}>Administered with artisan precision using world-class botanical balms and surgical-grade tools.</p>
                        </div>
                        <a href="https://wa.me/254719506995" target="_blank" rel="noopener" className="btn-primary">Reserve a Session</a>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3px' }}>

                        {/* Barbering Atelier */}
                        <div style={{ background: 'var(--surface-container)', padding: '3rem' }}>
                            <div style={{ marginBottom: '2.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>content_cut</span>
                                    <span className="label-md text-primary" style={{ letterSpacing: '0.25em' }}>BARBERING ATELIER</span>
                                    <span style={{ marginLeft: 'auto', padding: '0.2rem 0.75rem', border: '1px solid rgba(236,194,70,0.3)', borderRadius: '2px' }} className="label-md text-secondary">EXECUTIVE LEVEL</span>
                                </div>
                                <div style={{ height: '1px', background: 'linear-gradient(to right, var(--primary), rgba(236,194,70,0.15), transparent)' }}></div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {(barberExpanded ? barberServices : barberServices.slice(0, 2)).map((s, i) => (
                                    <div key={s.name}
                                        style={{ position: 'relative', padding: '1.75rem 0', borderBottom: '1px solid var(--outline-variant)', transition: 'padding-left 0.3s', paddingLeft: '0', cursor: 'default' }}
                                        onMouseEnter={e => { e.currentTarget.style.paddingLeft = '1rem'; e.currentTarget.querySelector('.svc-bar').style.opacity = '1'; }}
                                        onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.querySelector('.svc-bar').style.opacity = '0'; }}>
                                        <div className="svc-bar" style={{ position: 'absolute', left: 0, top: '1.75rem', bottom: '1.75rem', width: '2px', background: 'var(--primary)', opacity: 0, transition: 'opacity 0.3s' }}></div>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.625rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                                <span style={{ color: 'var(--primary)', opacity: 0.5, fontSize: '0.8rem', fontWeight: 700, minWidth: '1.5rem', paddingTop: '0.2rem' }}>0{i + 1}</span>
                                                <h4 className="title-md text-light-primary" style={{ margin: 0 }}>{s.name}</h4>
                                            </div>
                                            <span style={{ flexShrink: 0, padding: '0.2rem 0.75rem', background: 'rgba(236,194,70,0.08)', border: '1px solid rgba(236,194,70,0.2)', borderRadius: '2px', whiteSpace: 'nowrap' }} className="label-md text-primary">{s.price.replace('Starting from ', '')}</span>
                                        </div>
                                        <p className="body-sm text-on-surface-variant" style={{ lineHeight: 1.7, margin: '0 0 0 2.5rem' }}>{s.desc}</p>
                                    </div>
                                ))}
                                <button onClick={() => setBarberExpanded(!barberExpanded)} className="view-more-btn">
                                    <span>{barberExpanded ? 'View Less' : `View ${barberServices.length - 2} More Services`}</span>
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px', transition: 'transform 0.3s', transform: barberExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                                </button>
                            </div>
                            <a href="https://wa.me/254719506995" target="_blank" rel="noopener"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem', marginTop: '2.5rem', padding: '0.875rem', border: '1px solid rgba(236,194,70,0.35)', borderRadius: '2px', color: 'var(--primary)', textDecoration: 'none', transition: 'all 0.25s', background: 'transparent' }}
                                className="label-md"
                                onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'var(--on-primary)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.borderColor = 'rgba(236,194,70,0.35)'; }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>diamond</span>
                                BOOK BARBERING SESSION
                            </a>
                        </div>

                        {/* Spa & Wellness */}
                        <div style={{ background: 'var(--surface-container-high)', padding: '3rem' }}>
                            <div style={{ marginBottom: '2.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>spa</span>
                                    <span className="label-md text-primary" style={{ letterSpacing: '0.25em' }}>SPA &amp; WELLNESS</span>
                                    <span style={{ marginLeft: 'auto', padding: '0.2rem 0.75rem', border: '1px solid rgba(236,194,70,0.3)', borderRadius: '2px' }} className="label-md text-secondary">PRIVATE SUITES</span>
                                </div>
                                <div style={{ height: '1px', background: 'linear-gradient(to right, var(--primary), rgba(236,194,70,0.15), transparent)' }}></div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {(spaExpanded ? spaServices : spaServices.slice(0, 2)).map((s, i) => (
                                    <div key={s.name}
                                        style={{ position: 'relative', padding: '1.75rem 0', borderBottom: '1px solid var(--outline-variant)', transition: 'padding-left 0.3s', paddingLeft: '0', cursor: 'default' }}
                                        onMouseEnter={e => { e.currentTarget.style.paddingLeft = '1rem'; e.currentTarget.querySelector('.svc-bar').style.opacity = '1'; }}
                                        onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.querySelector('.svc-bar').style.opacity = '0'; }}>
                                        <div className="svc-bar" style={{ position: 'absolute', left: 0, top: '1.75rem', bottom: '1.75rem', width: '2px', background: 'var(--primary)', opacity: 0, transition: 'opacity 0.3s' }}></div>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.625rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                                <span style={{ color: 'var(--primary)', opacity: 0.5, fontSize: '0.8rem', fontWeight: 700, minWidth: '1.5rem', paddingTop: '0.2rem' }}>0{i + 1}</span>
                                                <h4 className="title-md text-light-primary" style={{ margin: 0 }}>{s.name}</h4>
                                            </div>
                                            <span style={{ flexShrink: 0, padding: '0.2rem 0.75rem', background: 'rgba(236,194,70,0.08)', border: '1px solid rgba(236,194,70,0.2)', borderRadius: '2px', whiteSpace: 'nowrap' }} className="label-md text-primary">{s.price.replace('Starting from ', '')}</span>
                                        </div>
                                        <p className="body-sm text-on-surface-variant" style={{ lineHeight: 1.7, margin: '0 0 0 2.5rem' }}>{s.desc}</p>
                                    </div>
                                ))}
                                <button onClick={() => setSpaExpanded(!spaExpanded)} className="view-more-btn">
                                    <span>{spaExpanded ? 'View Less' : `View ${spaServices.length - 2} More Services`}</span>
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px', transition: 'transform 0.3s', transform: spaExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                                </button>
                            </div>
                            <a href="https://wa.me/254719506995" target="_blank" rel="noopener"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem', marginTop: '2.5rem', padding: '0.875rem', border: '1px solid rgba(236,194,70,0.35)', borderRadius: '2px', color: 'var(--primary)', textDecoration: 'none', transition: 'all 0.25s', background: 'transparent' }}
                                className="label-md"
                                onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'var(--on-primary)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.borderColor = 'rgba(236,194,70,0.35)'; }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>self_care</span>
                                BOOK SPA SESSION
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── 4. WHY CHOOSE US ────────────────────────────────── */}
            <section className="section bg-surface-dark">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto 5rem' }}>
                        <span className="label-md text-primary" style={{ letterSpacing: '0.25em', display: 'block', marginBottom: '1rem' }}>THE HIDEAWAY STANDARD</span>
                        <h2 className="headline-lg text-light-primary" style={{ marginBottom: '1rem' }}>Designed For Those Who Expect More</h2>
                        <p className="body-md text-on-surface-variant">We have reconstructed the modern grooming session into an uninterrupted executive retreat.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="features-grid">
                        {features.map(f => (
                            <div key={f.num} className="feature-card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                        <span className="headline-sm text-primary" style={{ fontWeight: 600 }}>{f.num}</span>
                                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>{f.icon}</span>
                                    </div>
                                    <h3 className="title-md text-light-primary" style={{ marginBottom: '0.75rem' }}>{f.title}</h3>
                                    <p className="body-sm text-on-surface-variant" style={{ lineHeight: 1.7 }}>{f.desc}</p>
                                </div>
                                <div style={{ width: '2rem', height: '2px', backgroundColor: 'rgba(236,194,70,0.4)' }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. EXECUTIVE PHILOSOPHY SPLIT ───────────────────── */}
            <section className="section bg-surface-container-lowest" style={{ overflow: 'hidden' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        {/* Image */}
                        <div style={{ position: 'relative' }}>
                            <div style={{ borderRadius: '2px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
                                <div className="img-cover" style={{ backgroundImage: `url('${EDITORIAL_IMG}')`, height: '32rem' }}></div>
                            </div>
                            <div style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', background: 'var(--surface-container)', padding: '1.5rem', borderRadius: '2px', boxShadow: '0 16px 48px rgba(0,0,0,0.4)', maxWidth: '18rem', display: 'none' }} id="discreet-card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.625rem' }}>
                                    <span className="material-symbols-outlined text-primary">workspace_premium</span>
                                    <span className="label-md text-primary" style={{ letterSpacing: '0.18em' }}>DISCREET HOSPITALITY</span>
                                </div>
                                <p className="body-sm text-on-surface-variant">High-speed secure Wi-Fi, private beverage locker, and complete sanctuary from urban demands.</p>
                            </div>
                        </div>

                        {/* Copy */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <span className="label-md text-primary" style={{ letterSpacing: '0.25em' }}>THE EXECUTIVE PHILOSOPHY</span>
                            <h2 className="headline-lg text-light-primary">
                                Your Time Is Valuable.<br />
                                <em style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: 400 }}>We Treat It Accordingly.</em>
                            </h2>
                            <p className="body-md text-on-surface-variant" style={{ lineHeight: 1.7 }}>
                                Executive Hideaway is purpose-built for enterprise leaders, senior diplomats, serial founders, and professionals who cannot afford wasted hours or compromised standards.
                            </p>
                            <p className="body-md text-on-surface-variant" style={{ lineHeight: 1.7 }}>
                                From the moment you step through our discreet entrance on Nyeri Close, every touchpoint is curated: zero waiting intervals, customized ambient acoustics, espresso and single malts on arrival, and meticulous craftsmen who know your profile without being asked.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem', paddingTop: '1rem' }}>
                                <a href="https://wa.me/254719506995" target="_blank" rel="noopener" className="btn-primary">Book Your Experience</a>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>fingerprint</span>
                                    <div>
                                        <span className="label-md text-light-primary" style={{ display: 'block', textTransform: 'uppercase' }}>Guaranteed Privacy</span>
                                        <span className="body-sm text-on-surface-variant">Confidential appointments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`
                  .hero-bg { transform: scale(1); }
                  .hero-overlay { background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.1) 100%); }
                  @media(min-width:640px){
                    #discreet-card{display:block!important}
                    .features-grid{grid-template-columns:repeat(4,1fr)!important;gap:2rem!important}
                    .hero-bg { transform: scale(1.05); }
                    .hero-overlay { background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.25) 100%); }
                  }
                `}</style>
            </section>

            {/* ── 6. TESTIMONIALS ─────────────────────────────────── */}
            <section className="section bg-surface-dark">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto 5rem' }}>
                        <span className="label-md text-primary" style={{ letterSpacing: '0.25em', display: 'block', marginBottom: '1rem' }}>CLIENT IMPRESSIONS</span>
                        <h2 className="headline-lg text-light-primary">Endorsed by Nairobi's Leaders</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {testimonials.map(t => (
                            <div key={t.name} className="testimonial-card">
                                <div>
                                    <span className="headline-lg text-primary" style={{ opacity: 0.4, fontSize: '48px', lineHeight: 1 }}>"</span>
                                    <p className="body-md text-light-primary" style={{ fontStyle: 'italic', lineHeight: 1.7, marginTop: '-0.5rem' }}>{t.quote}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '2rem' }}>
                                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'var(--surface-variant)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 700 }}
                                        className="label-md">{t.initials}</div>
                                    <div>
                                        <div className="title-md text-light-primary">{t.name}</div>
                                        <div className="label-md text-on-surface-variant">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 7. MEMBERSHIP CTA ───────────────────────────────── */}
            <section className="section bg-surface-container-lowest" style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ position: 'relative', borderRadius: '12px', background: 'linear-gradient(to right, var(--surface-dark), var(--surface-container-low), var(--surface-dark))', padding: '2.5rem', boxShadow: '0 24px 64px rgba(0,0,0,0.4)', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2.5rem' }}>
                        <div style={{ position: 'absolute', right: '-6rem', top: '-6rem', width: '24rem', height: '24rem', borderRadius: '50%', background: 'rgba(236,194,70,0.05)', filter: 'blur(48px)', pointerEvents: 'none' }}></div>
                        <div style={{ maxWidth: '40rem', zIndex: 1 }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', borderRadius: '2px', background: 'rgba(236,194,70,0.1)', marginBottom: '1rem' }}>
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>stars</span>
                                <span className="label-md text-primary" style={{ letterSpacing: '0.18em' }}>VIP PRIVILEGE PROGRAM</span>
                            </div>
                            <h2 className="headline-lg text-light-primary" style={{ marginBottom: '1rem' }}>Make Executive Grooming A Ritual</h2>
                            <p className="body-lg text-on-surface-variant" style={{ lineHeight: 1.7 }}>
                                Join the Executive Hideaway community and unlock guaranteed preferred booking windows, complimentary guest passes, priority access to private booths, and tailored quarterly wellness regiments.
                            </p>
                        </div>
                        <a href="https://wa.me/254719506995" target="_blank" rel="noopener" className="btn-primary" style={{ zIndex: 1, padding: '1.25rem 2.5rem', boxShadow: '0 0 32px rgba(201,162,39,0.2)' }}>
                            EXPLORE MEMBERSHIP
                        </a>
                    </div>
                </div>
            </section>

            {/* ── 8. LOCATION ─────────────────────────────────────── */}
            <section className="section bg-surface-dark">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        {/* Info column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div>
                                <span className="label-md text-primary" style={{ letterSpacing: '0.25em', display: 'block', marginBottom: '1rem' }}>PRIVATE SANCTUARY</span>
                                <h2 className="headline-lg text-light-primary" style={{ marginBottom: '1rem' }}>Location &amp; Access</h2>
                                <p className="body-md text-on-surface-variant">Tucked away on a quiet residential cul-de-sac in Kileleshwa, offering seamless arrival and guarded private parking.</p>
                            </div>
                            {[
                                { icon: 'pin_drop', label: 'ADDRESS', value: '275 Nyeri Close, Kileleshwa, Nairobi, Kenya', sub: 'Discreet gated entry with private on-site valet' },
                                { icon: 'schedule', label: 'OPENING HOURS', value: 'Monday – Sunday | 7:00 AM – 11:00 PM', sub: 'Early bird & late night sessions by prior booking' },
                                { icon: 'contact_support', label: 'CONCIERGE DESK', value: '+254 719 506 995', sub: 'executivehideawaybarberandspa@gmail.com' },
                            ].map(item => (
                                <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '2px', background: 'var(--surface-container)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>{item.icon}</span>
                                    </div>
                                    <div>
                                        <span className="label-md text-secondary" style={{ display: 'block', letterSpacing: '0.15em', marginBottom: '0.25rem' }}>{item.label}</span>
                                        <p className="body-md text-light-primary" style={{ margin: '0 0 0.25rem' }}>{item.value}</p>
                                        <span className="body-sm text-on-surface-variant">{item.sub}</span>
                                    </div>
                                </div>
                            ))}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                <a href="https://wa.me/254719506995" target="_blank" rel="noopener"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '0.75rem 1.5rem', borderRadius: '2px', background: 'rgba(37,211,102,0.15)', color: '#25D366', textDecoration: 'none', transition: 'background 0.2s' }}
                                    className="label-md">
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chat</span>
                                    WHATSAPP CONCIERGE
                                </a>
                                <a href="tel:+254719506995"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '0.75rem 1.5rem', borderRadius: '2px', background: 'var(--surface-container)', color: 'var(--text-light-primary)', textDecoration: 'none', transition: 'background 0.2s' }}
                                    className="label-md">
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>call</span>
                                    DIRECT CALL
                                </a>
                            </div>
                        </div>

                        {/* Map */}
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.5)', position: 'relative' }}>
                            <div className="img-cover" style={{ backgroundImage: `url('${MAP_IMG}')`, height: '29rem', position: 'relative' }}>
                                <div style={{ position: 'absolute', inset: 0, background: 'color-mix(in srgb, var(--surface-dark) 40%, transparent)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', textAlign: 'center' }}>
                                    <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 0 32px rgba(201,162,39,0.4)' }}
                                        className="animate-bounce">
                                        <span className="material-symbols-outlined on-primary" style={{ fontSize: '28px', color: 'var(--on-primary)', fontVariationSettings: "'FILL' 1" }}>location_on</span>
                                    </div>
                                    <div style={{ background: 'color-mix(in srgb, var(--surface-dark) 90%, transparent)', backdropFilter: 'blur(12px)', padding: '1.5rem', borderRadius: '8px', maxWidth: '20rem', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
                                        <h4 className="headline-sm text-light-primary" style={{ marginBottom: '0.5rem' }}>Executive Hideaway Lounge</h4>
                                        <p className="body-sm text-on-surface-variant" style={{ marginBottom: '1rem' }}>275 Nyeri Close, Kileleshwa, Nairobi</p>
                                        <a href="https://maps.google.com/?q=275+Nyeri+Close+Kileleshwa+Nairobi" target="_blank" rel="noopener"
                                            className="btn-primary" style={{ width: '100%', padding: '0.625rem 1rem', fontSize: '11px' }}>
                                            GET DIRECTIONS
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
