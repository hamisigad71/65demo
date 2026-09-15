import { useState } from 'react';

const SPA_HERO = "https://lh3.googleusercontent.com/aida-public/AB6AXuCMDyQ8RLLY98z_8ne8gCKCRi3paKqS1WRF8_VJc1UJ8tpwVhjM2D76WZzt6HArCjX-dQ7iN-aqz1iLB-BR0GJGYTGq_O6dNyVyMW5m5xwLl4WKbr7qi9jhzLcXnxNetufki30JNku-xK5BqNVj6d9gzAfkgUleQflrOzVJuVjW-wh214FQLrosSZBOBE6EbcnPzLVMfGojVkqzacxOeSMVCrPe60ef0feRuyAz5xDz1RyCzqz0ek0a";
const SPA_IMG1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ5ehC2I9MUF2GPv21iWsDNfNblU3GmYnNRAFfnIReL3e8sKEi6wiAbw9LaWkSXK4m68nsRY8Vig80v0XgdPFNFIzpX0c6MwRkBHj1lxMkB0iUWYdu0ly7a6EiDOpl5IRargsPASKr4ygF7fh04cgz_viiiNPBX8EQcOTRfWar5egjO2P9tMirzhLtT_RGX1pho8d8EK5QdfXhSDuWJc4qjFmCAC6nyj-JNeQ61cXua_WVN7xJLkmp";
const SPA_IMG2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAWrK07u8hYsA11ztn2YYEPXYVRgjymAwP5JGfqijY_mbAVt7gocCkPwZlNnvlKc444wbDygDuFSHp9WBJ7Tu1JSZPmNJktHpK9vqw7j4NHc_JC-xgtImorauIjTrLCGKuXU_jCg0EqImu8aNphg0HOnxs8wUJUFLwScnA0Ht5KQ01vAtvgyAkcUf17hjXreWSbTX7cEHSAFiZ4ps24sv2tAtrifDJioq6sXiqMgi1X53B9iHdqgVdK";
const FEATURE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDbgmqJJCDzQ4wt9eyfqBeNuG0700k1l3D3wNViHxH8Cza4dUSFJBvQE_k3tnVR_bx1K4AD1MJBUMguBtG93WLkr-dgbdyWgYDONEPjhnshKC43s3LiQ4gh--f2GMPJIOwKU10P0vBgET5KQTDE0shlnvsjYkXhDIeZbdVYSTgiQkAQ-BHbevkdbu4ThiP1v9CimHrEnPHguDBhL4yaD17QT8mQOTLEGEH1Qvz4iOBu6lnCrPFIUKDK";

const treatments = [
    {
        num: '01', name: 'Deep Tissue Intensive Therapy', price: 'KES 6,500', badge: 'Most Requested',
        duration: '60 / 90 min', icon: 'healing',
        desc: 'Targeted neuromuscular pressure aimed at freeing deep fascial adhesions, alleviating persistent lumbar stiffness, and reversing postural compression caused by extensive air travel and boardroom posture.',
        tags: ['Focused Acupressure', 'Myofascial Release', 'Posture Alignment'],
    },
    {
        num: '02', name: 'Therapeutic Massage', price: 'KES 5,500', badge: null,
        duration: '60 / 90 min', icon: 'self_care',
        desc: 'Personalized bodywork modulating between firm muscle manipulation and rhythmic elongation to release systemic tension and clear mental overload. Includes bespoke essential oil pairing.',
        tags: ['Custom Oil Pairing', 'Scapular Release', 'Thermal Shower Prep'],
    },
    {
        num: '03', name: 'Therapeutic Hot Stone Ritual', price: 'KES 5,000', badge: null,
        duration: '75 min', icon: 'spa',
        desc: 'Warmed basalt stones placed along the vertebral column and major meridians. Organic volcanic heat penetrates three times deeper than manual pressure, dismantling chronic tension pockets.',
        tags: ['Basalt Stone Placement', 'Botanical Oils', 'Deep Circulatory Release'],
    },
    {
        num: '04', name: 'Executive Charcoal Facial', price: 'KES 6,000', badge: null,
        duration: '60 min', icon: 'face',
        desc: 'Pore extraction, activated bamboo charcoal mask, and cold-pressed marula hydration. Specifically curated for executive skin exposed to urban pollutants, UV radiation, and high-altitude travel.',
        tags: ['Charcoal Detox', 'Marula Hydration', 'Micro-current Lift'],
    },
    {
        num: '05', name: 'Botanical Scrubs & Wraps', price: 'KES 5,500', badge: null,
        duration: '60 min', icon: 'grain',
        desc: 'Organic Kenyan coastal sea salt, volcanic clay, and jojoba micro-polish to stimulate dermal lymphatic drainage and restore velvety suppleness to travel-stiffened skin.',
        tags: ['Sea Salt Exfoliation', 'Volcanic Clay', 'Jojoba Polish'],
    },
    {
        num: '06', name: 'Full Body Recovery Suite', price: 'KES 11,500', badge: 'Premium',
        duration: '120 min', icon: 'all_inclusive',
        desc: 'The definitive reset. Combines full-body exfoliation, aromatherapy steam wrap, deep tissue massage, executive facial mask, and a private post-treatment botanical lounge session.',
        tags: ['Exfoliation + Steam Wrap', 'Deep Tissue Massage', 'Executive Facial', 'Lounge Ritual'],
    },
];

