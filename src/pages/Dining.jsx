import { useState } from 'react'

// ─── Real Food & Drink Images (Unsplash High-Res Fine Dining & Craft Cocktails) ───────────
const HERO_BG = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80" // Luxury steakhouse dining
const IN_SUITE_BG = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80" // Fine dining interior

const FOOD_IMAGES = {
    // Starters
    burrata: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a85?auto=format&fit=crop&w=800&q=80", // Burrata & Tomatoes
    bisque: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80", // Gourmet soup/bisque
    carpaccio: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80", // Beef carpaccio / steak tartare
    foieGras: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", // Plated gourmet dish

    // Mains
    tomahawk: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80", // Tomahawk steak
    salmon: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80", // Pan-seared salmon
    lamb: "https://images.unsplash.com/photo-1603073163308-9655c3e7215b?auto=format&fit=crop&w=800&q=80", // Rack of lamb
    risotto: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80", // Black truffle risotto

    // Desserts
    fondant: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80", // Chocolate fondant
    brulee: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=800&q=80", // Crème Brûlée
    pavlova: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80", // Berry dessert

    // Drinks
    oldFashioned: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80", // Whiskey cocktail
    negroni: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80", // Negroni
    espressoMartini: "https://images.unsplash.com/photo-1545438102-799c3991ff22?auto=format&fit=crop&w=800&q=80", // Espresso Martini
    mocktail: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80", // Fresh fruit cocktail

    // Wines
    redWine: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80", // Red wine bottle & glass
    champagne: "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&w=800&q=80", // Champagne bottle
    whiteWine: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?auto=format&fit=crop&w=800&q=80", // White wine glass
}

// ─── Menu Data ────────────────────────────────────────────────────
const menuSections = [
    {
        key: 'starters', label: 'Starters & Small Plates', icon: 'soup_kitchen',
        items: [
            {
                name: 'Burrata & Heirloom Tomato',
                desc: 'Fresh Italian burrata, slow-roasted heirloom tomatoes, aged balsamic reduction, and micro basil.',
                price: 'KES 1,800',
                img: FOOD_IMAGES.burrata,
                tag: 'Vegetarian'
            },
            {
                name: 'King Prawn Bisque',
                desc: 'Cognac-flambéed king prawn broth, cream swirl, toasted brioche croutons, and chive oil.',
                price: 'KES 2,200',
                img: FOOD_IMAGES.bisque,
                tag: 'Seafood'
            },
            {
                name: 'Wagyu Beef Carpaccio',
                desc: 'Paper-thin A5 Wagyu, truffle-infused olive oil, Parmesan shavings, capers, and lemon zest.',
                price: 'KES 2,800',
                img: FOOD_IMAGES.carpaccio,
                tag: 'Chef Choice'
            },
            {
                name: 'Pan-Seared Foie Gras',
                desc: 'Pan-seared duck foie gras on toasted brioche, caramelized fig compote, and Sauternes reduction.',
                price: 'KES 3,200',
                img: FOOD_IMAGES.foieGras,
                tag: 'Gourmet'
            },
        ]
    },
    {
        key: 'mains', label: 'Main Courses', icon: 'restaurant',
        items: [
            {
                name: 'Dry-Aged Tomahawk Steak',
                desc: '45-day dry-aged prime Tomahawk steak (1.2 kg), truffle butter baste, roasted bone marrow, and béarnaise.',
                price: 'KES 12,500',
                img: FOOD_IMAGES.tomahawk,
                tag: 'Signature'
            },
            {
                name: 'Pan-Seared Atlantic Salmon',
                desc: 'Fresh wild Scottish salmon fillet, saffron-lemon beurre blanc, wilted baby spinach, and crispy capers.',
                price: 'KES 5,500',
                img: FOOD_IMAGES.salmon,
                tag: 'Wild Catch'
            },
            {
                name: 'Rack of Lamb Provençal',
                desc: 'Herb-crusted French-trimmed rack of lamb, ratatouille compote, rosemary lamb jus, and pommes dauphinoise.',
                price: 'KES 9,800',
                img: FOOD_IMAGES.lamb,
                tag: 'Executive Special'
            },
            {
                name: 'Black Truffle Risotto',
                desc: 'Carnaroli Arborio rice, aged Parmigiano Reggiano, shaved fresh black truffle, and Périgord truffle oil.',
                price: 'KES 4,200',
                img: FOOD_IMAGES.risotto,
                tag: 'Vegetarian'
            },
        ]
    },
    {
        key: 'desserts', label: 'Artisan Desserts', icon: 'cake',
        items: [
            {
                name: 'Valrhona Chocolate Fondant',
                desc: 'Warm 72% dark chocolate liquid heart, Tahitian vanilla bean ice cream, and salted caramel veil.',
                price: 'KES 1,600',
                img: FOOD_IMAGES.fondant,
                tag: 'Pastry Chef Pick'
            },
            {
                name: 'Crème Brûlée Royale',
                desc: 'Silky Madagascar vanilla bean custard, gold-torched caramel crust, and roasted pistachio crumb.',
                price: 'KES 1,400',
                img: FOOD_IMAGES.brulee,
                tag: 'Classic'
            },
            {
                name: 'Fresh Berry Pavlova',
                desc: 'Crispy Swiss meringue nest, Chantilly cream, wild seasonal berries, and passionfruit reduction.',
                price: 'KES 1,500',
                img: FOOD_IMAGES.pavlova,
                tag: 'Fresh'
            },
        ]
    },
]

