import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
    {
        id: 1,
        title: "Haircut & Styling",
        categories: ["barbering"],
        duration: "45 min",
        price: "KES [PRICE]",
        description: "Precision haircut tailored to your head shape, lifestyle and personal aesthetic with scalp tonic stimulation and hot towel finish.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ75FVqXFNyrBnrQS3_-Lv4bS1tabi6BC4yaLhkoyviIWYKIgUO2fZFxuGwLSpWlSH4QGNYlK9JgRGebdFeMllJEn0sya5Qa_Dbjk6fCLzlaSfQTdcKNtsPuFriMwIiMSgMXFucFiL8YZrV_an7Lv4nfQ_oP2VJ04fcNyY3in_lwrNMI1Dr9Jg0ME1KoyCFsLG17r_VY9mXVutf2GvANVHhb98ZaQmmd3i5TacVIKo6J4r49UGdX0i",
        tag: "Barbering"
    },
    {
        id: 2,
        title: "Beard Trim & Sculpt",
        categories: ["beard"],
        duration: "30 min",
        price: "KES [PRICE]",
        description: "Professional beard shaping, razor line finishing, and organic botanical beard oil infusion for optimal softness and definition.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnp0go8lCqAOb6M--M_ynXtmTJWvWP0F9NHbhIbQ0RTaxoSVzI9pf-qA5-rqgo6iWv3-7nVsVdoZwAM20eAGwvHdF38ejOkJ-oGFn1XLoUop8bGUoMV0M6p6KmF72rwEgJBcWzE0Hn2Me6cOZggqNZjIYwoNvjJMphJnAEzxVDVaWt2D0e2HRZU7uZoSn0eX_dfs_DFGuKFBtCfuO7wl0D-qcDID21SgCret6qdbCSZjeZqIVfk9at",
        tag: "Beard Craft"
    },
    {
        id: 3,
        title: "Hot Towel Shave",
        categories: ["barbering", "beard"],
        duration: "40 min",
        price: "KES [PRICE]",
        description: "Traditional executive shaving experience with warm lather, straight razor precision, and cool eucalyptus compress for effortless glide.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD80LfBmzfyzZty4rRo_BW4RLDX0Mk0rPw9KF9XpXPVIHh6HJwLv6iiD7ZLVJc7cV1APSI1h1GUUgjYEVYRhn9xEqvpuSZ5xAqUq-xqQ4JuXs1EEArOIvPP2dxk_wZ4Ix-5pAYQou-hMtrn02RtPP8bK4Prgs-aQ_YzxeWu_5pnmDJt4Zb6qr2YM1sN-IJSU4hUS9zs0oqjmMbTjj8428CXSi2EGEJKN6O5tgYZqvaVlaJjs2-WL2x4",
        tag: "Signature Shave"
    },
    {
        id: 4,
        title: "Therapeutic Massage",
        categories: ["spa", "massage"],
        duration: "60 min",
        price: "KES [PRICE]",
        description: "Personalized Swedish and myofascial massage designed to release tension, boost lymphatic drainage, and calm the executive mind.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArhSBS3_T2txjbCRsITVdOdSiS96W7k-pe1c3IDShHHTjagKIEM2scfSVozncRkgWM1AGHY6X77DrblDeig-Ex6FNJq_ECGiXnrfsKLITVpYxrSWYbVYsShd1Ry86IxmK9i8ragFR2gZ2zcEqz6k3HxbbiFsnPkZo9TJEFORDuVxoU1cfHy49YV7J5aLyD6OqXnWmE5sSzjzdNLmUocL43mUPRIeFJU6A5U3VWPfhbhQ0j6H6OIQpZ",
        tag: "Body & Mind"
    },
    {
        id: 5,
        title: "Deep Tissue Massage",
        categories: ["spa", "massage"],
        duration: "60 / 90 min",
        price: "KES [PRICE]",
        description: "Focused pressure targeting chronic muscle tension, back stiffness, and post-workout recovery using warming arnica and cypress extracts.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg1tcReJ_B-c--YSjhjsgXlkbhz3nzKMNsk8dstedJ1dYuuiIi66-UzBZsNc-tGBCRTT-4FFkfO6KorXoUlREVl2u_5KgWVn-AmPibaXnh_Xjywt7NhZ57g21KSpnJzB8FRAEgLmWgqx-VHDgjHcoll9WOczcKSKKoZqrPNzjKgpltk8vtXHVUgExglc_VdHN0-bSr38NnnnsxIqSXkzJLXpJF8StzKRS1hMinvFGoVMaCr0BPHc-l",
        tag: "Deep Release"
    },
    {
        id: 6,
        title: "Facial Treatment",
        categories: ["spa", "facials"],
        duration: "60 min",
        price: "KES [PRICE]",
        description: "Premium executive detox facial treatment for clarified, hydrated, and refreshed skin combating pollution, stress, and screen fatigue.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1kCm2JLn61OF331CqNP_aS3U4rIvsyZSg5KHrzejJC7V27N4YxBDUwlftIjRmd23DgB9br5iKcwEJMbX4YCSMGOuTXe-wGswd-WmThATPOHSi8wivW6e-Dwe8wFpdohwwsPPE7QvCtAupTMKs0erCXMV21Na9immuGFdQeLCeiLhLMsplrZJT1XtscwzvJLuaqbbMQNLRvwUvTj-fptvmSrEeHO7JHf-QobFcPFbx4vvigFwKPWlp",
        tag: "Dermal Care"
    },
    {
        id: 7,
        title: "Executive Scalp Ritual",
        categories: ["barbering", "spa"],
        duration: "35 min",
        price: "KES [PRICE]",
        description: "Invigorating scalp exfoliation with peppermint essential oils, acupressure relief, and micro-steam therapy to stimulate follicle renewal.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwiS6_XtwGoem4JX1IpW9nJlDcUuHhfqJpPPfKLONPro4-qAZo-w4SwCyIGD5sZJ9afM79NeZwt5vEGDhyZCQNRhUUyAJQkByAf32fsjsjY_mjxU3Bs8iFnzeaMeOctDsLCxbKIfu44-_xNx02pSv38TLGJbCDTFV_fgXaVTJaay3fBvCnWxwcd3letNYG8ohuPZQCqCgNv2J26WGQER5anLLgLGYjLUiumXWV9ARFOjh3IJH2gQnQ",
        tag: "Scalp Vitality"
    },
    {
        id: 8,
        title: "Detox Herbal Body Wrap",
        categories: ["spa", "body"],
        duration: "75 min",
        price: "KES [PRICE]",
        description: "Mineral-rich clay and botanical wrap paired with gentle thermal infusion to stimulate circulation, purge toxins, and restore total skin vitality.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD14qsDKkr-KfOzzC-bbzZMqE7BwcomFsnxY18n9MaD9pyEvsYlIcO3HXuebI6fQpHmxFdEBoInYd2XOXHh2Uy1dTZbvPQKR1as_DnA2LVvDrQmyWy8qLkIQ7rchGb_9DZt7o7TNodtNi5yvg-0OqeLcL4PIM_qru7-O1YttkI-hDSzBzaWIgnwE7yMK3dTMHKCODj4q163SKYmVVPMkR13sxJsh3Hu37klQ6KRTh4bNx5bxv8npKIO",
        tag: "Body Therapy"
    }
];