const suiteFeatures = [
    { icon: 'shower', title: 'Private Rainfall Showers', desc: 'Warm cascade fixtures infused with organic eucalyptus essences to clear nasal pathways before or following your treatment.' },
    { icon: 'noise_aware', title: 'Acoustic Isolation Chambers', desc: 'Each suite is fitted with professional-grade acoustic shielding so your session is genuinely distraction-free.' },
    { icon: 'coffee', title: 'Botanical Post-Treatment Lounge', desc: 'Slow-brewed loose-leaf mountain herbal infusions and alkaline refreshments in our quiet library lounge.' },
];

export default function SpaWellness() {
    const [bookingOpen, setBookingOpen] = useState(false);
    const [selectedTreatment, setSelectedTreatment] = useState('Deep Tissue Intensive Therapy (KES 6,500)');

    const openBooking = (name, price) => {
        setSelectedTreatment(`${name} (${price})`);
        setBookingOpen(true);
    };

    return (
        <div style={{ background: 'var(--surface-dark)', minHeight: '100vh' }}>

            {/* ── HERO ───────────────────────────────────────────────── */}
            {/* ── HERO ───────────────────────────────────────────────── */}
            <section style={{ position: 'relative', overflow: 'hidden', padding: '5rem 0 6rem' }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                        {/* Left Column Text Content */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

                            {/* Top Badge */}
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.25rem', borderRadius: '9999px', background: 'var(--surface-container-high)', border: '1px solid var(--gold-border)', backdropFilter: 'blur(12px)', width: 'fit-content' }}>
                                <span className="pulse-dot"></span>
                                <span className="label-md text-primary" style={{ letterSpacing: '0.22em' }}>THE PRIVATE WELLNESS CHAMBERS</span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                                <span className="label-md text-on-surface-variant" style={{ letterSpacing: '0.25em', opacity: 0.8 }}>HOLISTIC BODY &amp; MIND RECALIBRATION</span>
                                <h1 className="display-lg text-light-primary" style={{ lineHeight: 1.08, margin: 0 }}>
                                    Reset. Recharge. <br />
                                    <em style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: 400 }}>Restore.</em>
                                </h1>
                            </div>

                            <p className="body-lg text-on-surface-variant" style={{ maxWidth: '36rem', lineHeight: 1.75, opacity: 0.9 }}>
                                Immerse yourself in sensory tranquility. Designed for discerning executives seeking deliberate decompression, physiological alignment, and holistic recalibration inside private soundproof suites.
                            </p>

                            <style>{`
                                @media (max-width: 639px) {
                                    .spa-hero-ctas {
                                        flex-wrap: nowrap !important;
                                        gap: 0.5rem !important;
                                    }
                                    .spa-hero-ctas > button, .spa-hero-ctas > a {
                                        flex: 1 !important;
                                        padding: 0.8rem 0.4rem !important;
                                        font-size: 9px !important;
                                        justify-content: center !important;
                                        text-align: center !important;
                                    }
                                    .spa-hero-ctas span.material-symbols-outlined {
                                        font-size: 15px !important;
                                    }
                                    .spa-desktop-img {
                                        display: none !important;
                                    }
                                }
                                @media (min-width: 640px) {
                                    .spa-mobile-img {
                                        display: none !important;
                                    }
                                }
                            `}</style>

                            {/* Mobile-only hero image */}
                            <div className="spa-mobile-img" style={{ position: 'relative', width: '100%', height: '15rem', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.5rem', border: '1px solid rgba(236,194,70,0.2)' }}>
                                <div className="img-cover" style={{ backgroundImage: `url('${SPA_HERO}')`, height: '100%' }}></div>
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,20,0.95) 0%, transparent 60%)' }}></div>
                                {/* Floating status badge inside mobile image */}
                                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(20,20,20,0.75)', backdropFilter: 'blur(8px)', padding: '0.4rem 0.875rem', borderRadius: '4px', border: '1px solid rgba(236,194,70,0.2)' }}>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '14px' }}>spa</span>
                                    <span className="label-md text-primary" style={{ fontSize: '0.65rem', letterSpacing: '0.15em' }}>PRIVATE SOUNDPROOF SUITES</span>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="spa-hero-ctas" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                                <button onClick={() => setBookingOpen(true)} className="btn-primary" style={{ gap: '0.75rem', padding: '0.875rem 2rem' }}>
                                    Reserve Suite Session
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                                </button>
                                <a href="https://wa.me/254719506995" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem' }}>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>chat</span>
                                    Concierge WhatsApp
                                </a>
                            </div>

                            {/* Metrics Strip */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', borderTop: '1px solid var(--outline-variant)', paddingTop: '1.75rem', marginTop: '0.5rem' }}>
                                {[
                                    ['100%', 'Private Suites'],
                                    ['Organic', 'Botanical Oils'],
                                    ['Rainfall', 'Aromatherapy'],
                                    ['0', 'Shared Spaces']
                                ].map(([v, l]) => (
                                    <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                        <span className="headline-sm text-primary" style={{ fontWeight: 700 }}>{v}</span>
                                        <span className="label-md text-on-surface-variant" style={{ letterSpacing: '0.12em', fontSize: '0.68rem' }}>{l.toUpperCase()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column Image Showcase */}
                        <div className="spa-desktop-img" style={{ position: 'relative' }}>
                            <div className="hero-barber-card" style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid var(--gold-border)' }}>
                                <div className="img-cover" style={{ backgroundImage: `url('${SPA_HERO}')`, height: '32rem', transition: 'transform 0.7s ease' }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}></div>
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,15,15,0.75) 0%, transparent 60%)' }}></div>

                                {/* Floating status badge */}
                                <div className="hero-station-badge" style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', padding: '1.125rem 1.5rem', borderRadius: '12px', background: 'rgba(20,20,20,0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(236,194,70,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                                        <span className="pulse-dot"></span>
                                        <div>
                                            <div className="label-md" style={{ letterSpacing: '0.15em', color: '#ffffff' }}>100% PRIVATE SOUNDPROOF SUITES</div>
                                            <div className="body-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>Aromatherapy &amp; Neuromuscular Therapy</div>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>spa</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── TREATMENTS SECTION ─────────────────────────────────── */}
            <section className="section" style={{ background: 'var(--surface-container-lowest)', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}>
                        <div>
                            <span className="label-md text-primary" style={{ letterSpacing: '0.3em', display: 'block', marginBottom: '0.75rem' }}>HOLISTIC CATALOG</span>
                            <h2 className="headline-lg text-light-primary" style={{ marginBottom: '0.5rem' }}>Crafted Body &amp; Facial Therapies</h2>
                            <p className="body-md text-on-surface-variant" style={{ maxWidth: '34rem' }}>Every therapy combines neuromuscular anatomy with botanical formulations to systematically dispel tension and fatigue.</p>
                        </div>
                        <button onClick={() => setBookingOpen(true)} className="btn-primary" style={{ flexShrink: 0 }}>Reserve a Treatment</button>
                    </div>

                    {/* Featured card (first treatment) */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3px', marginBottom: '3px' }}>
                        <div style={{ position: 'relative', overflow: 'hidden', gridColumn: 'span 1', background: 'var(--surface-container)' }}>
                            <div className="img-cover" style={{ backgroundImage: `url('${FEATURE_IMG}')`, height: '22rem' }}></div>
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)' }}></div>
                            <span style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', padding: '0.25rem 0.875rem', background: 'var(--primary)', color: 'var(--on-primary)', borderRadius: '2px' }} className="label-md">Most Requested</span>
                        </div>
                        <div style={{ background: 'var(--surface-container)', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                    <span className="label-md text-primary" style={{ opacity: 0.6, letterSpacing: '0.1em' }}>01</span>
                                    <span style={{ height: '1px', flex: 1, background: 'linear-gradient(to right, var(--primary), transparent)' }}></span>
                                    <span style={{ padding: '0.2rem 0.75rem', background: 'rgba(236,194,70,0.08)', border: '1px solid rgba(236,194,70,0.2)', borderRadius: '2px' }} className="label-md text-primary">KES 6,500</span>
                                </div>
                                <h3 className="headline-sm text-light-primary" style={{ marginBottom: '1rem' }}>Deep Tissue Intensive Therapy</h3>
                                <p className="body-md text-on-surface-variant" style={{ lineHeight: 1.7, marginBottom: '1.5rem' }}>{treatments[0].desc}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                    {treatments[0].tags.map(t => (
                                        <span key={t} style={{ padding: '0.25rem 0.75rem', background: 'var(--surface-container-high)', borderRadius: '2px' }} className="label-md text-on-surface-variant">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.5rem', borderTop: '1px solid var(--outline-variant)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="label-md text-on-surface-variant">
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px' }}>timelapse</span>
                                    60 / 90 min
                                </div>
                                <button onClick={() => openBooking('Deep Tissue Intensive Therapy', 'KES 6,500')}
                                    className="btn-primary" style={{ padding: '0.625rem 1.5rem' }}>Schedule Treatment</button>
                            </div>
                        </div>
                    </div>

                    {/* Treatment list rows */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        {treatments.slice(1).map((t, i) => (
                            <div key={t.name}
                                style={{ display: 'grid', gridTemplateColumns: '1fr', background: i % 2 === 0 ? 'var(--surface-container)' : 'var(--surface-container-high)', transition: 'all 0.3s' }}
                                onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-container-high)'}
                                onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'var(--surface-container)' : 'var(--surface-container-high)'}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', padding: '2rem 2.5rem' }}>
                                    {/* Left: number + title + desc */}
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flex: 1, minWidth: '200px' }}>
                                        <span className="headline-sm text-primary" style={{ opacity: 0.4, fontWeight: 700, fontSize: '0.85rem', minWidth: '1.75rem', paddingTop: '0.2rem' }}>{t.num}</span>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.375rem', flexWrap: 'wrap' }}>
                                                <h3 className="title-md text-light-primary" style={{ margin: 0 }}>{t.name}</h3>
                                                {t.badge && <span style={{ padding: '0.15rem 0.625rem', background: 'var(--primary)', color: 'var(--on-primary)', borderRadius: '2px', fontSize: '0.65rem', letterSpacing: '0.1em' }} className="label-md">{t.badge.toUpperCase()}</span>}
                                            </div>
                                            <p className="body-sm text-on-surface-variant" style={{ lineHeight: 1.65, maxWidth: '34rem' }}>{t.desc}</p>
                                        </div>
                                    </div>
                                    {/* Right: duration + price + CTA */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexShrink: 0, flexWrap: 'wrap' }}>
                                        <div style={{ textAlign: 'right' }}>
                                            <div className="label-md text-on-surface-variant" style={{ letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{t.duration}</div>
                                            <div className="headline-sm text-primary" style={{ fontWeight: 700 }}>{t.price}</div>
                                        </div>
                                        <button onClick={() => openBooking(t.name, t.price)}
                                            style={{ padding: '0.625rem 1.5rem', border: '1px solid rgba(236,194,70,0.35)', borderRadius: '2px', background: 'transparent', color: 'var(--primary)', cursor: 'pointer', transition: 'all 0.25s', whiteSpace: 'nowrap' }}
                                            className="label-md"
                                            onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'var(--on-primary)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary)'; }}>
                                            Book Session
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRIVATE SUITE SHOWCASE ─────────────────────────────── */}
            <section className="section" style={{ background: 'var(--surface-dark)', overflow: 'hidden' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                        {/* Images */}
                        <div style={{ position: 'relative', minHeight: '28rem' }}>
                            <div style={{ borderRadius: '2px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.6)' }}>
                                <div className="img-cover" style={{ backgroundImage: `url('${SPA_IMG1}')`, height: '28rem' }}></div>
                            </div>
                            <div style={{ position: 'absolute', bottom: '-2.5rem', right: '-2.5rem', width: '55%', borderRadius: '2px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.5)', border: '3px solid var(--surface-dark)' }}>
                                <div className="img-cover" style={{ backgroundImage: `url('${SPA_IMG2}')`, height: '14rem' }}></div>
                            </div>
                            {/* Gold accent */}
                            <div style={{ position: 'absolute', top: '-1.5rem', left: '-1.5rem', width: '5rem', height: '5rem', border: '1px solid rgba(236,194,70,0.25)', borderRadius: '2px', zIndex: 0 }}></div>
                        </div>

                        {/* Copy */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <span className="label-md text-primary" style={{ letterSpacing: '0.3em' }}>ARCHITECTURAL DISCRETION</span>
                            <h2 className="headline-lg text-light-primary">
                                Private Suite Architecture &amp;{' '}
                                <em style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: 400 }}>Post-Care Solace</em>
                            </h2>
                            <p className="body-md text-on-surface-variant" style={{ lineHeight: 1.7 }}>
                                Wellness at Executive Hideaway is inherently secluded. Each session takes place inside an isolated chamber built with acoustic shielding, customized lighting, and private en-suite amenities.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {suiteFeatures.map(f => (
                                    <div key={f.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.5rem', background: 'var(--surface-container)', borderRadius: '2px', borderLeft: '2px solid rgba(236,194,70,0.3)' }}>
                                        <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '2px', background: 'var(--surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="title-md text-light-primary" style={{ marginBottom: '0.375rem' }}>{f.title}</h4>
                                            <p className="body-sm text-on-surface-variant" style={{ lineHeight: 1.65 }}>{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BOOKING CTA ────────────────────────────────────────── */}
            <section className="section spa-booking-section" style={{ background: 'var(--surface-container-lowest)', padding: '7rem 0' }}>
                <style>{`
                    @media (max-width: 639px) {
                        .spa-booking-section { padding: 4rem 0 !important; }
                        .spa-booking-card { padding: 2.5rem 1.25rem !important; }
                        .spa-booking-badge { font-size: 9px !important; }
                        .spa-booking-title { font-size: 2rem !important; margin-bottom: 0.75rem !important; }
                        .spa-booking-desc { font-size: 1rem !important; margin-bottom: 1.5rem !important; }
                        .spa-booking-btn-group { flex-wrap: nowrap !important; gap: 0.5rem !important; }
                        .spa-booking-btn { flex: 1 !important; padding: 0.75rem 0.25rem !important; font-size: 8.5px !important; text-align: center !important; justify-content: center !important; white-space: nowrap !important; line-height: 1.2 !important; }
                        .spa-booking-btn span.material-symbols-outlined { font-size: 14px !important; }
                        .spa-booking-footer { flex-direction: column !important; gap: 0.25rem !important; font-size: 0.75rem !important; }
                        .hide-on-mobile { display: none !important; }
                    }
                `}</style>
                <div className="container">
                    <div className="spa-booking-card" style={{ position: 'relative', borderRadius: '4px', background: 'linear-gradient(135deg, var(--surface-dark) 0%, var(--surface-container) 100%)', padding: '4rem', boxShadow: '0 32px 80px rgba(0,0,0,0.5)', overflow: 'hidden', textAlign: 'center' }}>
                        {/* Gold glow orb */}
                        <div style={{ position: 'absolute', top: '-5rem', right: '-5rem', width: '20rem', height: '20rem', borderRadius: '50%', background: 'rgba(236,194,70,0.06)', filter: 'blur(48px)', pointerEvents: 'none' }}></div>
                        <div style={{ position: 'absolute', bottom: '-5rem', left: '-5rem', width: '18rem', height: '18rem', borderRadius: '50%', background: 'rgba(236,194,70,0.04)', filter: 'blur(48px)', pointerEvents: 'none' }}></div>

                        <div style={{ position: 'relative', zIndex: 1, maxWidth: '36rem', margin: '0 auto' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', background: 'rgba(236,194,70,0.1)', borderRadius: '2px', marginBottom: '1.5rem' }}>
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>stars</span>
                                <span className="label-md text-primary spa-booking-badge" style={{ letterSpacing: '0.2em' }}>UNCOMPROMISING STILLNESS</span>
                            </div>
                            <h2 className="headline-lg text-light-primary spa-booking-title" style={{ marginBottom: '1rem', lineHeight: 1.2 }}>Ready for Your Restoration?</h2>
                            <p className="body-lg text-on-surface-variant spa-booking-desc" style={{ lineHeight: 1.7, marginBottom: '2.5rem' }}>
                                Our therapists maintain strictly limited daily engagements to safeguard attentive care and suite exclusivity.
                            </p>
                            <div className="spa-booking-btn-group" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                                <button onClick={() => setBookingOpen(true)} className="btn-primary spa-booking-btn" style={{ padding: '1rem 2.5rem', boxShadow: '0 0 32px rgba(201,162,39,0.2)' }}>
                                    Book a Spa Experience
                                </button>
                                <a href="https://wa.me/254719506995" target="_blank" rel="noopener noreferrer"
                                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem', padding: '1rem 2rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '2px', color: 'var(--text-light-primary)', textDecoration: 'none', transition: 'border-color 0.3s' }}
                                    className="label-md spa-booking-btn"
                                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>chat</span>
                                    WhatsApp Consultation
                                </a>
                            </div>
                            <div className="body-sm text-on-surface-variant spa-booking-footer" style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '14px' }}>schedule</span>
                                <span>Open daily: 7:00 AM – 11:00 PM</span>
                                <span style={{ opacity: 0.5 }} className="hide-on-mobile">•</span>
                                <span>275 Nyeri Close, Kileleshwa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BOOKING MODAL ──────────────────────────────────────── */}
            {bookingOpen && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', padding: '1rem' }}>
                    <div style={{ background: 'var(--surface-container-high)', borderRadius: '4px', padding: '2.5rem', boxShadow: '0 32px 80px rgba(0,0,0,0.6)', position: 'relative', maxWidth: '32rem', width: '100%', border: '1px solid rgba(236,194,70,0.15)' }}>
                        <button onClick={() => setBookingOpen(false)}
                            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-on-surface-variant)', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-on-surface-variant)'}>
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        <div style={{ marginBottom: '2rem' }}>
                            <span className="label-md text-primary" style={{ letterSpacing: '0.25em', display: 'block', marginBottom: '0.5rem' }}>RESERVE YOUR CHAMBER</span>
                            <h3 className="headline-sm text-light-primary">Spa Appointment Request</h3>
                        </div>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                            onSubmit={e => { e.preventDefault(); alert('Reservation Initiated. Our concierge will contact you shortly.'); setBookingOpen(false); }}>
                            <div>
                                <label className="label-md text-on-surface-variant" style={{ display: 'block', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>SELECT TREATMENT</label>
                                <select value={selectedTreatment} onChange={e => setSelectedTreatment(e.target.value)}
                                    style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--surface-dark)', color: 'var(--text-light-primary)', border: '1px solid var(--outline-variant)', borderRadius: '2px', outline: 'none' }}
                                    className="body-sm">
                                    <option>Deep Tissue Intensive Therapy (KES 6,500)</option>
                                    <option>Therapeutic Massage (KES 5,500)</option>
                                    <option>Therapeutic Hot Stone Ritual (KES 5,000)</option>
                                    <option>Executive Charcoal Facial (KES 6,000)</option>
                                    <option>Botanical Scrubs & Wraps (KES 5,500)</option>
                                    <option>Full Body Recovery Suite (KES 11,500)</option>
                                </select>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label className="label-md text-on-surface-variant" style={{ display: 'block', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>PREFERRED DATE</label>
                                    <input type="date" required style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--surface-dark)', color: 'var(--text-light-primary)', border: '1px solid var(--outline-variant)', borderRadius: '2px', outline: 'none', boxSizing: 'border-box' }} className="body-sm" />
                                </div>
                                <div>
                                    <label className="label-md text-on-surface-variant" style={{ display: 'block', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>PREFERRED TIME</label>
                                    <select style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--surface-dark)', color: 'var(--text-light-primary)', border: '1px solid var(--outline-variant)', borderRadius: '2px', outline: 'none' }} className="body-sm">
                                        <option>Morning (08:00 – 12:00)</option>
                                        <option>Afternoon (12:00 – 16:00)</option>
                                        <option>Evening (16:00 – 20:00)</option>
                                        <option>Late Sanctuary (20:00 – 22:30)</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="label-md text-on-surface-variant" style={{ display: 'block', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>FULL NAME</label>
                                <input type="text" placeholder="Alexander Vance" required style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--surface-dark)', color: 'var(--text-light-primary)', border: '1px solid var(--outline-variant)', borderRadius: '2px', outline: 'none', boxSizing: 'border-box' }} className="body-sm" />
                            </div>
                            <div>
                                <label className="label-md text-on-surface-variant" style={{ display: 'block', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>MOBILE / WHATSAPP</label>
                                <input type="tel" placeholder="+254 7XX XXX XXX" required style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--surface-dark)', color: 'var(--text-light-primary)', border: '1px solid var(--outline-variant)', borderRadius: '2px', outline: 'none', boxSizing: 'border-box' }} className="body-sm" />
                            </div>
                            <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', padding: '1rem', width: '100%', boxShadow: '0 0 24px rgba(201,162,39,0.15)' }}>
                                Confirm Reservation
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
