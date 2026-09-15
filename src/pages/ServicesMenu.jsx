import { useState } from 'react'
import { Link } from 'react-router-dom'

const SANCTUARY_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCC146AtEKoHrFt7u6YLOsEPkWM9qSyIMTq0lsaCYK5lAlZJNJ3AzcntCsDLW_FGAp4RrNB6eE9aQoOvZkEmNn7NOYKqMiWHG23ZIFKuPdde2NiRBHy35sfUovHjemBTqRhFDlaEuIeFsCazj1hQUS3w7bubnwcgcIpL4fgc-Pj2fanmp0bkE15_KBF-foXkITslhGmFVuZnl0RDVRTc8MJL1X86y7hD7buRmEF41c4ii48RsLrKRz2"

const servicesData = [
    {
        id: 1, title: 'Haircut & Styling', categories: ['barbering'],
        duration: '45 min', price: 'KES 2,500',
        desc: 'Precision haircut tailored to your head shape, lifestyle and personal aesthetic with scalp tonic stimulation and hot towel finish.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ75FVqXFNyrBnrQS3_-Lv4bS1tabi6BC4yaLhkoyviIWYKIgUO2fZFxuGwLSpWlSH4QGNYlK9JgRGebdFeMllJEn0sya5Qa_Dbjk6fCLzlaSfQTdcKNtsPuFriMwIiMSgMXFucFiL8YZrV_an7Lv4nfQ_oP2VJ04fcNyY3in_lwrNMI1Dr9Jg0ME1KoyCFsLG17r_VY9mXVutf2GvANVHhb98ZaQmmd3i5TacVIKo6J4r49UGdX0i',
        tag: 'Barbering'
    },
    {
        id: 2, title: 'Beard Trim & Sculpt', categories: ['beard'],
        duration: '30 min', price: 'KES 1,800',
        desc: 'Professional beard shaping, razor line finishing, and organic botanical beard oil infusion for optimal softness and definition.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnp0go8lCqAOb6M--M_ynXtmTJWvWP0F9NHbhIbQ0RTaxoSVzI9pf-qA5-rqgo6iWv3-7nVsVdoZwAM20eAGwvHdF38ejOkJ-oGFn1XLoUop8bGUoMV0M6p6KmF72rwEgJBcWzE0Hn2Me6cOZggqNZjIYwoNvjJMphJnAEzxVDVaWt2D0e2HRZU7uZoSn0eX_dfs_DFGuKFBtCfuO7wl0D-qcDID21SgCret6qdbCSZjeZqIVfk9at',
        tag: 'Beard Craft'
    },
    {
        id: 3, title: 'Hot Towel Shave', categories: ['barbering', 'beard'],
        duration: '40 min', price: 'KES 2,200',
        desc: 'Traditional executive shaving experience with warm lather, straight razor precision, and cool eucalyptus compress for effortless glide.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD80LfBmzfyzZty4rRo_BW4RLDX0Mk0rPw9KF9XpXPVIHh6HJwLv6iiD7ZLVJc7cV1APSI1h1GUUgjYEVYRhn9xEqvpuSZ5xAqUq-xqQ4JuXs1EEArOIvPP2dxk_wZ4Ix-5pAYQou-hMtrn02RtPP8bK4Prgs-aQ_YzxeWu_5pnmDJt4Zb6qr2YM1sN-IJSU4hUS9zs0oqjmMbTjj8428CXSi2EGEJKN6O5tgYZqvaVlaJjs2-WL2x4',
        tag: 'Signature Shave'
    },
    {
        id: 4, title: 'Therapeutic Massage', categories: ['spa', 'massage'],
        duration: '60 min', price: 'KES 4,500',
        desc: 'Personalized Swedish and myofascial massage designed to release tension, boost lymphatic drainage, and calm the executive mind.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArhSBS3_T2txjbCRsITVdOdSiS96W7k-pe1c3IDShHHTjagKIEM2scfSVozncRkgWM1AGHY6X77DrblDeig-Ex6FNJq_ECGiXnrfsKLITVpYxrSWYbVYsShd1Ry86IxmK9i8ragFR2gZ2zcEqz6k3HxbbiFsnPkZo9TJEFORDuVxoU1cfHy49YV7J5aLyD6OqXnWmE5sSzjzdNLmUocL43mUPRIeFJU6A5U3VWPfhbhQ0j6H6OIQpZ',
        tag: 'Body & Mind'
    },
    {
        id: 5, title: 'Deep Tissue Massage', categories: ['spa', 'massage'],
        duration: '60 / 90 min', price: 'KES 5,000',
        desc: 'Focused pressure targeting chronic muscle tension, back stiffness, and post-workout recovery using warming arnica and cypress extracts.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg1tcReJ_B-c--YSjhjsgXlkbhz3nzKMNsk8dstedJ1dYuuiIi66-UzBZsNc-tGBCRTT-4FFkfO6KorXoUlREVl2u_5KgWVn-AmPibaXnh_Xjywt7NhZ57g21KSpnJzB8FRAEgLmWgqx-VHDgjHcoll9WOczcKSKKoZqrPNzjKgpltk8vtXHVUgExglc_VdHN0-bSr38NnnnsxIqSXkzJLXpJF8StzKRS1hMinvFGoVMaCr0BPHc-l',
        tag: 'Deep Release'
    },
    {
        id: 6, title: 'Facial Treatment', categories: ['spa', 'facials'],
        duration: '60 min', price: 'KES 4,000',
        desc: 'Premium executive detox facial for clarified, hydrated, and refreshed skin combating pollution, stress, and screen fatigue.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1kCm2JLn61OF331CqNP_aS3U4rIvsyZSg5KHrzejJC7V27N4YxBDUwlftIjRmd23DgB9br5iKcwEJMbX4YCSMGOuTXe-wGswd-WmThATPOHSi8wivW6e-Dwe8wFpdohwwsPPE7QvCtAupTMKs0erCXMV21Na9immuGFdQeLCeiLhLMsplrZJT1XtscwzvJLuaqbbMQNLRvwUvTj-fptvmSrEeHO7JHf-QobFcPFbx4vvigFwKPWlp',
        tag: 'Dermal Care'
    },
    {
        id: 7, title: 'Executive Scalp Ritual', categories: ['barbering', 'spa'],
        duration: '35 min', price: 'KES 2,800',
        desc: 'Invigorating scalp exfoliation with peppermint essential oils, acupressure relief, and micro-steam therapy to stimulate follicle renewal.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwiS6_XtwGoem4JX1IpW9nJlDcUuHhfqJpPPfKLONPro4-qAZo-w4SwCyIGD5sZJ9afM79NeZwt5vEGDhyZCQNRhUUyAJQkByAf32fsjsjY_mjxU3Bs8iFnzeaMeOctDsLCxbKIfu44-_xNx02pSv38TLGJbCDTFV_fgXaVTJaay3fBvCnWxwcd3letNYG8ohuPZQCqCgNv2J26WGQER5anLLgLGYjLUiumXWV9ARFOjh3IJH2gQnQ',
        tag: 'Scalp Vitality'
    },
    {
        id: 8, title: 'Detox Herbal Body Wrap', categories: ['spa', 'body'],
        duration: '75 min', price: 'KES 6,500',
        desc: 'Mineral-rich clay and botanical wrap with gentle thermal infusion to stimulate circulation, purge toxins, and restore total skin vitality.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD14qsDKkr-KfOzzC-bbzZMqE7BwcomFsnxY18n9MaD9pyEvsYlIcO3HXuebI6fQpHmxFdEBoInYd2XOXHh2Uy1dTZbvPQKR1as_DnA2LVvDrQmyWy8qLkIQ7rchGb_9DZt7o7TNodtNi5yvg-0OqeLcL4PIM_qru7-O1YttkI-hDSzBzaWIgnwE7yMK3dTMHKCODj4q163SKYmVVPMkR13sxJsh3Hu37klQ6KRTh4bNx5bxv8npKIO',
        tag: 'Body Therapy'
    },
    {
        id: 9, title: 'Continental Fine Dining', categories: ['dining'],
        duration: 'Open all day', price: 'From KES 1,800',
        desc: 'À la carte continental cuisine featuring dry-aged steaks, fresh Atlantic salmon, wagyu carpaccio, and seasonal chef\'s specials in a private suite.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvmmyTA-oa3K4zO1U09L_-AG6bVPZ9f76qhy0Dd3aJ2CW0myZGu6pMMI4tqpyNtiwUFOxLTcQfnPN2bxNhwy5UWs-EWw4noSQ059DPInMY8hUtColdUhbG3pE5oKAcZt--Ihk66958CqPy1FnujNIEZPstVQNAd1tSZ4TB_JJl6Wa3zaRi7KOfyJg55fPBgPUscl2tdSlI0nCyPB1pkwMUWRXxY-hIQzz4eIEGp8-fI051myKOalNd',
        tag: 'Fine Dining'
    },
    {
        id: 10, title: 'Signature Cocktail Bar', categories: ['dining', 'drinks'],
        duration: '7AM – 11PM', price: 'From KES 1,000',
        desc: 'Handcrafted cocktails, premium mocktails, rare single malts, curated wines, and champagne — served tableside or in-suite during your treatment.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOpbQ5hQBsPyjIgehnXN83vIntfg9XsloCPJ7J-AL4jPFd-q-BBLNBwU5qatYD0bRemP5eCHHZw_K9ql0MTzqWT0NQ3IZSTpR326PHuMv39s4_5r7qc8EwZ-z7-HAMahlcXq8lJHY08vqgofdO7alIxdn6O3XSQdN9MT02LUgZFzImjmf-M0aRmi0CEhIk1hMQbysMtnmR8EVmTsngQTO9Gg4NvZu50eVrmXTderTs00NzgoFdbLkP',
        tag: 'Bar & Drinks'
    },
    {
        id: 11, title: 'In-Suite Dining Experience', categories: ['dining'],
        duration: 'During your session', price: 'From KES 1,800',
        desc: 'Full à la carte meals and drinks delivered to your private suite — timed around your treatment with white-glove table service and single-bill settlement.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuyaSQjJKSzKDuPYgHsO0aYBZV9-Q55KKbuRlKkc5Vef9SIHIpteKkGUAvmYnl2tyuaG9BWEYThLl3iE3sCdwqkKl5HdcBpwb0yMm4g6gZ4-likEKySzX0RMC0s3c2Nb-ywjfw6qq21J7v20iVQo2cCwWFTl-s79Cpv8LucW62ocWjDVD4N5hsWGC-6C9NBqy3Cq2qdyxrIdR4EnXa6mXeDf_dP4mnSaPm7TUg9an7I-uFWccN4Xm0',
        tag: 'In-Suite Service'
    },
]

