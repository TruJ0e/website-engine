'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../momentum.css';

export default function MomentumServices({ business = {}, basePath = '' }) {
  const services = business.services || [];
  const cta = business.cta || {};
  const [openIndex, setOpenIndex] = useState(null);

  const defaultServices = [
    { name: 'Roof Replacement', price: 'From $8,500', duration: '1–2 days', description: 'Full tear-off and installation. We work with all major shingle brands and offer 30-year workmanship warranties on every job.' },
    { name: 'Storm Damage Repair', price: 'Free Inspection', duration: 'Same week', description: 'Hail and wind damage assessment with insurance documentation. We work directly with adjusters to make the process painless.' },
    { name: 'Gutter Installation & Repair', price: 'From $1,800', duration: '1 day', description: 'Seamless gutter systems custom-fit to your home. K-style or half-round, with guards available.' },
    { name: 'Siding Replacement', price: 'From $6,000', duration: '2–4 days', description: 'Vinyl, fiber cement, or wood siding installation. Energy-efficient options with manufacturer warranties.' },
    { name: 'Roof Inspection', price: '$199', duration: '1–2 hrs', description: 'Thorough inspection with photo documentation. Required by most insurance carriers before filing a claim.' },
    { name: 'Flat Roof Systems', price: 'From $4,500', duration: '1–2 days', description: 'TPO, EPDM, and modified bitumen flat roof installation and repair for commercial and residential properties.' },
  ];

  const displayed = services.length ? services : defaultServices;

  return (
    <div className="mom">
      {/* ── NAV ── */}
      <nav className="mom-nav">
        <div className="mom-nav__logo">
          <Link href={basePath || '/'}>
            {business.name?.split(' ')[0]}
            <span> {business.name?.split(' ').slice(1).join(' ')}</span>
          </Link>
        </div>
        <ul className="mom-nav__links">
          <li><Link href={`${basePath}/services`}>Services</Link></li>
          <li><Link href={`${basePath}/about`}>About</Link></li>
          <li><Link href={`${basePath}/contact`} className="mom-nav__cta">Free Estimate</Link></li>
        </ul>
      </nav>

      {/* ── PAGE HEADER ── */}
      <section style={{ paddingTop: '9rem', paddingBottom: '5rem', paddingLeft: '3rem', paddingRight: '3rem', borderBottom: '1px solid var(--mom-gray-200)' }}>
        <div className="mom-section-eyebrow">What We Do</div>
        <h1 style={{ fontFamily: 'var(--mom-serif)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: 700 }}>
          Services Built to Last
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--mom-gray-600)', marginTop: '1.5rem', maxWidth: 540, lineHeight: 1.75 }}>
          Every project includes a detailed written estimate, no hidden fees, and a workmanship warranty.
        </p>
      </section>

      {/* ── ACCORDION ── */}
      <section className="mom-section" style={{ background: 'var(--mom-bg)' }}>
        <div className="mom-container">
          <div className="mom-accordion">
            {displayed.map((svc, i) => (
              <div key={i} className={`mom-accordion-item${openIndex === i ? ' mom-accordion-item--open' : ''}`}>
                <button className="mom-accordion-trigger" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                  <div className="mom-accordion-trigger__left">
                    <span className="mom-accordion-trigger__num">0{i + 1}</span>
                    <span className="mom-accordion-trigger__name">{svc.name}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {svc.price && <span className="mom-accordion-trigger__price">{svc.price}</span>}
                    <span className="mom-accordion-trigger__arrow">+</span>
                  </div>
                </button>
                {openIndex === i && (
                  <div className="mom-accordion-body">
                    <p>{svc.description}</p>
                    <div className="mom-accordion-body__meta">
                      {svc.duration && <span><strong>Timeline:</strong> {svc.duration}</span>}
                      {svc.price && <span><strong>Starting at:</strong> {svc.price}</span>}
                    </div>
                    <Link href={`${basePath}/contact`} className="mom-btn mom-btn--primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                      Get an Estimate →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="mom-section" style={{ background: 'var(--mom-gray-100)' }}>
        <div className="mom-container">
          <div className="mom-section-eyebrow">Why Choose Us</div>
          <h2 className="mom-section-title">The Ridgeline Difference</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            {[
              { icon: '🛡', title: 'Licensed & Insured', desc: 'Full liability coverage and worker\'s compensation on every job.' },
              { icon: '📋', title: 'Transparent Estimates', desc: 'Written quotes with line-item breakdowns. No hidden costs, ever.' },
              { icon: '⭐', title: 'Workmanship Warranty', desc: 'We stand behind our work with a written warranty you can rely on.' },
              { icon: '📸', title: 'Photo Documentation', desc: 'Before and after photos of every job for your records and insurance.' },
              { icon: '🧹', title: 'Daily Cleanup', desc: 'We clean up every day before we leave. Your yard, your peace of mind.' },
              { icon: '💬', title: 'Direct Communication', desc: 'You get a direct line to your project manager, not a call center.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '2rem', background: 'var(--mom-white)', border: '1px solid var(--mom-gray-200)', borderRadius: '4px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--mom-gray-600)', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── URGENCY CTA ── */}
      <section style={{ background: 'var(--mom-black)', padding: '6rem 2rem', textAlign: 'center' }}>
        <div className="mom-container">
          <div className="mom-section-eyebrow" style={{ color: 'var(--mom-sage-light)', textAlign: 'center' }}>Act Now</div>
          <h2 style={{ fontFamily: 'var(--mom-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--mom-white)', marginBottom: '1rem' }}>
            {cta.headline || 'Get Your Free Estimate Today'}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', marginBottom: '2.5rem', maxWidth: 480, margin: '0 auto 2.5rem' }}>
            {cta.subtext || 'Most estimates delivered within 24 hours. No obligation, no pressure.'}
          </p>
          <Link href={`${basePath}/contact`} className="mom-btn mom-btn--primary">
            {cta.buttonText || 'Request Free Estimate'}
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="mom-footer">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="mom-footer__top">
            <div className="mom-footer__brand">
              <div className="mom-footer__logo">{business.name?.split(' ')[0]}<span> {business.name?.split(' ').slice(1).join(' ')}</span></div>
              <p>{business.tagline}</p>
            </div>
            <div className="mom-footer__col">
              <h4>Navigate</h4>
              <Link href={basePath || '/'}>Home</Link>
              <Link href={`${basePath}/services`}>Services</Link>
              <Link href={`${basePath}/about`}>About</Link>
              <Link href={`${basePath}/contact`}>Contact</Link>
            </div>
            <div className="mom-footer__col">
              <h4>Contact</h4>
              {business.phone && <p>{business.phone}</p>}
              {business.email && <p>{business.email}</p>}
              {business.address && <p>{business.address}</p>}
            </div>
            <div className="mom-footer__col">
              <h4>License</h4>
              <p>Licensed & Bonded</p>
              <p>Fully Insured</p>
              <p>BBB Accredited</p>
            </div>
          </div>
          <div className="mom-footer__bottom">
            <span className="mom-footer__copy">© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
            <span className="mom-footer__license">Contractor Lic. #CR-000000</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