const cocktails = [
    {
        name: 'The Executive Pour',
        desc: 'Glenlivet 18yr, honey reduction, smoked rosemary, and single sphere ice.',
        price: 'KES 2,800',
        badge: 'SIGNATURE',
        img: FOOD_IMAGES.oldFashioned,
    },
    {
        name: 'Nairobi Negroni',
        desc: 'Hendricks gin, Campari, Carpano Antica vermouth, and burnt orange peel.',
        price: 'KES 2,200',
        badge: 'HOUSE CLASSIC',
        img: FOOD_IMAGES.negroni,
    },
    {
        name: 'Black Ivory Old Fashioned',
        desc: 'Buffalo Trace Bourbon, black ivory sugar, Angostura bitters, and torched leather essence.',
        price: 'KES 2,400',
        badge: 'SIGNATURE',
        img: FOOD_IMAGES.oldFashioned,
    },
    {
        name: 'Gold Dust Espresso Martini',
        desc: 'Vodka, Kahlúa, double-shot cold brew espresso, and 24k edible gold flake finish.',
        price: 'KES 2,600',
        badge: 'BESTSELLER',
        img: FOOD_IMAGES.espressoMartini,
    },
    {
        name: 'Hibiscus Elevation',
        desc: 'Hibiscus tea, fresh ginger syrup, muddled mint, and sparkling elderflower water.',
        price: 'KES 1,200',
        badge: 'MOCKTAIL',
        img: FOOD_IMAGES.mocktail,
    },
    {
        name: 'Kenyan Sunrise Cooler',
        desc: 'Fresh mango purée, passionfruit, fresh lime, and pineapple-ginger shrub.',
        price: 'KES 1,100',
        badge: 'MOCKTAIL',
        img: FOOD_IMAGES.mocktail,
    },
]

const wines = [
    { name: 'Caymus Cabernet Sauvignon', origin: 'Napa Valley, California', price: 'KES 18,500 / btl', type: 'RED', img: FOOD_IMAGES.redWine },
    { name: 'Veuve Clicquot Champagne', origin: 'Champagne, France', price: 'KES 22,000 / btl', type: 'CHAMPAGNE', img: FOOD_IMAGES.champagne },
    { name: 'Cloudy Bay Sauvignon Blanc', origin: 'Marlborough, New Zealand', price: 'KES 9,800 / btl', type: 'WHITE', img: FOOD_IMAGES.whiteWine },
    { name: 'Gavi di Gavi La Scolca', origin: 'Piedmont, Italy', price: 'KES 11,500 / btl', type: 'WHITE', img: FOOD_IMAGES.whiteWine },
]

const TABS = [
    { label: 'Fine Dining Menu', icon: 'restaurant_menu' },
    { label: 'Bar & Cocktails', icon: 'local_bar' },
    { label: 'Wines & Champagne', icon: 'wine_bar' },
    { label: 'In-Suite Dining', icon: 'room_service' },
]

const wineTypeStyle = {
    RED: { bg: 'rgba(160,30,30,0.18)', border: 'rgba(160,30,30,0.4)', color: '#e87878' },
    WHITE: { bg: 'rgba(200,220,160,0.14)', border: 'rgba(180,200,120,0.4)', color: '#d4e4aa' },
    CHAMPAGNE: { bg: 'rgba(236,194,70,0.15)', border: 'rgba(236,194,70,0.4)', color: 'var(--primary)' },
}

