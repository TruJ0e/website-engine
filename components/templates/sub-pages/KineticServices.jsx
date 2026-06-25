'use client';

import Link from 'next/link';
import '../kinetic.css';

export default function KineticServices({ business = {}, basePath = '' }) {
  const services = business.services || [];

  const defaultServices = [
    { name: 'Custom Tattoo', icon: '✦', description: 'Original artwork designed exclusively for you. We spend as much time on the design as we do on the application.', price: 'From $200/hr' },
    { name: 'Cover-Up Work', icon: '◈', description: 'Turn regret into something you love. We specialize in difficult cover-ups most artists won\'t touch.', price: 'From $250/hr' },
    { name: 'Fine Line & Micro', icon: '⬡', description: 'Delicate single-needle work. Portraits, botanicals, geometric — precision is our specialty.', price: 'From $200/hr' },
    { name: 'Black & Grey Realism', icon: '◉', description: 'Photorealistic portraiture and detailed scenes. Technique that takes years to master.', price: 'From $250/hr' },
    { name: 'Neo Traditional', icon: '⟐', description: 'Bold lines, rich color, and classic motifs updated for a modern aesthetic.', price: 'From $200/hr' },
    { name: 'Watercolor', icon: '◆', description: 'Flowing pigment, no outlines. Looks like paint on skin. Rare and beautiful.', price: 'From $220/hr' },
  ];

  const displayed = services.length ? services.map((s, i) => ({ ...s, icon: defaultServices[i % defaultServices.length].icon })) : defaultServices;

  return (
    <div className="kin">
      {/* ── NAV ── */}
      <nav className="kin-nav">
        <div className="kin-nav__logo">
          <Link href={basePath || '/'}>
            {business.name?.split(' ')[0]}
            <span>{business.name?.split(' ').slice(1, 2).join('')}</span>
          </Link>
        </div>
        <ul className="kin-nav__links">
          <li><Link href={`${basePath}/services`}>Services</Link></li>
          <li><Link href={`${basePath}/about`}>Artists</Link></li>
          <li><Link href={`${basePath}/contact`} className="kin-nav__cta">Book Now</Link></li>
        </ul>
      </nav>

      {/* ── PAGE HEADER ── */}
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', paddingLeft: '3rem', paddingRight: '3rem', borderBottom: '1px solid var(--kin-gray-200)' }}>
        <div style={{ fontFamily: 'var(--kin-display)', fontSize: '0.85rem', letterSpacing: '0.2em', color: 'var(--kin-red)', marginBottom: '1rem' }}>
          WHAT WE DO
        </div>
        <h1 style={{ fontFamily: 'var(--kin-display)', fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: 0.9, letterSpacing: '-0.01em' }}>
          OUR<br /><span style={{ color: 'var(--kin-red)' }}>SERVICES</span>
        </h1>
      </section>

      {/* ── SERVICES GRID ── */}
      <div className="kin-services-grid">
        {displayed.map((svc, i) => (
          <div key={i} className="kin-service-card">
            <div className="kin-service-card__icon">{svc.icon}</div>
            <div className="kin-service-card__num">0{i + 1}</div>
            <div className="kin-service-card__name">{svc.name}</div>
            {svc.price && <div className="kin-service-card__price">{svc.price}</div>}
            <p className="kin-service-card__desc">{svc.description}</p>
            <Link href={`${basePath}/contact`} className="kin-btn kin-btn--primary" style={{ display: 'inline-block', fontSize: '0.75rem' }}>
              Book This →
            </Link>
          </div>
        ))}
      </div>

      {/* ── PROCESS STRIP ── */}
      <section style={{ padding: '6rem 3rem', background: 'var(--kin-black)', color: 'var(--kin-white)' }}>
        <h2 style={{ fontFamily: 'var(--kin-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--kin-white)', marginBottom: '3rem' }}>
          HOW IT <span style={{ color: 'var(--kin-red)' }}>WORKS</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {[
            { step: '01', title: 'Consultation', desc: 'Free 30-minute consultation. Tell us your vision. We ask the right questions.' },
            { step: '02', title: 'Design', desc: 'We create a custom design. You approve it before we touch skin.' },
            { step: '03', title: 'Application', desc: 'Executed with precision, at a pace that respects the craft.' },
            { step: '04', title: 'Aftercare', desc: 'We walk you through aftercare and check in until you\'re fully healed.' },
          ].map((p, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--kin-display)', fontSize: '3rem', color: 'var(--kin-red)', lineHeight: 1, marginBottom: '1rem' }}>{p.step}</div>
              <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem' }}>{p.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MINIMAL CTA ── */}
      <section className="kin-minimal-cta">
        <h2>Ready to Book?</h2>
        <p>Consultations are free. Walk-ins welcome when available.</p>
        <Link href={`${basePath}/contact`} className="kin-btn--outline-red">
          Schedule a Consultation
        </Link>
      </section>

      {/* ── FOOTER ── */}
      <footer className="kin-footer">
        <div className="kin-footer__inner">
          <div className="kin-footer__logo">
            {business.name?.split(' ')[0]}
            <span> {business.name?.split(' ').slice(1).join(' ')}</span>
          </div>
          <ul className="kin-footer__links">
            <li><Link href={basePath || '/'}>Home</Link></li>
            <li><Link href={`${basePath}/services`}>Services</Link></li>
            <li><Link href={`${basePath}/about`}>Artists</Link></li>
            <li><Link href={`${basePath}/contact`}>Book</Link></li>
          </ul>
          <span className="kin-footer__copy">© {new Date().getFullYear()} {business.name}</span>
        </div>
      </footer>
    </div>
  );
}
