'use client';

import Link from 'next/link';
import './lumina.css';

const Initials = ({ name = '' }) =>
  name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

export default function Lumina({ business = {}, basePath = '' }) {
  const stats = business.stats || {};
  const services = (business.services || []).slice(0, 6);
  const cta = business.cta || {};

  const icons = ['✦', '◈', '⬡', '◉', '⟐', '◆'];

  return (
    <div className="lum">
      {/* ── NAV ── */}
      <nav className="lum-nav">
        <div className="lum-nav__logo">
          {business.name?.split(' ')[0]}
          <span> {business.name?.split(' ').slice(1).join(' ')}</span>
        </div>
        <ul className="lum-nav__links">
          <li><Link href={`${basePath}/services`}>Services</Link></li>
          <li><Link href={`${basePath}/about`}>About</Link></li>
          <li><Link href={`${basePath}/contact`} className="lum-nav__cta">Get a Quote</Link></li>
        </ul>
      </nav>

      {/* ── GLASS HERO ── */}
      <section className="lum-hero">
        <div className="lum-aurora" />
        <div className="lum-hero__card">
          <div className="lum-hero__eyebrow">Premium Auto Detailing</div>
          <h1 className="lum-hero__name">{business.name}</h1>
          <p className="lum-hero__tagline">{business.tagline}</p>
          <a href={`tel:${business.phone}`} className="lum-hero__phone">
            {business.phone}
          </a>
          <div className="lum-hero__actions">
            <Link href={`${basePath}/contact`} className="lum-btn lum-btn--primary">
              {cta.buttonText || 'Get a Quote'} →
            </Link>
            <Link href={`${basePath}/services`} className="lum-btn lum-btn--ghost">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="lum-trust">
        <div className="lum-trust__inner">
          {[
            { number: `${stats.reviewCount || 500}+`, label: 'Reviews' },
            { number: `${stats.yearsInBusiness || 8}`, label: 'Years Experience' },
            { number: `${stats.projectsCompleted || 1200}+`, label: 'Cars Detailed' },
            { number: `${stats.rating || 4.9}★`, label: 'Average Rating' },
          ].map((b, i) => (
            <div key={i} className="lum-trust__badge">
              <span className="lum-trust__number">{b.number}</span>
              <span className="lum-trust__label">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── GLASS SERVICES GRID ── */}
      <section className="lum-section" style={{ background: 'var(--lum-dark)' }}>
        <div className="lum-container">
          <div className="lum-section-eyebrow">What We Offer</div>
          <h2 className="lum-section-title">Premium Services</h2>
          <p className="lum-section-sub">Every detail matters. Our packages are built for those who demand the best.</p>

          <div className="lum-services-grid">
            {services.map((svc, i) => (
              <div key={i} className="lum-glass-card">
                <div className="lum-glass-card__icon">{icons[i % icons.length]}</div>
                <div className="lum-glass-card__name">{svc.name}</div>
                {svc.price && <div className="lum-glass-card__price">From {svc.price}</div>}
                <p className="lum-glass-card__desc">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPLIT CTA BANNER ── */}
      <div className="lum-split-cta">
        <div className="lum-split-cta__left">
          <div style={{ maxWidth: '480px' }}>
            <div className="lum-section-eyebrow">Ready to Shine?</div>
            <h2 className="lum-split-cta__headline">{cta.headline || 'Your Car Deserves the Best'}</h2>
            <p className="lum-split-cta__sub">{cta.subtext || 'Professional detailing that protects your investment and turns heads.'}</p>
          </div>
        </div>
        <div className="lum-split-cta__right">
          <h2 className="lum-split-cta__headline">Book Your Detail</h2>
          <p className="lum-split-cta__sub">Online booking available. Most appointments within 48 hours.</p>
          <Link href={`${basePath}/contact`} className="lum-btn lum-btn--white">
            Schedule Now →
          </Link>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="lum-footer">
        <div className="lum-footer__inner">
          <div className="lum-footer__logo">
            {business.name?.split(' ')[0]}
            <span> {business.name?.split(' ').slice(1).join(' ')}</span>
          </div>
          <ul className="lum-footer__links">
            <li><Link href={basePath || '/'}>Home</Link></li>
            <li><Link href={`${basePath}/services`}>Services</Link></li>
            <li><Link href={`${basePath}/about`}>About</Link></li>
            <li><Link href={`${basePath}/contact`}>Contact</Link></li>
          </ul>
          <span className="lum-footer__copy">
            © {new Date().getFullYear()} {business.name}
          </span>
        </div>
      </footer>
    </div>
  );
}