export default function Dining() {
    const [activeTab, setActiveTab] = useState(0)
    const [hoveredCard, setHoveredCard] = useState(null)

    return (
        <div>

            {/* ══ 1. HERO ═══════════════════════════════════════════════ */}
            <section className="hero-dark-theme" style={{
                position: 'relative', minHeight: '82vh', display: 'flex',
                flexDirection: 'column', justifyContent: 'flex-end',
                marginTop: '-5rem', overflow: 'hidden',
            }}>
                <div className="img-cover" style={{ backgroundImage: `url('${HERO_BG}')`, position: 'absolute', inset: 0 }} />
                <div className="hero-overlay-dark" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.65) 45%, rgba(0,0,0,0.25) 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 80%, var(--gold-glow), transparent 55%)' }} />

                <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '14rem', paddingBottom: '5rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1.1rem', borderRadius: '9999px', background: 'rgba(236,194,70,0.08)', backdropFilter: 'blur(12px)', border: '1px solid var(--gold-border)', marginBottom: '1.75rem' }}>
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>restaurant</span>
                        <span className="label-md text-primary" style={{ letterSpacing: '0.24em' }}>THE RESORT DINING EXPERIENCE</span>
                    </div>

                    <h1 className="display-lg text-light-primary" style={{ maxWidth: '36rem', lineHeight: 1.12, marginBottom: '1.25rem' }}>
                        Continental Cuisine &{' '}
                        <em style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: 400 }}>Bespoke Spirits</em>
                    </h1>

                    <p className="body-lg text-on-surface-variant" style={{ maxWidth: '38rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                        A culinary retreat where artisanal gastronomy, handcrafted mixology, and rare cellar vintages unite — served tableside or directly to your private suite.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="https://wa.me/254719506995" target="_blank" rel="noopener noreferrer" className="btn-primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calendar_month</span>
                            Reserve a Table
                        </a>
                        <a href="#menu" className="btn-ghost">Explore Visual Menu</a>
                    </div>
                </div>

                {/* ── Stat bar ── */}
                <div style={{ position: 'relative', zIndex: 2, background: 'var(--surface-container-high)', backdropFilter: 'blur(20px)', borderTop: '1px solid var(--gold-border)' }}>
                    <div className="container" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                            {[
                                ['À La Carte Menu', 'Starters, Mains & Desserts'],
                                ['Signature Bar', 'Craft cocktails & single malts'],
                                ['In-Suite Service', 'White-glove room delivery'],
                                ['7AM – 11PM Daily', 'All-day resort service'],
                            ].map(([title, sub]) => (
                                <div key={title}>
                                    <div className="title-md text-primary" style={{ marginBottom: '0.2rem', fontWeight: 600 }}>{title}</div>
                                    <div className="body-sm text-on-surface-variant">{sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 2. MENU TABS & IMAGE GRID ════════════════════════════ */}
            <section className="section bg-surface-dark" id="menu">
                <div className="container">

                    {/* Section header */}
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="label-md text-primary" style={{ letterSpacing: '0.28em', display: 'block', marginBottom: '0.75rem' }}>GASTRONOMY & MIXOLOGY</span>
                        <h2 className="headline-lg text-light-primary" style={{ marginBottom: '0.75rem' }}>Visual Menu & Selection</h2>
                        <p className="body-md text-on-surface-variant" style={{ maxWidth: '34rem', margin: '0 auto' }}>
                            Every dish and drink is prepared to order using imported prime cuts, fresh herbs, and artisanal spirits.
                        </p>
                    </div>

                    {/* Tab row */}
                    <div style={{ display: 'flex', gap: '3px', marginBottom: '3rem', overflowX: 'auto', paddingBottom: '2px' }}>
                        {TABS.map((tab, i) => (
                            <button key={tab.label} onClick={() => setActiveTab(i)} style={{
                                flexShrink: 0, display: 'flex', alignItems: 'center', gap: '0.5rem',
                                padding: '0.875rem 1.75rem',
                                background: activeTab === i ? 'var(--primary)' : 'var(--surface-container)',
                                color: activeTab === i ? 'var(--on-primary)' : 'var(--on-surface-variant)',
                                border: 'none', cursor: 'pointer',
                                fontFamily: 'Manrope, sans-serif', fontSize: '11px', fontWeight: 700,
                                letterSpacing: '0.14em', textTransform: 'uppercase', transition: 'all 0.25s',
                            }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '17px', fontVariationSettings: activeTab === i ? "'FILL' 1" : "'FILL' 0" }}>{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* ── Tab 0: Fine Dining Grid with Real Food Images ── */}
                    {activeTab === 0 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                            {menuSections.map(section => (
                                <div key={section.key}>
                                    {/* Category Header */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--gold-border)' }}>
                                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '22px', fontVariationSettings: "'FILL' 1" }}>{section.icon}</span>
                                        <h3 className="headline-sm text-light-primary" style={{ margin: 0, letterSpacing: '0.04em' }}>{section.label}</h3>
                                    </div>

                                    {/* Cards Grid */}
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                        {section.items.map((item, idx) => {
                                            const cardId = `${section.key}-${idx}`
                                            const isHovered = hoveredCard === cardId
                                            return (
                                                <div
                                                    key={item.name}
                                                    onMouseEnter={() => setHoveredCard(cardId)}
                                                    onMouseLeave={() => setHoveredCard(null)}
                                                    style={{
                                                        background: 'var(--surface-container)',
                                                        borderRadius: '4px',
                                                        overflow: 'hidden',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        border: '1px solid',
                                                        borderColor: isHovered ? 'rgba(236,194,70,0.4)' : 'var(--outline-variant)',
                                                        transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                                                        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                                                        boxShadow: isHovered ? '0 20px 52px rgba(0,0,0,0.5), 0 0 0 1px rgba(236,194,70,0.25)' : '0 4px 20px rgba(0,0,0,0.25)',
                                                    }}
                                                >
                                                    {/* Real Food Image */}
                                                    <div style={{ position: 'relative', height: '13rem', overflow: 'hidden' }}>
                                                        <div className="img-cover" style={{
                                                            backgroundImage: `url('${item.img}')`,
                                                            transition: 'transform 0.6s ease',
                                                            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                                                        }} />
                                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface-container) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />

                                                        {/* Tag */}
                                                        <span style={{
                                                            position: 'absolute', top: '0.875rem', left: '0.875rem',
                                                            background: 'color-mix(in srgb, var(--surface-dark) 85%, transparent)',
                                                            backdropFilter: 'blur(8px)',
                                                            padding: '0.25rem 0.65rem', borderRadius: '2px',
                                                            fontFamily: 'Manrope, sans-serif', fontSize: '9px',
                                                            fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                                                            color: 'var(--primary)', border: '1px solid rgba(236,194,70,0.25)',
                                                        }}>{item.tag}</span>
                                                    </div>

                                                    {/* Content */}
                                                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                                            <h4 className="title-md text-light-primary" style={{ margin: 0, color: isHovered ? 'var(--primary)' : 'var(--text-light-primary)', transition: 'color 0.25s' }}>{item.name}</h4>
                                                        </div>
                                                        <p className="body-sm text-on-surface-variant" style={{ lineHeight: 1.7, margin: '0 0 1.25rem', flex: 1 }}>{item.desc}</p>

                                                        {/* Footer */}
                                                        <div style={{
                                                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                                            paddingTop: '1rem', borderTop: '1px solid var(--outline-variant)',
                                                        }}>
                                                            <span className="title-md text-primary" style={{ fontWeight: 700 }}>{item.price}</span>
                                                            <a
                                                                href="https://wa.me/254719506995"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                style={{
                                                                    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                                                                    padding: '0.45rem 0.875rem',
                                                                    background: 'var(--primary)', color: 'var(--on-primary)',
                                                                    borderRadius: '2px', textDecoration: 'none',
                                                                    fontFamily: 'Manrope, sans-serif', fontSize: '10px',
                                                                    fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                                                                }}
                                                            >
                                                                Order
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}

                            <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
                                <a href="https://wa.me/254719506995" target="_blank" rel="noopener noreferrer"
                                    className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>restaurant</span>
                                    Reserve Your Table
                                </a>
                            </div>
                        </div>
                    )}

                    {/* ── Tab 1: Bar & Cocktails with Real Drink Images ── */}
                    {activeTab === 1 && (
                        <div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                {cocktails.map((drink, idx) => {
                                    const cardId = `drink-${idx}`
                                    const isHovered = hoveredCard === cardId
                                    return (
                                        <div
                                            key={drink.name}
                                            onMouseEnter={() => setHoveredCard(cardId)}
                                            onMouseLeave={() => setHoveredCard(null)}
                                            style={{
                                                background: 'var(--surface-container)',
                                                borderRadius: '4px',
                                                overflow: 'hidden',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                border: '1px solid',
                                                borderColor: isHovered ? 'rgba(236,194,70,0.4)' : 'var(--outline-variant)',
                                                transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                                                transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                                                boxShadow: isHovered ? '0 20px 52px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.25)',
                                            }}
                                        >
                                            {/* Drink Image */}
                                            <div style={{ position: 'relative', height: '12rem', overflow: 'hidden' }}>
                                                <div className="img-cover" style={{
                                                    backgroundImage: `url('${drink.img}')`,
                                                    transition: 'transform 0.6s ease',
                                                    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                                                }} />
                                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface-container) 0%, transparent 70%)' }} />
                                                <span style={{
                                                    position: 'absolute', top: '0.875rem', left: '0.875rem',
                                                    padding: '0.2rem 0.6rem', borderRadius: '2px',
                                                    background: drink.badge === 'MOCKTAIL' ? 'rgba(100,200,100,0.18)' : 'rgba(236,194,70,0.18)',
                                                    backdropFilter: 'blur(8px)',
                                                    border: `1px solid ${drink.badge === 'MOCKTAIL' ? 'rgba(100,200,100,0.4)' : 'rgba(236,194,70,0.35)'}`,
                                                    fontFamily: 'Manrope,sans-serif', fontSize: '9px', fontWeight: 700,
                                                    letterSpacing: '0.18em', textTransform: 'uppercase',
                                                    color: drink.badge === 'MOCKTAIL' ? '#88cc88' : 'var(--primary)',
                                                }}>{drink.badge}</span>
                                            </div>

                                            {/* Content */}
                                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                                <h4 className="title-md text-light-primary" style={{ margin: '0 0 0.5rem', color: isHovered ? 'var(--primary)' : 'var(--text-light-primary)' }}>{drink.name}</h4>
                                                <p className="body-sm text-on-surface-variant" style={{ margin: '0 0 1.25rem', lineHeight: 1.7, flex: 1 }}>{drink.desc}</p>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--outline-variant)' }}>
                                                    <span className="title-md text-primary" style={{ fontWeight: 700 }}>{drink.price}</span>
                                                    <a href="https://wa.me/254719506995" target="_blank" rel="noopener noreferrer" style={{ padding: '0.45rem 0.875rem', background: 'var(--primary)', color: 'var(--on-primary)', borderRadius: '2px', textDecoration: 'none', fontFamily: 'Manrope,sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Order</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Spirits callout */}
                            <div style={{
                                marginTop: '3rem', background: 'var(--surface-container-high)', padding: '2.5rem',
                                borderRadius: '4px', borderLeft: '3px solid var(--primary)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                            }}>
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px', fontVariationSettings: "'FILL' 1", flexShrink: 0 }}>local_bar</span>
                                <div>
                                    <h4 className="title-md text-light-primary" style={{ margin: '0 0 0.625rem' }}>Rare Spirits & Single Malts</h4>
                                    <p className="body-sm text-on-surface-variant" style={{ margin: '0 0 1rem', lineHeight: 1.75 }}>
                                        Our cellar stocks rare single malts (Macallan 18, Glenfiddich 21), small-batch bourbons, aged cognacs, and botanical gins — served tableside with crystal glassware.
                                    </p>
                                    <a href="https://wa.me/254719506995" target="_blank" rel="noopener noreferrer"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontFamily: 'Manrope,sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                                        <span>ENQUIRE ABOUT SPIRITS LIST</span>
                                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── Tab 2: Wines & Champagne with Wine Images ── */}
                    {activeTab === 2 && (
                        <div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                                {wines.map((wine, idx) => {
                                    const style = wineTypeStyle[wine.type]
                                    const cardId = `wine-${idx}`
                                    const isHovered = hoveredCard === cardId
                                    return (
                                        <div
                                            key={wine.name}
                                            onMouseEnter={() => setHoveredCard(cardId)}
                                            onMouseLeave={() => setHoveredCard(null)}
                                            style={{
                                                background: 'var(--surface-container)',
                                                borderRadius: '4px',
                                                overflow: 'hidden',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                border: '1px solid',
                                                borderColor: isHovered ? 'rgba(236,194,70,0.4)' : 'var(--outline-variant)',
                                                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                                                transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                                                boxShadow: isHovered ? '0 20px 52px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.25)',
                                            }}
                                        >
                                            <div style={{ position: 'relative', height: '11rem', overflow: 'hidden' }}>
                                                <div className="img-cover" style={{ backgroundImage: `url('${wine.img}')`, transition: 'transform 0.6s ease', transform: isHovered ? 'scale(1.08)' : 'scale(1)' }} />
                                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface-container) 0%, transparent 70%)' }} />
                                                <span style={{
                                                    position: 'absolute', top: '0.875rem', left: '0.875rem',
                                                    padding: '0.2rem 0.65rem', borderRadius: '2px', background: style.bg,
                                                    backdropFilter: 'blur(8px)', border: `1px solid ${style.border}`,
                                                    fontSize: '9px', letterSpacing: '0.18em', fontWeight: 700, fontFamily: 'Manrope,sans-serif', color: style.color,
                                                }}>{wine.type}</span>
                                            </div>
                                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                                <h4 className="title-md text-light-primary" style={{ margin: '0 0 0.35rem', color: isHovered ? 'var(--primary)' : 'var(--text-light-primary)' }}>{wine.name}</h4>
                                                <p className="body-sm text-on-surface-variant" style={{ margin: '0 0 1.25rem', flex: 1 }}>{wine.origin}</p>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--outline-variant)' }}>
                                                    <span className="title-md text-primary" style={{ fontWeight: 700 }}>{wine.price}</span>
                                                    <a href="https://wa.me/254719506995" target="_blank" rel="noopener noreferrer" style={{ padding: '0.45rem 0.875rem', background: 'var(--primary)', color: 'var(--on-primary)', borderRadius: '2px', textDecoration: 'none', fontFamily: 'Manrope,sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Reserve Bottle</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div style={{ background: 'var(--surface-container-high)', padding: '2.5rem', borderRadius: '4px', borderLeft: '3px solid var(--primary)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px', fontVariationSettings: "'FILL' 1", flexShrink: 0 }}>wine_bar</span>
                                <div>
                                    <h4 className="title-md text-light-primary" style={{ margin: '0 0 0.625rem' }}>Sommelier Consultation & Private Tastings</h4>
                                    <p className="body-sm text-on-surface-variant" style={{ margin: '0 0 1rem', lineHeight: 1.75 }}>
                                        Our sommelier provides personalized food &amp; wine pairing recommendations. Extended cellar vintages available upon request. Private wine tastings for delegations available with 24h notice.
                                    </p>
                                    <a href="https://wa.me/254719506995" target="_blank" rel="noopener noreferrer"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontFamily: 'Manrope,sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                                        <span>BOOK SOMMELIER CONSULTATION</span>
                                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── Tab 3: In-Suite Service ── */}
                    {activeTab === 3 && (
                        <div>
                            <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.5rem', height: '22rem' }}>
                                <div className="img-cover" style={{ backgroundImage: `url('${IN_SUITE_BG}')`, position: 'absolute', inset: 0 }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(12,12,12,0.95) 40%, rgba(12,12,12,0.35) 100%)' }} />
                                <div style={{ position: 'relative', zIndex: 1, padding: '3.5rem', maxWidth: '32rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <span className="label-md text-primary" style={{ letterSpacing: '0.22em', marginBottom: '1rem', display: 'block' }}>IN-SUITE DISCREET HOSPITALITY</span>
                                    <h3 className="headline-lg text-light-primary" style={{ margin: '0 0 1rem' }}>Dine During Your Treatment</h3>
                                    <p className="body-md text-on-surface-variant" style={{ lineHeight: 1.75, margin: 0 }}>
                                        Full à la carte service delivered straight to your private suite — timed around your haircut, facial, or massage session with total discretion.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                                {[
                                    { step: '01', icon: 'smartphone', title: 'Pre-Order via WhatsApp', desc: 'Order before your session or when arriving at the reception desk.' },
                                    { step: '02', icon: 'restaurant_menu', title: 'Full Menu Selection', desc: 'Choose any starters, mains, artisan desserts, or cocktails.' },
                                    { step: '03', icon: 'room_service', title: 'White-Glove Delivery', desc: 'Served hot on silver trays directly inside your soundproof suite.' },
                                    { step: '04', icon: 'receipt_long', title: 'Single Checkout Bill', desc: 'All food and drinks added to your primary appointment invoice.' },
                                ].map(item => (
                                    <div key={item.step} style={{ background: 'var(--surface-container)', padding: '2.25rem 1.75rem', borderRadius: '4px', border: '1px solid var(--outline-variant)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                                            <span className="headline-sm text-primary" style={{ fontWeight: 700, opacity: 0.45 }}>{item.step}</span>
                                            <span className="material-symbols-outlined text-primary" style={{ fontSize: '22px', fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                                        </div>
                                        <h4 className="title-md text-light-primary" style={{ margin: '0 0 0.5rem' }}>{item.title}</h4>
                                        <p className="body-sm text-on-surface-variant" style={{ margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <a href="https://wa.me/254719506995" target="_blank" rel="noopener noreferrer"
                                    className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>room_service</span>
                                    Request In-Suite Dining
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* ══ 3. PRIVATE DINING FEATURE ═════════════════════════════ */}
            <section className="section bg-surface-container-lowest">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>

                        {/* Image side */}
                        <div style={{ position: 'relative' }}>
                            <div style={{ borderRadius: '4px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>
                                <div className="img-cover" style={{ backgroundImage: `url('${HERO_BG}')`, height: '32rem' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,12,12,0.6), transparent 60%)' }} />
                            </div>
                            <div style={{
                                position: 'absolute', bottom: '-1.5rem', right: '-1.5rem',
                                background: 'var(--surface-container)', padding: '1.5rem 2rem',
                                borderRadius: '4px', border: '1px solid var(--gold-border)',
                                boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                            }}>
                                <div className="headline-lg text-primary" style={{ fontWeight: 700, lineHeight: 1, marginBottom: '0.25rem' }}>12</div>
                                <div className="label-md text-on-surface-variant" style={{ letterSpacing: '0.15em' }}>PRIVATE SUITES</div>
                            </div>
                        </div>

                        {/* Content side */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <span className="label-md text-primary" style={{ letterSpacing: '0.25em' }}>EXCLUSIVE RESERVATIONS</span>
                            <h2 className="headline-lg text-light-primary">
                                Private Suite<br />
                                <em style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: 400 }}>Dining Experience</em>
                            </h2>
                            <p className="body-md text-on-surface-variant" style={{ lineHeight: 1.8 }}>
                                Host intimate business dinners or personal celebrations for 2 to 6 guests in an executive suite. Our culinary team serves a bespoke multi-course tasting menu paired with rare cellar wines.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                                {[
                                    'Bespoke multi-course tasting menus for 2–6 guests',
                                    'Private sommelier & dedicated white-glove butler',
                                    'Custom floral, music & lighting ambiance setup',
                                    'Celebratory artisan cakes & champagne packages',
                                ].map(perk => (
                                    <div key={perk} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                        <span className="body-sm text-light-primary" style={{ fontWeight: 500 }}>{perk}</span>
                                    </div>
                                ))}
                            </div>
                            <div style={{ paddingTop: '0.5rem' }}>
                                <a href="https://wa.me/254719506995" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                    Reserve Private Dining Suite
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 4. RESERVATION BAR ════════════════════════════════════ */}
            <section style={{ background: 'var(--primary)', padding: '3rem 0' }}>
                <div className="container" style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem',
                }}>
                    <div>
                        <div className="headline-sm" style={{ color: 'var(--on-primary)', marginBottom: '0.375rem' }}>Ready to Reserve Your Dining Session?</div>
                        <div className="body-md" style={{ color: 'rgba(0,0,0,0.6)' }}>Tables and private suites sell out early — contact our concierge now</div>
                    </div>
                    <a href="https://wa.me/254719506995" target="_blank" rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
                            padding: '0.875rem 2rem',
                            background: 'var(--on-primary)', color: 'var(--primary)',
                            borderRadius: '2px', textDecoration: 'none',
                            fontFamily: 'Manrope, sans-serif', fontWeight: 700,
                            fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase',
                        }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
                        RESERVE VIA WHATSAPP
                    </a>
                </div>
            </section>

        </div>
    )
}
