import { Link } from 'react-router-dom'

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuC8MmjvS_crjBlqF2sGOIiBjVZZLYhdxL-Pl3QHTYvZ2M5tWT0yKucmV0uy-Bjfh7KQU_-5P7JNqWIzkhSrHUXQoeNugukDFW2puu21I59d-Jh11fPRHFK7qYzcDoyTx9TSkRfnHl63TRmC2sdOFUctu6ublslC_lQGp7oakdXhFDkK07A24AboHysrb8D_Ci0J2OYyYkXmb8pvGxqRSVjXMB7y7MJ0Pw0X62C3xGvt7K3WHUFYIJYv"
const FULL_CUT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCDX4TgnPEMTVE-zpz64aXye0_olFwHXi0F3MQh_FJe5FayRKIg3QZX1yjO8grwTDb8pnA-oMtjm4jTGgiawOjlbATKZ0zSi735tIg-Pl1-kQHDsicH3oHEKyXXfcGAnEI3QDPBiN-YheeDufl4FPZXTWEbV9MHLK7As33B1lOofvYzENA4jJDqQ6YHi2FOVntYdihBhm7EAmgOmHO1g6Q2zfK8yAx2t9HTyzY6JnP71_1losgOkFzi"
const BARBER_1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuB5el-ZisOadzEi8LTR2jciBRattmNBYq7bB9eFIg1BuIVgh3L8RJTSTPn3otqJNf7EP99aaGFQX2XUUdofFT8xZ-fzAiA4slahRH7gjQaEHIvJvqY1hj6hB0j_0r8XUR8zIa1GHUTNXXnNQKYzD5wbZXbBm2ZnmD4UyrJq06hcDpuNSOqzLDdv4pf545LdOLFklbTjDqOSMacOXC2YX0DYkDmmekhjy5SC0NiMwxo6Eorl_BaFhXPx"
const BARBER_2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCOFzhsgiKvV8tSr5S-6pzqbqxBZhTgBk7W11Vnz8shTe3u5mowRWZYfNUqflwOjtDnYj3MsjrsSBfhTqC_X0Ui-mgS6C7PLalGvqFvj8YdQR9j1XyzSz_bo9Mf7wVN97FAcg30e70rB8kuaisJ_eJbGvZmp9JUgX28kA6dYOTrqtF2Anf1PWFQWXbYD-vpY49nxWqzNwGa2zVbyR6jSNwl-neZLYQScc6wvfu9x-SdwY_i8yGv89l_"

const disciplines = [
    {
        num: "01", icon: 'content_cut', title: 'Precision Haircuts', desc: 'Sculpted architectural lines tailored to personal cranial silhouette with micro-scissor refinement.',
        price: 'Starting KES 3,500', items: ['Low, Mid & Skin Taper Fades', 'Classic Japanese Shear Cut', 'Modern Executive Texturizing', 'Afro Scissor Shaping & Crisp Edges']
    },
    {
        num: "02", icon: 'face_6', title: 'Beard Grooming', desc: 'Disciplined contouring and intense conditioning designed for jawline prominence and hair health.',
        price: 'Starting KES 2,800', items: ['Geometric Razor Line-Up', 'Warm Argan & Jojoba Oil Treatment', 'Natural Tone Beard Tinting', 'Ozone Steam Follicle Cleansing']
    },
    {
        num: "03", icon: 'spa', title: 'Hot Towel Shave', desc: "The quintessential multi-phase straight razor ritual honoring centuries-old gentleman's tradition.",
        price: 'Starting KES 3,000', items: ['Botanical Pre-Shave Application', 'Triple Eucalyptus Steamed Linens', 'Hand-Stropped Straight Edge Blade', 'Chilled Rosewater Pore Compression']
    },
    {
        num: "04", icon: 'brush', title: 'Hair & Scalp Care', desc: 'Advanced scalp revival treatments combined with artisan texturizing and seamless gray harmonizing.',
        price: 'Starting KES 2,500', items: ['Detoxifying Charcoal Scalp Scrub', 'Discreet Demi-Permanent Gray Blending', 'Matte & High-Gloss Pomade Styling', 'Ionic Thermal Volume Blowout']
    }
]

const amenities = [
    { icon: 'liquor', title: 'Single Malt & Artisanal Espresso', desc: 'Complimentary pours of aged Highland single malts, small-batch bourbon, or freshly roasted Kenyan specialty espresso curated from our private reserve bar.', tag: 'Bar Service Included' },
    { icon: 'headphones', title: 'Acoustic Isolation & Noise-Cancelling', desc: 'Premium noise-cancelling headphones available at every station. Take priority board calls in clear isolation or immerse in deep meditative ambient audio.', tag: 'High-Speed Wi-Fi • Seamless Calls' },
    { icon: 'meeting_room', title: 'Private Discreet Grooming Booths', desc: 'Individual partition suites designed for high-profile patrons who demand uninterrupted confidentiality, serene seclusion, and undivided attention.', tag: '100% Confidential Sanctuary' }
]

