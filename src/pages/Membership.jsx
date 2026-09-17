import { Link } from 'react-router-dom'

const VIP_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBw7-RDmElyQ4FJgJAx_NUuth55U_9zjJeMB7JqufLUz8ZqVzrFifXVjXjo_vDXGUt0A6HOZH2oBNw7hqWnNHNqhwRP_3jxPZkFK44Wf0KzBlogPAzD--P2aEnxao1k13Of9_-x9vgLB3cmWIBZZrFwLUdcePdUFfEWUwZK91cmMEPdnFyo9VzXtIN9RM3idwswZiUi37ep_4VB50wR6fC9-Znl0QuSc1flBHl8mybP4NvU4tXSHFDL"

const privileges = [
    { icon: 'shield_lock', title: 'Guaranteed Privacy', desc: 'Discreet booking systems & complete sanctuary from urban demands.' },
    { icon: 'schedule', title: 'Priority Access', desc: 'Bypass queues with preferential booking even during peak hours.' },
    { icon: 'inventory_2', title: 'Private Reserve', desc: 'Complimentary top-shelf beverages & personal locker.' },
    { icon: 'analytics', title: 'Quarterly Regiments', desc: 'Custom grooming profiles tailored by master barbers.' },
]

const LOUNGE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDOpbQ5hQBsPyjIgehnXN83vIntfg9XsloCPJ7J-AL4jPFd-q-BBLNBwU5qatYD0bRemP5eCHHZw_K9ql0MTzqWT0NQ3IZSTpR326PHuMv39s4_5r7qc8EwZ-z7-HAMahlcXq8lJHY08vqgofdO7alIxdn6O3XSQdN9MT02LUgZFzImjmf-M0aRmi0CEhIk1hMQbysMtnmR8EVmTsngQTO9Gg4NvZu50eVrmXTderTs00NzgoFdbLkP"
const SPA_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBvmmyTA-oa3K4zO1U09L_-AG6bVPZ9f76qhy0Dd3aJ2CW0myZGu6pMMI4tqpyNtiwUFOxLTcQfnPN2bxNhwy5UWs-EWw4noSQ059DPInMY8hUtColdUhbG3pE5oKAcZt--Ihk66958CqPy1FnujNIEZPstVQNAd1tSZ4TB_JJl6Wa3zaRi7KOfyJg55fPBgPUscl2tdSlI0nCyPB1pkwMUWRXxY-hIQzz4eIEGp8-fI051myKOalNd"

const tiers = [
    {
        name: 'Associate Tier',
        price: 'KES 15,000 / mo',
        cover: SPA_IMG,
        perks: [
            '2 Signature Haircuts per month',
            '1 Executive Facial or Spa Massage',
            '10% off top-shelf lounge beverages',
            'Flexible rescheduling access'
        ]
    },
    {
        name: 'Black Card / Executive Elite',
        price: 'KES 45,000 / mo',
        cover: LOUNGE_IMG,
        perks: [
            'Unlimited premium haircuts & beard mapping',
            'Weekly Deep Tissue Massages',
            'Guaranteed private booth with zero wait-time',
            'Complimentary single malts on arrival',
            '1 VIP Guest pass per month'
        ],
        highlight: true
    }
]

