import React from 'react'

export default function Logo({ height = '2.25rem', showSubtitle = true, className = '' }) {
    return (
        <div className={`executive-logo-brand ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
            {/* Diamond Emblem SVG */}
            <svg
                viewBox="0 0 100 100"
                style={{ height: height, width: 'auto', aspectRatio: '1/1', flexShrink: 0, display: 'block' }}
                aria-hidden="true"
            >
                {/* Outer Gold Diamond */}
                <polygon points="50,4 96,50 50,96 4,50" fill="none" stroke="var(--primary)" strokeWidth="3" />
                {/* Inner Gold Diamond Accent */}
                <polygon points="50,11 89,50 50,89 11,50" fill="none" stroke="var(--primary)" strokeWidth="1.2" opacity="0.8" />
                {/* Monogram EH */}
                <text
                    x="50"
                    y="59"
                    textAnchor="middle"
                    fill="var(--primary)"
                    fontFamily="'Bodoni Moda', 'Playfair Display', Georgia, serif"
                    fontSize="33"
                    fontWeight="700"
                    letterSpacing="1"
                >
                    EH
                </text>
            </svg>

            {/* Brand Text Cluster */}
            <div className="logo-text-cluster" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span className="logo-title" style={{
                    fontFamily: "'Bodoni Moda', Georgia, serif",
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: 'var(--on-surface)',
                    lineHeight: 1.1,
                    whiteSpace: 'nowrap',
                    textTransform: 'uppercase'
                }}>
                    EXECUTIVE HIDEAWAY
                </span>
                {showSubtitle && (
                    <span className="logo-subtitle" style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '0.52rem',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        color: 'var(--primary)',
                        lineHeight: 1.2,
                        marginTop: '0.15rem',
                        whiteSpace: 'nowrap',
                        textTransform: 'uppercase'
                    }}>
                        BARBER &amp; SPA &bull; NAIROBI
                    </span>
                )}
            </div>
        </div>
    )
}