export default function BarberStudio() {
    return (
        <div>
            {/* ── HERO ─────────────────────────────────────────── */}
            <section style={{ position: 'relative', overflow: 'hidden', padding: '5rem 0 6rem' }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

                            {/* Top Atelier Badge */}
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.25rem', borderRadius: '9999px', background: 'var(--surface-container-high)', border: '1px solid var(--gold-border)', backdropFilter: 'blur(12px)', width: 'fit-content' }}>
                                <span className="pulse-dot"></span>
                                <span className="label-md text-primary" style={{ letterSpacing: '0.22em' }}>PRIVATE GENTLEMEN'S ATELIER • KILELESHWA</span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                                <span className="label-md text-on-surface-variant" style={{ letterSpacing: '0.25em', opacity: 0.8 }}>THE ART OF BESPOKE GROOMING</span>
                                <h1 className="display-lg text-light-primary" style={{ lineHeight: 1.08, margin: 0 }}>
                                    Precision. Style. <br />
                                    <em style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: 400 }}>Confidence.</em>
                                </h1>
                            </div>

                            <p className="body-lg text-on-surface-variant" style={{ maxWidth: '36rem', lineHeight: 1.75, opacity: 0.9 }}>
                                Master barbering tailored to the modern gentleman. Experience unmatched attention to detail, sacred hot towel rituals, and discreet hospitality inside our secluded Nairobi salon sanctuary.
                            </p>

                            {/* Feature pills */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                                {[
                                    { i: 'workspace_premium', l: 'Master Artisans' },
                                    { i: 'lock', l: 'Acoustic Privacy' },
                                    { i: 'local_bar', l: 'Single Malt Pour' }
                                ].map((tag, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.5rem 1rem', borderRadius: '6px', background: 'var(--surface-container)', border: '1px solid var(--outline-variant)' }}>
                                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>{tag.i}</span>
                                        <span className="label-md text-light-primary" style={{ letterSpacing: '0.12em', fontSize: '0.72rem' }}>{tag.l.toUpperCase()}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Actions */}
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                                <a href="#signature" className="btn-primary" style={{ gap: '0.75rem', padding: '0.875rem 2rem' }}>
                                    Explore Signature Ritual
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                                </a>
                                <a href="#menu" className="btn-ghost" style={{ padding: '0.875rem 2rem' }}>Discipline Menu</a>
                            </div>
                        </div>

                        {/* Right side Image Showcase */}
                        <div style={{ position: 'relative' }}>
                            <div className="hero-barber-card" style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid var(--gold-border)' }}>
                                <div className="img-cover" style={{ backgroundImage: `url('${HERO_IMG}')`, height: '30rem', transition: 'transform 0.7s ease' }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}></div>
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,15,15,0.75) 0%, transparent 60%)' }}></div>

                                {/* Floating station status badge */}
                                <div className="hero-station-badge" style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', padding: '1.125rem 1.5rem', borderRadius: '12px', background: 'rgba(20,20,20,0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(236,194,70,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                                        <span className="pulse-dot"></span>
                                        <div>
                                            <div className="label-md" style={{ letterSpacing: '0.15em', color: '#ffffff' }}>ATELIER STATION 01 &amp; 03</div>
                                            <div className="body-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>Master Artisans On Duty Today</div>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>content_cut</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CORE DISCIPLINES ─────────────────────────────────── */}
            <section className="section bg-surface" id="menu">
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '4rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>stars</span>
                                <span className="label-md text-primary" style={{ letterSpacing: '0.2em' }}>REFINED CRAFT</span>
                            </div>
                            <h2 className="headline-lg text-light-primary">Core Barbering Disciplines</h2>
                        </div>
                        <p className="body-md text-on-surface-variant" style={{ maxWidth: '28rem' }}>
                            Every consultation begins with a personal structural assessment, taking into account bone geometry, growth directions, and lifestyle preferences.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {disciplines.map(d => (
                            <div key={d.num} className="service-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '12px', background: 'var(--surface-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.5rem', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>{d.icon}</span>
                                    </div>
                                    <span className="label-md text-primary" style={{ letterSpacing: '0.15em', opacity: 0.8 }}>DISCIPLINE {d.num}</span>
                                    <h3 className="headline-sm text-light-primary" style={{ margin: '0.25rem 0 0.75rem' }}>{d.title}</h3>
                                    <p className="body-sm text-on-surface-variant" style={{ lineHeight: 1.7, marginBottom: '1.5rem' }}>{d.desc}</p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
                                        {d.items.map(item => (
                                            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="body-sm text-on-surface">
                                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></span>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '2rem', borderTop: '1px solid var(--surface-highest)', color: 'var(--on-surface-variant)' }}>
                                    <span className="label-md" style={{ letterSpacing: '0.15em' }}>{d.price.toUpperCase()}</span>
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>north_east</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── THE EXECUTIVE CUT RITUAL ────────────────────────── */}
            <section className="section bg-surface-dark" id="signature">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto 4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <span className="label-md text-primary" style={{ letterSpacing: '0.25em' }}>SANCTUARY HALLMARK</span>
                        <h2 className="display-lg text-light-primary">The Executive Cut</h2>
                        <p className="body-md text-on-surface-variant">
                            Our celebrated 75-minute comprehensive ritual. An unhurried journey that integrates cranial styling, beard architecture, and restorative aromatherapy.
                        </p>
                    </div>

                    <div style={{ background: 'var(--surface-container)', borderRadius: '16px', padding: '3.5rem', boxShadow: '0 24px 64px rgba(0,0,0,0.3)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span className="label-md text-primary" style={{ background: 'rgba(236,194,70,0.15)', padding: '0.25rem 0.75rem', borderRadius: '9999px', letterSpacing: '0.15em' }}>5-STAGE FULL RITUAL</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="label-md text-on-surface-variant">
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>timer</span>
                                    75 MINUTES
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[
                                    { num: '01', t: 'Hair & Scalp Consultation', d: 'Micro-dermal analysis, follicular health review, and bespoke silhouette styling strategy.' },
                                    { num: '02', t: 'Precision Haircut & Graduated Taper', d: 'Dual-shear cutting, seamless clipper gradation, and customized neckline squaring.' },
                                    { num: '03', t: 'Beard Sculpting & Razor Line-Up', d: 'Jawline sharpening using ergonomic Japanese straight-razors and conditioning oil base.' },
                                    { num: '04', t: 'Essential Oil Hot Towel Infusion', d: 'Steamed organic Egyptian cotton infused with eucalyptus and sandalwood aromatics.' },
                                    { num: '05', t: 'Finishing Tonic, Scalp Massage & Styling', d: 'Acupressure temple and cranial massage, cooling botanical splash, and premium pomade finish.' },
                                ].map(step => (
                                    <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', background: 'var(--surface-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0, boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                                            className="label-lg">{step.num}</div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                            <h4 className="title-md text-light-primary">{step.t}</h4>
                                            <p className="body-sm text-on-surface-variant">{step.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ background: 'var(--surface-dark)', borderRadius: '12px', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 16px 32px rgba(0,0,0,0.4)', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <div className="label-md text-on-surface-variant" style={{ letterSpacing: '0.15em' }}>COMPLETE PACKAGE</div>
                                    <h3 className="headline-sm text-light-primary" style={{ marginTop: '0.25rem' }}>The Full Experience</h3>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div className="label-md text-on-surface-variant" style={{ letterSpacing: '0.15em' }}>FEE</div>
                                    <div className="headline-sm text-primary">KES 6,500</div>
                                </div>
                            </div>

                            <div style={{ height: '12rem', borderRadius: '8px', overflow: 'hidden', position: 'relative', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                                <div className="img-cover" style={{ backgroundImage: `url('${FULL_CUT_IMG}')` }}></div>
                                <div style={{ position: 'absolute', bottom: '0.75rem', left: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>verified</span>
                                    <span className="label-md text-light-primary" style={{ letterSpacing: '0.15em' }}>SIGNATURE OFFERING</span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="body-sm text-on-surface-variant">
                                {[
                                    'Includes signature espresso or premium scotch pour',
                                    'Discreet private booth with acoustic sound dampening',
                                    'Scalp nourishment take-home mini formulation'
                                ].map(bullet => (
                                    <div key={bullet} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>check_circle</span>
                                        {bullet}
                                    </div>
                                ))}
                            </div>

                            <a href="#booking" className="btn-primary" style={{ width: '100%', marginTop: '1rem', textAlign: 'center' }}>
                                BOOK THE EXECUTIVE CUT
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUITE AMENITIES ───────────────────────────────────── */}
            <section className="section bg-surface">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '36rem', margin: '0 auto 4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <span className="label-md text-primary" style={{ letterSpacing: '0.2em' }}>ATMOSPHERIC DISTINCTION</span>
                        <h2 className="headline-lg text-light-primary">Suite Amenities</h2>
                        <p className="body-md text-on-surface-variant">
                            Crafted to preserve absolute discretion, productivity, and genuine restorative relaxation for executive clientele.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {amenities.map(a => (
                            <div key={a.title} style={{ padding: '2rem', borderRadius: '12px', background: 'var(--surface-container)', boxShadow: '0 4px 16px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div style={{ width: '3rem', height: '3rem', borderRadius: '8px', background: 'var(--surface-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>{a.icon}</span>
                                </div>
                                <h3 className="headline-sm text-light-primary">{a.title}</h3>
                                <p className="body-sm text-on-surface-variant" style={{ lineHeight: 1.7 }}>{a.desc}</p>
                                <div className="label-md text-primary" style={{ letterSpacing: '0.15em', marginTop: 'auto', paddingTop: '1rem' }}>
                                    {a.tag.toUpperCase()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BOOKING ───────────────────────────────────────────── */}
            <section className="section bg-surface-dark" id="booking">
                <div className="container">
                    <div style={{ background: 'var(--surface-container)', borderRadius: '16px', padding: '3.5rem', boxShadow: '0 24px 64px rgba(0,0,0,0.4)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', background: 'rgba(236,194,70,0.1)', borderRadius: '9999px', alignSelf: 'flex-start' }}>
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>schedule</span>
                                <span className="label-md text-primary" style={{ letterSpacing: '0.15em' }}>IMMEDIATE &amp; ADVANCE BOOKINGS</span>
                            </div>
                            <h2 className="headline-lg text-light-primary">Reserve Your Private Chair</h2>
                            <p className="body-md text-on-surface-variant" style={{ lineHeight: 1.7 }}>
                                Select your master artisan, choose your ritual discipline, and experience tailored excellence at 275 Nyeri Close, Kileleshwa. Walk-ins accommodated when private booth capacity permits.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
                                {[
                                    { n: 'Master Artisan Denis', d: 'Senior Scissor Specialist • 12 Yrs Experience', img: BARBER_1 },
                                    { n: 'Master Artisan Kenneth', d: 'Razor & Beard Architect • 9 Yrs Experience', img: BARBER_2 }
                                ].map((b, i) => (
                                    <label key={b.n} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'var(--surface-dark)', borderRadius: '12px', cursor: 'pointer', transition: 'background 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-highest)'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'var(--surface-dark)'}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <img src={b.img} alt={b.n} style={{ width: '3rem', height: '3rem', borderRadius: '50%', objectFit: 'cover' }} />
                                            <div>
                                                <div className="title-md text-light-primary">{b.n}</div>
                                                <div className="body-sm text-on-surface-variant">{b.d}</div>
                                            </div>
                                        </div>
                                        <input type="radio" name="barber" defaultChecked={i === 0} style={{ accentColor: 'var(--primary)', width: '1.25rem', height: '1.25rem', cursor: 'pointer' }} />
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div style={{ background: 'var(--surface-dark)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 12px 32px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                                <h3 className="headline-sm text-light-primary">Quick Atelier Reservation</h3>
                                <p className="body-sm text-on-surface-variant">Instant confirmation via SMS &amp; Private WhatsApp Concierge</p>
                            </div>

                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={e => e.preventDefault()}>
                                <div>
                                    <label className="form-label">Service Ritual</label>
                                    <select className="form-input">
                                        <option>The Executive Cut Ritual (75 min - KES 6,500)</option>
                                        <option>Precision Haircut &amp; Fade (45 min - KES 3,500)</option>
                                        <option>Hot Towel Straight Razor Shave (40 min - KES 3,000)</option>
                                    </select>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label className="form-label">Preferred Date</label>
                                        <input type="date" className="form-input" defaultValue="2026-03-31" />
                                    </div>
                                    <div>
                                        <label className="form-label">Preferred Time</label>
                                        <select className="form-input">
                                            <option>10:00 AM — Available</option>
                                            <option>11:30 AM — Available</option>
                                            <option>02:00 PM — Available</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="form-label">Contact Phone / WhatsApp</label>
                                    <input type="tel" className="form-input" placeholder="+254 7XX XXX XXX" required />
                                </div>
                                <button type="button" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}
                                    onClick={() => alert('Reservation inquiry registered. Our private concierge will confirm your slot shortly via WhatsApp.')}>
                                    CONFIRM BARBER APPOINTMENT
                                </button>
                            </form>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem' }} className="body-sm text-on-surface-variant">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>lock</span>
                                    Strict Confidentiality
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>call</span>
                                    +254 719 506 995
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