export default function Membership() {
    return (
        <div>
            {/* HERO */}
            <section className="hero-dark-theme" style={{ position: 'relative', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '-5rem', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <div className="img-cover hero-bg" style={{ backgroundImage: `url('${VIP_BG}')`, transition: 'transform 1s ease-out' }}></div>
                    <div className="hero-overlay-dark" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface-dark), rgba(17,17,17,0.7), rgba(0,0,0,0.4))' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '7rem', paddingBottom: '4rem', textAlign: 'center' }}>
                    <div style={{ maxWidth: '44rem', margin: '0 auto' }}>
                        <span className="label-md text-primary" style={{ letterSpacing: '0.25em', display: 'block', marginBottom: '1.25rem' }}>THE INNER CIRCLE</span>
                        <h1 className="hero-title display-lg text-light-primary" style={{ marginBottom: '1.5rem' }}>
                            A Commitment To <em style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: 400 }}>Uninterrupted Excellence</em>
                        </h1>
                        <p className="hero-desc body-lg text-on-surface-variant" style={{ lineHeight: 1.7, marginBottom: '3rem' }}>
                            Membership represents more than priority access. It is an exclusive sanctuary crafted for those who value time, precision, and undisturbed discretion.
                        </p>
                        <a href="#apply" className="btn-primary" style={{ padding: '1.25rem 3rem' }}>Request An Invitation</a>
                    </div>
                </div>
            </section>

            {/* PRIVILEGES */}
            <section className="section bg-surface-dark">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '32rem', margin: '0 auto 4rem' }}>
                        <span className="label-md text-primary" style={{ letterSpacing: '0.25em', display: 'block', marginBottom: '1rem' }}>UNFAIR ADVANTAGES</span>
                        <h2 className="headline-lg text-light-primary">Exclusive Member Benefits</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                        {privileges.map(p => (
                            <div key={p.title} style={{ padding: '2rem', background: 'var(--surface-container-low)', borderRadius: '4px', textAlign: 'center', borderTop: '2px solid transparent', transition: 'border-color 0.3s' }}
                                onMouseEnter={e => e.currentTarget.style.borderTopColor = 'var(--primary)'}
                                onMouseLeave={e => e.currentTarget.style.borderTopColor = 'transparent'}>
                                <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'var(--surface-container)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid var(--gold-border)' }}>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>{p.icon}</span>
                                </div>
                                <h3 className="title-md text-light-primary" style={{ marginBottom: '0.75rem' }}>{p.title}</h3>
                                <p className="body-sm text-on-surface-variant" style={{ lineHeight: 1.6 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIERS */}
            <section className="section bg-surface-container-lowest">
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <span className="label-md text-primary" style={{ letterSpacing: '0.25em', display: 'block', marginBottom: '1rem' }}>MEMBERSHIP TIERS</span>
                            <h2 className="headline-lg text-light-primary">Curated Access Levels</h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', width: '100%', maxWidth: '64rem' }}>
                            {tiers.map(t => (
                                <div key={t.name} style={{
                                    background: 'var(--surface-container)',
                                    padding: '3rem 2.5rem',
                                    borderRadius: '8px',
                                    border: t.highlight ? '1px solid var(--primary)' : '1px solid var(--gold-border)',
                                    boxShadow: t.highlight ? '0 0 40px rgba(236,194,70,0.1)' : 'none',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{ margin: '-3rem -2.5rem 2.5rem -2.5rem', height: '14rem', overflow: 'hidden' }}>
                                        <div className="img-cover" style={{ backgroundImage: `url('${t.cover}')`, height: '100%', transition: 'transform 0.5s' }}
                                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}></div>
                                    </div>
                                    {t.highlight && (
                                        <div style={{ position: 'absolute', top: '1.25rem', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'var(--on-primary)', padding: '0.4rem 1rem', borderRadius: '4px', whiteSpace: 'nowrap', zIndex: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }} className="label-md">MOST EXCLUSIVE</div>
                                    )}
                                    <h3 className="headline-md text-light-primary" style={{ marginBottom: '0.5rem' }}>{t.name}</h3>
                                    <div className="title-md text-primary" style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--outline-variant)' }}>{t.price}</div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
                                        {t.perks.map(perk => (
                                            <li key={perk} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '0.125rem' }}>check_circle</span>
                                                <span className="body-sm text-on-surface-variant" style={{ lineHeight: 1.5 }}>{perk}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* APPLICATION PROCESS */}
            <section id="apply" className="section bg-surface-dark">
                <div className="container">
                    <div style={{ maxWidth: '40rem', margin: '0 auto', background: 'var(--surface-container)', padding: '3rem', borderRadius: '8px', border: '1px solid var(--outline-variant)', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
                        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                            <span className="material-symbols-outlined text-primary" style={{ fontSize: '32px', marginBottom: '0.5rem' }}>how_to_reg</span>
                            <h2 className="headline-sm text-light-primary">Membership Application</h2>
                            <p className="body-sm text-on-surface-variant" style={{ marginTop: '0.5rem' }}>Submit your interest for the Black Tier or Associate Tier. Approved applicants will be contacted by our concierge.</p>
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); window.open('https://wa.me/254719506995?text=Hello,%20I%20am%20interested%20in%20applying%20for%20the%20Executive%20Hideaway%20Membership.', '_blank'); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-input" placeholder="e.g. James M." required />
                            </div>
                            <div>
                                <label className="form-label">Title / Profession</label>
                                <input type="text" className="form-input" placeholder="e.g. Tech Entrepreneur" />
                            </div>
                            <div>
                                <label className="form-label">Preferred Tier</label>
                                <select className="form-input" style={{ appearance: 'none' }} required>
                                    <option value="none">Select a Tier...</option>
                                    <option value="Associate">Associate Tier</option>
                                    <option value="Black">Black Card / Executive Elite</option>
                                </select>
                            </div>
                            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Submit Application to Concierge</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