const filters = [
    { id: 'all', label: 'All Services' },
    { id: 'barbering', label: 'Barbering' },
    { id: 'beard', label: 'Beard' },
    { id: 'spa', label: 'Spa' },
    { id: 'massage', label: 'Massage' },
    { id: 'facials', label: 'Facials' },
    { id: 'body', label: 'Body Treatments' }
];

function ServicesMenu() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredServices = servicesData.filter(service =>
        activeFilter === 'all' || service.categories.includes(activeFilter)
    );

    const getCount = (filterId) => {
        if (filterId === 'all') return servicesData.length;
        return servicesData.filter(s => s.categories.includes(filterId)).length;
    };

    return (
        <div className="flex flex-col w-full bg-surface-dark min-h-screen">
            <section className="relative w-full overflow-hidden pb-16 pt-8 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
                <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary mb-6 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            <span className="font-label-md text-label-md uppercase tracking-widest text-primary">Atelier Menu &amp; Rituals</span>
                        </div>
                        <h1 className="font-headline-lg text-headline-lg text-text-light-primary tracking-tight mb-4">
                            Curated Grooming &amp; Wellness Treatments
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                            Designed to restore, refine, and elevate. Select a discipline below to explore our bespoke offerings crafted for discerning executives in Kileleshwa.
                        </p>
                    </div>
                    <div className="flex items-center gap-6 self-start lg:self-end bg-surface-container-low px-6 py-4 rounded-xl shadow-md">
                        <div className="flex flex-col">
                            <span className="font-label-md text-label-md uppercase tracking-widest text-text-light-muted">Private Suites</span>
                            <span className="font-title-md text-title-md text-primary mt-0.5">Discreet &amp; Soundproof</span>
                        </div>
                        <div className="w-px h-8 bg-surface-variant"></div>
                        <div className="flex flex-col">
                            <span className="font-label-md text-label-md uppercase tracking-widest text-text-light-muted">Availability</span>
                            <span className="font-title-md text-title-md text-text-light-primary flex items-center gap-1.5 mt-0.5">
                                <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                Today Open
                            </span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mb-14 overflow-x-auto pb-4 scrollbar-none">
                    <div className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-surface-container-low shadow-inner min-w-max">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`filter-tab px-5 py-2.5 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${activeFilter === filter.id
                                        ? 'bg-primary text-surface-dark shadow-sm'
                                        : 'text-on-surface-variant hover:text-text-light-primary'
                                    }`}
                                type="button"
                            >
                                <span>{filter.label}</span>
                                <span className={`text-[10px] py-0.5 px-1.5 rounded ${activeFilter === filter.id
                                        ? 'bg-black/20 text-surface-dark'
                                        : 'bg-surface-variant text-on-surface-variant'
                                    }`}>
                                    {getCount(filter.id)}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {filteredServices.map((service) => (
                        <article key={service.id} className="service-card group bg-surface-container rounded-xl overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                            <div className="relative h-56 w-full overflow-hidden bg-surface-container-low">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src={service.image}
                                    alt={service.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/30 to-transparent"></div>
                                <span className="absolute top-4 left-4 font-label-md text-label-md tracking-widest uppercase bg-surface-dark/80 backdrop-blur-md px-3 py-1 rounded text-primary">
                                    {service.tag}
                                </span>
                                <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-text-light-muted font-body-sm text-body-sm bg-surface-dark/70 px-2.5 py-1 rounded backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                                    {service.duration}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-baseline justify-between gap-2 mb-2.5">
                                        <h3 className="font-headline-sm text-headline-sm text-text-light-primary group-hover:text-primary transition-colors">{service.title}</h3>
                                    </div>
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="pt-4 mt-auto flex items-center justify-between gap-4 bg-surface-container-high/40 -mx-6 -mb-6 p-6">
                                    <div>
                                        <span className="font-label-md text-label-md uppercase tracking-wider text-text-light-muted block">Investment</span>
                                        <span className="font-title-md text-title-md text-primary font-semibold">{service.price}</span>
                                    </div>
                                    <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-primary hover:bg-secondary text-surface-dark font-label-md text-label-md uppercase tracking-wider transition-all duration-300 shadow-sm">
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}

                    {/* Concierge Card */}
                    <div className="bg-gradient-to-br from-surface-container-high to-surface-container rounded-xl p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
                        <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-primary/10 blur-2xl pointer-events-none"></div>
                        <div>
                            <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined">auto_awesome</span>
                            </div>
                            <span className="font-label-md text-label-md uppercase tracking-widest text-primary block mb-2">Concierge Inquiry</span>
                            <h3 className="font-headline-sm text-headline-sm text-text-light-primary mb-3">Custom Treatment Plans</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                Planning a private boardroom delegation, wedding ceremony, or discreet executive retreat? Our concierge will tailor bespoke sequential sessions.
                            </p>
                        </div>
                        <div className="pt-8">
                            <a href="tel:+254719506995" className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-widest text-primary hover:text-secondary transition-colors">
                                <span>Speak With Concierge</span>
                                <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIP Sanctuary Day */}
            <section className="w-full px-6 lg:px-12 max-w-7xl mx-auto pb-24">
                <div className="relative rounded-2xl overflow-hidden bg-surface-container-high shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/85 to-transparent z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-right object-cover opacity-40"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCC146AtEKoHrFt7u6YLOsEPkWM9qSyIMTq0lsaCYK5lAlZJNJ3AzcntCsDLW_FGAp4RrNB6eE9aQoOvZkEmNn7NOYKqMiWHG23ZIFKuPdde2NiRBHy35sfUovHjemBTqRhFDlaEuIeFsCazj1hQUS3w7bubnwcgcIpL4fgc-Pj2fanmp0bkE15_KBF-foXkITslhGmFVuZnl0RDVRTc8MJL1X86y7hD7buRmEF41c4ii48RsLrKRz2')" }}
                    ></div>
                    <div className="relative z-20 p-8 sm:p-12 lg:p-16 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary mb-6 shadow-sm">
                            <span className="material-symbols-outlined text-sm">stars</span>
                            <span className="font-label-md text-label-md uppercase tracking-widest">VIP Signature Experience</span>
                        </div>
                        <h2 className="font-headline-lg text-headline-lg text-text-light-primary tracking-tight mb-4">
                            The Executive Sanctuary Day
                        </h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
                            The pinnacle of grooming indulgence. Enjoy our signature haircut, classic royal hot towel shave, 60-minute deep tissue therapy, and personalized revitalizing facial in our secluded VIP suite with curated single-malt refreshments.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                            <div className="bg-surface-dark/70 backdrop-blur-sm p-3.5 rounded-lg shadow-sm">
                                <span className="font-label-md text-label-md text-text-light-muted block uppercase">Haircut</span>
                                <span className="font-body-sm text-body-sm text-text-light-primary font-medium mt-0.5 block">Full Styling</span>
                            </div>
                            <div className="bg-surface-dark/70 backdrop-blur-sm p-3.5 rounded-lg shadow-sm">
                                <span className="font-label-md text-label-md text-text-light-muted block uppercase">Shave</span>
                                <span className="font-body-sm text-body-sm text-text-light-primary font-medium mt-0.5 block">Hot Towel</span>
                            </div>
                            <div className="bg-surface-dark/70 backdrop-blur-sm p-3.5 rounded-lg shadow-sm">
                                <span className="font-label-md text-label-md text-text-light-muted block uppercase">Massage</span>
                                <span className="font-body-sm text-body-sm text-text-light-primary font-medium mt-0.5 block">60 Min Deep</span>
                            </div>
                            <div className="bg-surface-dark/70 backdrop-blur-sm p-3.5 rounded-lg shadow-sm">
                                <span className="font-label-md text-label-md text-text-light-muted block uppercase">Facial</span>
                                <span className="font-body-sm text-body-sm text-text-light-primary font-medium mt-0.5 block">Dermal Detox</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                            <div>
                                <span className="font-label-md text-label-md uppercase tracking-widest text-text-light-muted block">All-Inclusive Sanctuary Rate</span>
                                <span className="font-headline-sm text-headline-sm text-primary font-semibold">KES [PRICE]</span>
                            </div>
                            <a href="#" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary hover:bg-secondary text-surface-dark font-label-md text-label-md uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg">
                                Book Package
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServicesMenu;
