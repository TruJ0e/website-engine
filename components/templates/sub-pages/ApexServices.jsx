'use client';

import Link from 'next/link';
import '../apex.css';

export default function ApexServices({ business = {}, basePath = '' }) {
  const services = business.services || [];
  const stats = business.stats || {};
  const cta = business.cta || {};

  return (
    <div className="apex">
      {/* ── NAV ── */}
      <nav className="apex-nav">
        <div className="apex-nav__inner">
          <Link href={basePath || '/'} className="apex-nav__logo">
            {business.name?.split(' ')[0]}
            <span>{business.name?.split(' ').slice(1).join(' ')}</span>
          </Link>
          <ul className="apex-nav__links">
            <li><Link href={`${basePath}/services`}>Services</Link></li>
            <li><Link href={`${basePath}/about`}>About</Link></li>
            <li><Link href={`${basePath}/contact`} className="apex-nav__cta">Get Started</Link></li>
          </ul>
        </div>
      </nav>

      {/* ── PAGE HERO ── */}
      <section className="apex-hero" style={{ minHeight: '50vh' }}>
        <div className="apex-hero__bg" />
        <div className="apex-hero__grid" />
        <div className="apex-hero__content" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
          <div className="apex-hero__eyebrow">What We Offer</div>
          <h1 className="apex-hero__headline" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Our <em>Services</em>
          </h1>
          <p className="apex-hero__sub">
            Every service is delivered with precision and backed by a satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* ── STAT BAR ── */}
      <section className="apex-stats">
        <div className="apex-container">
          <div className="apex-stats__grid">
            {[
              { number: `${stats.projectsCompleted || 500}+`, label: 'Projects Completed' },
              { number: `${stats.yearsInBusiness || 10}+`, label: 'Years Experience' },
              { number: `${stats.rating || 4.9}/5`, label: 'Client Rating' },
              { number: `${stats.reviewCount || 200}+`, label: 'Reviews' },
            ].map((s, i) => (
              <div key={i} className="apex-stat">
                <span className="apex-stat__number">{s.number}</span>
                <span className="apex-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ padding: '7rem 0', background: 'var(--apex-black)' }}>
        <div className="apex-container">
          <div className="apex-section-header">
            <div className="apex-section-eyebrow">Full Service Menu</div>
            <h2 className="apex-section-title">Everything We Do</h2>
            <p className="apex-section-subtitle">
              Browse our complete range of services. Every engagement starts with a free consultation.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.5rem',
          }}>
            {services.length ? services.map((svc, i) => (
              <div key={i} className="apex-proof__card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--apex-accent)',
                  marginBottom: '0.75rem',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{
                  fontFamily: 'var(--apex-font-display)',
                  fontSize: '1.4rem',
                  color: 'var(--apex-white)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3,
                }}>
                  {svc.name}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--apex-gray-400)',
                  lineHeight: 1.75,
                  flex: 1,
                  marginBottom: '1.5rem',
                }}>
                  {svc.description}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--apex-border)',
                  paddingTop: '1rem',
                }}>
                  {svc.price && (
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--apex-accent)', letterSpacing: '0.05em' }}>
                      From {svc.price}
                    </span>
                  )}
                  {svc.duration && (
                    <span style={{ fontSize: '0.8rem', color: 'var(--apex-gray-400)' }}>
                      {svc.duration}
                    </span>
                  )}
                </div>
              </div>
            )) : (
              <div style={{ color: 'var(--apex-gray-400)', gridColumn: '1/-1' }}>
                No services listed yet.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── PROCESS STRIP ── */}
      <section style={{ padding: '7rem 0', background: 'var(--apex-gray-100)', borderTop: '1px solid var(--apex-border)' }}>
        <div className="apex-container">
          <div className="apex-section-header" style={{ textAlign: 'center', margin: '0 auto 4rem' }}>
            <div className="apex-section-eyebrow">How It Works</div>
            <h2 className="apex-section-title" style={{ margin: '0 auto' }}>Our Simple Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { step: '01', title: 'Free Consultation', desc: 'We listen to your goals, assess your project, and answer every question — no pressure, no cost.' },
              { step: '02', title: 'Custom Quote', desc: 'Receive a detailed, transparent estimate within 24 hours. No hidden fees, ever.' },
              { step: '03', title: 'We Get to Work', desc: 'Our team arrives on time, communicates clearly, and treats your property with respect.' },
              { step: '04', title: 'You Love It', desc: 'Final walkthrough with you to ensure every detail meets your expectations before we call it done.' },
            ].map((p, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--apex-font-display)',
                  fontSize: '3rem',
                  color: 'var(--apex-border)',
                  marginBottom: '1rem',
                  lineHeight: 1,
                }}>
                  {p.step}
                </div>
                <h3 style={{
                  fontFamily: 'var(--apex-font-display)',
                  fontSize: '1.1rem',
                  color: 'var(--apex-white)',
                  marginBottom: '0.75rem',
                }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--apex-gray-400)', lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="apex-cta">
        <div className="apex-cta__bg" />
        <div className="apex-cta__border" />
        <div className="apex-container">
          <div className="apex-cta__inner">
            <h2 className="apex-cta__headline">{cta.headline || 'Ready to Get Started?'}</h2>
            <p className="apex-cta__subtext">{cta.subtext || 'Request a free quote today. We respond within 2 hours.'}</p>
            <div className="apex-cta__actions">
              <Link href={`${basePath}/contact`} className="apex-btn--primary">
                {cta.buttonText || 'Get a Free Quote'} →
              </Link>
              {business.phone && (
                <a href={`tel:${business.phone}`} className="apex-btn--ghost">Call {business.phone}</a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="apex-footer">
        <div className="apex-container">
          <div className="apex-footer__bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
            <span className="apex-footer__copy">
              © {new Date().getFullYear()} {business.name}. All rights reserved.
            </span>
            <ul className="apex-footer__legal">
              <li><Link href={basePath || '/'}>Home</Link></li>
              <li><Link href={`${basePath}/contact`}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