const filters = [
    { id: 'all', label: 'All Services' },
    { id: 'barbering', label: 'Barbering' },
    { id: 'beard', label: 'Beard' },
    { id: 'spa', label: 'Spa & Wellness' },
    { id: 'massage', label: 'Massage' },
    { id: 'facials', label: 'Facials' },
    { id: 'body', label: 'Body Therapy' },
    { id: 'dining', label: 'Dining & Drinks' },
]

export default function ServicesMenu() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [hoveredCard, setHoveredCard] = useState(null)

    const filtered = servicesData.filter(s =>
        activeFilter === 'all' || s.categories.includes(activeFilter)
    )

    const getCount = id =>
        id === 'all' ? servicesData.length : servicesData.filter(s => s.categories.includes(id)).length

    return (
        <div>
            {/* ── HERO HEADER ─────────────────────────────────────────── */}
            <section className="section bg-surface-dark" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                        <div style={{ maxWidth: '40rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', borderRadius: '9999px', background: 'var(--surface-container)', marginBottom: '1.5rem' }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', display: 'inline-block' }} className="pulse-dot" />
                                <span className="label-md text-primary" style={{ letterSpacing: '0.22em' }}>ATELIER MENU &amp; RITUALS</span>
                            </div>
                            <h1 className="headline-lg text-light-primary" style={{ marginBottom: '1rem' }}>
                                Curated Grooming, Wellness<br />
                                <em style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: 400 }}>&amp; Dining Experiences</em>
                            </h1>
                            <p className="body-lg text-on-surface-variant" style={{ lineHeight: 1.75, maxWidth: '36rem' }}>
                                Designed to restore, refine, and elevate. Select a discipline below to explore our bespoke offerings crafted for discerning executives in Kileleshwa.
                            </p>
                        </div>

                        {/* Mobile-only hero image */}
                        <div className="services-hero-img" style={{
                            width: '100%', height: '16rem', borderRadius: '6px', overflow: 'hidden',
                            position: 'relative', flexShrink: 0
                        }}>
                            <div className="img-cover" style={{ backgroundImage: `url('https://i.pinimg.com/1200x/7e/83/82/7e83827383bceb779ab34912340154b2.jpg')` }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)' }} />
                            <div style={{
                                position: 'absolute', bottom: '1rem', left: '1rem',
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                background: 'rgba(10,10,10,0.65)', backdropFilter: 'blur(8px)',
                                padding: '0.4rem 0.875rem', borderRadius: '4px'
                            }}>
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '15px', fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                                <span className="label-md text-primary" style={{ fontSize: '0.65rem', letterSpacing: '0.18em' }}>EXECUTIVE ATELIER · KILELESHWA</span>
                            </div>
                        </div>

                        <style>{`
                          .services-hero-img { display: block; }
                          .status-card { display: flex; flex-direction: row; gap: 0.875rem; padding: 1rem 1.25rem; background: var(--surface-container); border-radius: 4px; border: 1px solid var(--gold-border); flex-shrink: 0; align-items: center; }
                          .status-divider { width: 1px; height: 2.5rem; background: var(--outline-variant); flex-shrink: 0; }
                          .status-title { font-size: 0.8rem; }
                          @media(min-width: 640px) {
                            .services-hero-img { display: none; }
                            .status-card { gap: 2rem; padding: 1.5rem 2rem; }
                            .status-divider { height: auto; align-self: stretch; }
                            .status-title { font-size: 1rem; }
                          }
                        `}</style>
                        <div className="status-card">
                            <div>
                                <span className="label-md text-on-surface-variant" style={{ letterSpacing: '0.15em', display: 'block', marginBottom: '0.25rem' }}>PRIVATE SUITES</span>
                                <span className="title-md text-primary status-title">Discreet &amp; Soundproof</span>
                            </div>
                            <div className="status-divider" />
                            <div>
                                <span className="label-md text-on-surface-variant" style={{ letterSpacing: '0.15em', display: 'block', marginBottom: '0.25rem' }}>AVAILABILITY</span>
                                <span className="title-md text-light-primary status-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    Open Today
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FILTER TABS ─────────────────────────────────────────── */}
            <section style={{ background: 'var(--surface-container-lowest)', borderBottom: '1px solid var(--outline-variant)', position: 'sticky', top: '5rem', zIndex: 30 }}>
                <div className="container" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.375rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
                        {filters.map(f => (
                            <button
                                key={f.id}
                                onClick={() => setActiveFilter(f.id)}
                                style={{
                                    flexShrink: 0,
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    padding: '0.6rem 1.25rem',
                                    borderRadius: '2px',
                                    background: activeFilter === f.id ? 'var(--primary)' : 'var(--surface-container)',
                                    color: activeFilter === f.id ? 'var(--on-primary)' : 'var(--on-surface-variant)',
                                    border: 'none', cursor: 'pointer',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontSize: '11px', fontWeight: 700,
                                    letterSpacing: '0.13em', textTransform: 'uppercase',
                                    transition: 'all 0.25s',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <span>{f.label}</span>
                                <span style={{
                                    fontSize: '10px', padding: '0.1rem 0.45rem', borderRadius: '9999px',
                                    background: activeFilter === f.id ? 'rgba(0,0,0,0.2)' : 'var(--surface-variant)',
                                    color: activeFilter === f.id ? 'var(--on-primary)' : 'var(--on-surface-variant)',
                                    fontWeight: 700,
                                }}>{getCount(f.id)}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICE CARDS GRID ──────────────────────────────────── */}
            <section className="section bg-surface-dark">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {filtered.map(s => (
                            <article
                                key={s.id}
                                style={{
                                    background: 'var(--surface-container)',
                                    borderRadius: '4px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: '1px solid var(--outline-variant)',
                                    transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                                    transform: hoveredCard === s.id ? 'translateY(-6px)' : 'translateY(0)',
                                    boxShadow: hoveredCard === s.id ? '0 20px 56px rgba(0,0,0,0.5), 0 0 0 1px rgba(236,194,70,0.2)' : '0 4px 20px rgba(0,0,0,0.25)',
                                    borderColor: hoveredCard === s.id ? 'rgba(236,194,70,0.35)' : 'var(--outline-variant)',
                                }}
                                onMouseEnter={() => setHoveredCard(s.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Image */}
                                <div style={{ position: 'relative', height: '14rem', overflow: 'hidden' }}>
                                    <div
                                        className="img-cover"
                                        style={{
                                            backgroundImage: `url('${s.img}')`,
                                            transition: 'transform 0.6s ease',
                                            transform: hoveredCard === s.id ? 'scale(1.07)' : 'scale(1)',
                                        }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface-container) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />

                                    {/* Tag badge */}
                                    <span style={{
                                        position: 'absolute', top: '1rem', left: '1rem',
                                        background: 'color-mix(in srgb, var(--surface-dark) 80%, transparent)',
                                        backdropFilter: 'blur(8px)',
                                        padding: '0.25rem 0.75rem', borderRadius: '2px',
                                        fontFamily: 'Manrope, sans-serif', fontSize: '10px',
                                        fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                                        color: 'var(--primary)',
                                    }}>{s.tag}</span>

                                    {/* Duration */}
                                    <div style={{
                                        position: 'absolute', bottom: '0.875rem', right: '0.875rem',
                                        display: 'flex', alignItems: 'center', gap: '0.375rem',
                                        background: 'color-mix(in srgb, var(--surface-dark) 75%, transparent)',
                                        backdropFilter: 'blur(8px)', padding: '0.25rem 0.625rem', borderRadius: '2px',
                                    }}>
                                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '14px' }}>schedule</span>
                                        <span className="label-md text-on-surface-variant" style={{ fontSize: '11px' }}>{s.duration}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 className="title-md text-light-primary" style={{ margin: '0 0 0.625rem', transition: 'color 0.25s', color: hoveredCard === s.id ? 'var(--primary)' : 'var(--text-light-primary)' }}>{s.title}</h3>
                                    <p className="body-sm text-on-surface-variant" style={{ lineHeight: 1.75, margin: '0 0 1.5rem', flex: 1 }}>{s.desc}</p>

                                    {/* Footer */}
                                    <div style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                        paddingTop: '1.25rem',
                                        borderTop: '1px solid var(--outline-variant)',
                                        gap: '1rem',
                                    }}>
                                        <div>
                                            <span className="label-md text-on-surface-variant" style={{ letterSpacing: '0.15em', display: 'block', marginBottom: '0.2rem' }}>INVESTMENT</span>
                                            <span className="title-md text-primary" style={{ fontWeight: 600 }}>{s.price}</span>
                                        </div>
                                        <a
                                            href="https://wa.me/254719506995"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                                                padding: '0.625rem 1.25rem',
                                                background: 'var(--primary)', color: 'var(--on-primary)',
                                                borderRadius: '2px', textDecoration: 'none',
                                                fontFamily: 'Manrope, sans-serif', fontSize: '11px',
                                                fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase',
                                                transition: 'opacity 0.2s',
                                                flexShrink: 0,
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                        >
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}

                        {/* Concierge enquiry card */}
                        <div style={{
                            background: 'linear-gradient(135deg, var(--surface-container-high), var(--surface-container))',
                            borderRadius: '4px', padding: '2.5rem',
                            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                            border: '1px solid var(--gold-border)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                            position: 'relative', overflow: 'hidden',
                            minHeight: '360px',
                        }}>
                            <div style={{ position: 'absolute', right: '-3rem', bottom: '-3rem', width: '12rem', height: '12rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,194,70,0.1), transparent)', pointerEvents: 'none' }} />
                            <div>
                                <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '50%', background: 'rgba(236,194,70,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '22px' }}>auto_awesome</span>
                                </div>
                                <span className="label-md text-primary" style={{ letterSpacing: '0.22em', display: 'block', marginBottom: '0.5rem' }}>CONCIERGE INQUIRY</span>
                                <h3 className="headline-sm text-light-primary" style={{ margin: '0 0 1rem' }}>Custom Treatment Plans</h3>
                                <p className="body-md text-on-surface-variant" style={{ lineHeight: 1.75 }}>
                                    Planning a private boardroom delegation, wedding ceremony, or discreet executive retreat? Our concierge will tailor bespoke sequential sessions — combining grooming, wellness, and fine dining.
                                </p>
                            </div>
                            <a
                                href="tel:+254742630973"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    color: 'var(--primary)', textDecoration: 'none',
                                    fontFamily: 'Manrope, sans-serif', fontWeight: 700,
                                    fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
                                    marginTop: '2rem',
                                }}
                            >
                                <span>SPEAK WITH CONCIERGE</span>
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VIP SANCTUARY DAY PACKAGE ──────────────────────────── */}
            <section className="section bg-surface-container-lowest" style={{ paddingTop: '0', paddingBottom: '5rem' }}>
                <div className="container">
                    <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>
                        {/* BG Image */}
                        <div className="img-cover" style={{ backgroundImage: `url('${SANCTUARY_IMG}')`, position: 'absolute', inset: 0, opacity: 0.35 }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(12,12,12,0.97) 0%, rgba(12,12,12,0.85) 50%, rgba(12,12,12,0.4) 100%)' }} />

                        <style>{`
                          .sanctuary-body { position: relative; zIndex: 1; padding: 2rem 1.5rem; max-width: 44rem; }
                          .sanctuary-title { font-size: 1.6rem !important; margin-bottom: 0.625rem !important; }
                          .sanctuary-desc { font-size: 0.9rem !important; line-height: 1.65 !important; margin-bottom: 1.5rem !important; }
                          .sanctuary-includes { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-bottom: 1.5rem; }
                          .sanctuary-includes-item { padding: 0.625rem 0.875rem; }
                          .sanctuary-price { font-size: 1.5rem !important; }
                          @media(min-width: 640px) {
                            .sanctuary-body { padding: 4rem 3.5rem; }
                            .sanctuary-title { font-size: 2.25rem !important; margin-bottom: 1rem !important; }
                            .sanctuary-desc { font-size: 1.125rem !important; margin-bottom: 2.5rem !important; }
                            .sanctuary-includes { grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem; margin-bottom: 2.5rem; }
                            .sanctuary-includes-item { padding: 0.875rem 1rem; }
                            .sanctuary-price { font-size: 1.75rem !important; }
                          }
                        `}</style>

                        <div className="sanctuary-body" style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', borderRadius: '9999px', background: 'rgba(236,194,70,0.12)', border: '1px solid rgba(236,194,70,0.25)', marginBottom: '1.25rem' }}>
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px' }}>stars</span>
                                <span className="label-md text-primary" style={{ letterSpacing: '0.2em' }}>VIP SIGNATURE EXPERIENCE</span>
                            </div>

                            <h2 className="sanctuary-title headline-lg text-light-primary">
                                The Executive Sanctuary Day
                            </h2>
                            <p className="sanctuary-desc body-lg text-on-surface-variant">
                                The pinnacle of grooming indulgence. Enjoy our signature haircut, classic royal hot towel shave, 60-minute deep tissue therapy, executive facial, and a curated three-course dining experience with paired single-malt refreshments.
                            </p>

                            {/* Includes grid */}
                            <div className="sanctuary-includes">
                                {[
                                    { label: 'Haircut', sub: 'Full Styling' },
                                    { label: 'Shave', sub: 'Hot Towel' },
                                    { label: 'Massage', sub: '60 Min Deep' },
                                    { label: 'Facial', sub: 'Dermal Detox' },
                                    { label: 'Dining', sub: '3-Course Meal' },
                                ].map(item => (
                                    <div key={item.label} className="sanctuary-includes-item" style={{ background: 'rgba(12,12,12,0.7)', backdropFilter: 'blur(8px)', borderRadius: '4px', border: '1px solid var(--outline-variant)' }}>
                                        <span className="label-md text-on-surface-variant" style={{ letterSpacing: '0.12em', display: 'block', marginBottom: '0.2rem', fontSize: '0.65rem' }}>{item.label.toUpperCase()}</span>
                                        <span className="body-sm text-light-primary" style={{ fontWeight: 600 }}>{item.sub}</span>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <div>
                                    <span className="label-md text-on-surface-variant" style={{ letterSpacing: '0.15em', display: 'block', marginBottom: '0.25rem' }}>ALL-INCLUSIVE PACKAGE</span>
                                    <span className="sanctuary-price headline-sm text-primary" style={{ fontWeight: 700 }}>KES 18,500</span>
                                </div>
                                <a
                                    href="https://wa.me/254719506995"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                    style={{ padding: '1rem 2rem', boxShadow: '0 0 24px rgba(201,162,39,0.3)' }}
                                >
                                    Book This Package
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
