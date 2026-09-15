import React, { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Loader({ ready }) {
    const [render, setRender] = useState(true)

    useEffect(() => {
        if (ready) {
            // Wait for the fade-out CSS transition before unmounting
            const t = setTimeout(() => setRender(false), 900)
            return () => clearTimeout(t)
        }
    }, [ready])

    if (!render) return null

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 99999,
                backgroundColor: 'var(--surface-dark)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: ready ? 0 : 1,
                pointerEvents: ready ? 'none' : 'all',
                transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
        >
            <div className="loader-logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                <Logo height="5rem" showSubtitle={true} />

                {/* Thin loading bar */}
                <div style={{ width: '12rem', height: '2px', backgroundColor: 'rgba(236,194,70,0.15)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div className="loader-progress-bar" style={{ height: '100%', backgroundColor: 'var(--primary)', width: '40%', borderRadius: '2px' }}></div>
                </div>
            </div>

            <style>{`
                .loader-logo-container {
                    animation: subtle-pulse 3s infinite ease-in-out;
                }
                .loader-progress-bar {
                    animation: loader-shimmer 1.8s ease-in-out infinite;
                }
                @keyframes subtle-pulse {
                    0%, 100% { opacity: 0.9; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.02); }
                }
                @keyframes loader-shimmer {
                    0%   { transform: translateX(-100%); opacity: 0.6; }
                    50%  { opacity: 1; }
                    100% { transform: translateX(200%); opacity: 0.6; }
                }
            `}</style>
        </div>
    )
}
