'use client';

import Link from 'next/link';
import './kinetic.css';

export default function Kinetic({ business = {}, basePath = '' }) {
  const services = (business.services || []).slice(0, 3);
  const portfolio = business.portfolio || [
    'Black & Grey Realism', 'Neo Traditional', 'Fine Line', 'Watercolor', 'Geometric', 'Cover-Up Work',
  ];
  const cta = business.cta || {};

  return (
    <div className="kin">
      {/* ── NAV ── */}
      <nav className="kin-nav">
        <div className="kin-nav__logo">
          {business.name?.split(' ')[0]}
          <span>{business.name?.split(' ').slice(1, 2).join('')}</span>
        </div>
        <ul className="kin-nav__links">
          <li><Link href={`${basePath}/services`}>Services</Link></li>
          <li><Link href={`${basePath}/about`}>Artists</Link></li>
          <li><Link href={`${basePath}/contact`} className="kin-nav__cta">Book Now</Link></li>
        </ul>
      </nav>

      {/* ── KINETIC HERO ── */}
      <section className="kin-hero">
        <div className="kin-hero__content">
          <h1 className="kin-hero__headline">
            INK<br />
            YOUR <em>STORY</em>
          </h1>
          <p className="kin-hero__sub">
            {business.tagline || 'Bold. Precise. Permanent. Our artists bring your vision to life.'}
          </p>
          <div className="kin-hero__actions">
            <Link href={`${basePath}/contact`} className="kin-btn kin-btn--primary">
              Book a Consultation
            </Link>
            <Link href={`${basePath}/services`} className="kin-btn kin-btn--outline">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURE GRID ── */}
      <section className="kin-feature-grid">
        {(services.length ? services : [
          { name: 'Custom Tattoos', description: 'Original artwork designed exclusively for you. No flash, no compromises.' },
          { name: 'Cover-Up Work', description: 'Transform unwanted ink into something you love. We specialize in the impossible.' },
          { name: 'Touch-Ups & Finishes', description: 'Bring old work back to life. Color corrections, sharpening, and fine detail passes.' },
        ]).map((svc, i) => (
          <div key={i} className="kin-feature-card">
            <div className="kin-feature-card__num">0{i + 1}</div>
            <h3 className="kin-feature-card__title">{svc.name}</h3>
            <p className="kin-feature-card__desc">{svc.description}</p>
          </div>
        ))}
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section className="kin-portfolio">
        <div className="kin-portfolio-header">
          <h2>Our Work</h2>
          <p>A selection from the collective's portfolio.</p>
        </div>
        <div className="kin-portfolio-grid">
          {portfolio.map((title, i) => (
            <div key={i} className="kin-portfolio-item">
              <div className="kin-portfolio-thumb" style={{
                background: `hsl(${i * 37}, 12%, ${18 + i * 4}%)`,
              }} />
              <div className="kin-portfolio-overlay">
                <span>{title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MINIMAL CTA ── */}
      <section className="kin-minimal-cta">
        <h2>{cta.headline || 'Ready to Get Inked?'}</h2>
        <p>{cta.subtext || 'Consultations are free. Walk-ins welcome. Call ahead to secure your slot.'}</p>
        <Link href={`${basePath}/contact`} className="kin-btn--outline-red">
          Book Your Session
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
          <span className="kin-footer__copy">
            © {new Date().getFullYear()} {business.name}
          </span>
        </div>
      </footer>
    </div>
  );
}
