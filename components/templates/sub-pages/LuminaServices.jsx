'use client';

import Link from 'next/link';
import '../lumina.css';

export default function LuminaServices({ business = {}, basePath = '' }) {
  const services = business.services || [];
  const stats = business.stats || {};
  const cta = business.cta || {};

  return (
    <div className="lum">
      {/* ── NAV ── */}
      <nav className="lum-nav">
        <div className="lum-nav__logo">
          <Link href={basePath || '/'}>
            {business.name?.split(' ')[0]}
            <span> {business.name?.split(' ').slice(1).join(' ')}</span>
          </Link>
        </div>
        <ul className="lum-nav__links">
          <li><Link href={`${basePath}/services`}>Services</Link></li>
          <li><Link href={`${basePath}/about`}>About</Link></li>
          <li><Link href={`${basePath}/contact`} className="lum-nav__cta">Get a Quote</Link></li>
        </ul>
      </nav>

      {/* ── PAGE HEADER ── */}
      <section style={{ position: 'relative', paddingTop: '10rem', paddingBottom: '5rem', overflow: 'hidden' }}>
        <div className="lum-aurora" />
        <div className="lum-container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'var(--lum-mono)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--lum-purple)', marginBottom: '1rem' }}>
            What We Offer
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Our Services
          </h1>
          <p style={{ color: 'var(--lum-gray-400)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 520 }}>
            Every package engineered for protection, shine, and longevity.
          </p>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="lum-trust">
        <div className="lum-trust__inner">
          {[
            { number: `${stats.reviewCount || 500}+`, label: 'Reviews' },
            { number: `${stats.yearsInBusiness || 8}`, label: 'Years' },
            { number: `${stats.projectsCompleted || 1200}+`, label: 'Cars' },
            { number: `${stats.rating || 4.9}★`, label: 'Rating' },
          ].map((b, i) => (
            <div key={i} className="lum-trust__badge">
              <span className="lum-trust__number">{b.number}</span>
              <span className="lum-trust__label">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── HORIZONTAL SCROLL RAIL ── */}
      <section style={{ background: 'var(--lum-dark)', paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="lum-container" style={{ marginBottom: '1.5rem' }}>
          <div className="lum-section-eyebrow">Scroll to Explore</div>
          <h2 className="lum-section-title">Service Packages</h2>
        </div>
        <div className="lum-sticky-rail">
          {(services.length ? services : [
            { name: 'Express Detail', duration: '90 min', price: '$149', description: 'Interior vacuum, exterior wash, windows, tire dressing. The essentials done right.' },
            { name: 'Full Detail', duration: '4–5 hrs', price: '$299', description: 'Complete interior deep-clean, clay bar, hand wax, and engine bay wipe-down.' },
            { name: 'Paint Correction', duration: '1–2 days', price: '$799', description: 'Single or two-stage polish to remove swirls, scratches, and oxidation.' },
            { name: 'Ceramic Coating', duration: '2–3 days', price: '$1,299+', description: '5-year professional-grade ceramic coating with paint decontamination prep.' },
          ]).map((svc, i) => (
            <div key={i} className="lum-rail-card">
              <div className="lum-rail-card__num">0{i + 1}</div>
              <div className="lum-rail-card__name">{svc.name}</div>
              {svc.duration && <div className="lum-rail-card__duration">⏱ {svc.duration}</div>}
              {svc.price && <div className="lum-rail-card__price">{svc.price}</div>}
              <p className="lum-rail-card__desc">{svc.description}</p>
              <Link href={`${basePath}/contact`} className="lum-btn lum-btn--primary" style={{ width: '100%', textAlign: 'center' }}>
                Book Now →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── ADD-ONS GLASS GRID ── */}
      <section className="lum-section" style={{ background: 'var(--lum-black)' }}>
        <div className="lum-container">
          <div className="lum-section-eyebrow">Enhancements</div>
          <h2 className="lum-section-title">Add-On Services</h2>
          <p className="lum-section-sub">Layer on extra protection or convenience to any package.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '3rem' }}>
            {[
              { icon: '🛡', name: 'Paint Protection Film', desc: 'High-gloss PPF on bumpers, hood, mirrors.' },
              { icon: '✦', name: 'Interior Ozone Treatment', desc: 'Eliminate odors at the molecular level.' },
              { icon: '◈', name: 'Headlight Restoration', desc: 'Cloudy lenses polished back to clarity.' },
              { icon: '◉', name: 'Engine Bay Detailing', desc: 'Full degreasing, wipe-down, and dressing.' },
              { icon: '⟐', name: 'Leather Conditioning', desc: 'Deep condition and protection for all leather.' },
              { icon: '◆', name: 'Mobile Detailing', desc: 'We come to you. Home or office.' },
            ].map((a, i) => (
              <div key={i} className="lum-glass-card" style={{ padding: '1.75rem' }}>
                <div className="lum-glass-card__icon">{a.icon}</div>
                <div className="lum-glass-card__name" style={{ fontSize: '1rem' }}>{a.name}</div>
                <p className="lum-glass-card__desc" style={{ fontSize: '0.82rem' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPLIT CTA ── */}
      <div className="lum-split-cta">
        <div className="lum-split-cta__left">
          <div style={{ maxWidth: '480px' }}>
            <div className="lum-section-eyebrow">Questions?</div>
            <h2 className="lum-split-cta__headline">Not Sure Which Package Is Right?</h2>
            <p className="lum-split-cta__sub">Call us and we'll walk you through the best option for your car and budget.</p>
          </div>
        </div>
        <div className="lum-split-cta__right">
          <h2 className="lum-split-cta__headline">Book Your Detail</h2>
          <p className="lum-split-cta__sub">Online booking. Quick turnaround. Guaranteed results.</p>
          <Link href={`${basePath}/contact`} className="lum-btn lum-btn--white">
            Book Now →
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
          <span className="lum-footer__copy">© {new Date().getFullYear()} {business.name}</span>
        </div>
      </footer>
    </div>
  );
}
