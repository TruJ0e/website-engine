'use client';

import Link from 'next/link';
import './momentum.css';

export default function Momentum({ business = {}, basePath = '' }) {
  const stats = business.stats || {};
  const testimonials = business.testimonials || [];
  const services = (business.services || []).slice(0, 3);
  const cta = business.cta || {};
  const story = business.story || {};

  // Duplicate testimonials for marquee effect
  const marqueeItems = [...(testimonials.length ? testimonials : [
    { name: 'Kevin M.', location: 'Denver, CO', rating: 5, text: 'Best roofing crew I've ever worked with. Done in two days, zero mess left behind.' },
    { name: 'Sarah P.', location: 'Boulder, CO', rating: 5, text: 'Transparent pricing and they showed up exactly when they said they would. A+.' },
    { name: 'Dan W.', location: 'Arvada, CO', rating: 5, text: 'Our roof survived the last hail storm while our neighbor\'s didn\'t. Worth every penny.' },
    { name: 'Lisa R.', location: 'Lakewood, CO', rating: 5, text: 'Professional from quote to cleanup. My roof looks incredible.' },
  ]), ...(testimonials.length ? testimonials : [
    { name: 'Kevin M.', location: 'Denver, CO', rating: 5, text: 'Best roofing crew I've ever worked with. Done in two days, zero mess left behind.' },
    { name: 'Sarah P.', location: 'Boulder, CO', rating: 5, text: 'Transparent pricing and they showed up exactly when they said they would. A+.' },
    { name: 'Dan W.', location: 'Arvada, CO', rating: 5, text: 'Our roof survived the last hail storm while our neighbor\'s didn\'t. Worth every penny.' },
    { name: 'Lisa R.', location: 'Lakewood, CO', rating: 5, text: 'Professional from quote to cleanup. My roof looks incredible.' },
  ])];

  const initials = (name = '') => name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="mom">
      {/* ── NAV ── */}
      <nav className="mom-nav">
        <div className="mom-nav__logo">
          {business.name?.split(' ')[0]}
          <span> {business.name?.split(' ').slice(1).join(' ')}</span>
        </div>
        <ul className="mom-nav__links">
          <li><Link href={`${basePath}/services`}>Services</Link></li>
          <li><Link href={`${basePath}/about`}>About</Link></li>
          <li><Link href={`${basePath}/contact`} className="mom-nav__cta">Free Estimate</Link></li>
        </ul>
      </nav>

      {/* ── MANIFESTO HERO ── */}
      <section className="mom-hero">
        <div className="mom-hero__monogram" aria-hidden="true">
          {(business.name || '').split(' ').map(w => w[0]).join('').slice(0, 2)}
        </div>
        <div className="mom-hero__left">
          <div className="mom-hero__eyebrow">Licensed · Bonded · Insured</div>
          <h1 className="mom-hero__headline">
            {story.headline || `${business.name || 'Expert Roofing'} You Can Trust`}
          </h1>
          <div className="mom-hero__statement">
            <p>Built on precision. Backed by a warranty. Proven across hundreds of roofs.</p>
            <p>We show up, we do the work, and we leave your property cleaner than we found it.</p>
            <p>That's the {business.name?.split(' ')[0] || 'Ridgeline'} promise.</p>
          </div>
          <div className="mom-hero__actions">
            <Link href={`${basePath}/contact`} className="mom-btn mom-btn--primary">
              {cta.buttonText || 'Get Free Estimate'}
            </Link>
            <Link href={`${basePath}/services`} className="mom-btn mom-btn--outline">
              Our Services
            </Link>
          </div>
        </div>
        <div className="mom-hero__right">
          <div className="mom-hero__portrait-placeholder">Photo</div>
        </div>
      </section>

      {/* ── PROOF CAROUSEL ── */}
      <div className="mom-proof">
        <div className="mom-proof__label">What Our Clients Say</div>
        <div className="mom-proof__track-wrapper">
          <div className="mom-proof__track">
            {marqueeItems.map((t, i) => (
              <div key={i} className="mom-proof-card">
                <div className="mom-proof-card__stars">{'★'.repeat(t.rating || 5)}</div>
                <p className="mom-proof-card__text">"{t.text}"</p>
                <div className="mom-proof-card__author">{t.name}</div>
                <div className="mom-proof-card__location">{t.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES PREVIEW ── */}
      <section className="mom-section" style={{ background: 'var(--mom-bg)' }}>
        <div className="mom-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <div className="mom-section-eyebrow">What We Do</div>
              <h2 className="mom-section-title">Services Built for Your Home</h2>
              <p className="mom-section-sub">
                From full replacements to inspections and emergency repairs, we handle it all with the same level of care and precision.
              </p>
              <Link href={`${basePath}/services`} className="mom-btn mom-btn--outline" style={{ marginTop: '2rem' }}>
                All Services →
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {(services.length ? services : [
                { name: 'Roof Replacement', description: 'Full tear-off and installation using top-rated shingles. 30-year warranty standard.', price: 'From $8,500' },
                { name: 'Storm Damage Repair', description: 'Fast response for hail and wind damage. Insurance claim assistance included.', price: 'Free Inspection' },
                { name: 'Gutters & Siding', description: 'Complete exterior protection from fascia to foundation. One crew, one call.', price: 'From $2,200' },
              ]).map((svc, i) => (
                <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--mom-gray-200)', borderRadius: '4px', background: 'var(--mom-white)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <strong style={{ fontSize: '1rem' }}>{svc.name}</strong>
                    {svc.price && <span style={{ fontSize: '0.8rem', color: 'var(--mom-sage)', fontWeight: 600 }}>{svc.price}</span>}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--mom-gray-600)', lineHeight: 1.7 }}>{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: 'var(--mom-black)', padding: '6rem 2rem', textAlign: 'center' }}>
        <div className="mom-container">
          <div className="mom-section-eyebrow" style={{ color: 'var(--mom-sage-light)' }}>Act Now</div>
          <h2 style={{ fontFamily: 'var(--mom-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--mom-white)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            {cta.headline || 'Free Roof Inspection — Today'}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', marginBottom: '2.5rem', maxWidth: 480, margin: '0 auto 2.5rem' }}>
            {cta.subtext || 'No obligation. Most estimates delivered within 24 hours.'}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`${basePath}/contact`} className="mom-btn mom-btn--primary">
              {cta.buttonText || 'Get Free Estimate'}
            </Link>
            {business.phone && (
              <a href={`tel:${business.phone}`} className="mom-btn mom-btn--outline-sage">
                Call {business.phone}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="mom-footer">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="mom-footer__top">
            <div className="mom-footer__brand">
              <div className="mom-footer__logo">
                {business.name?.split(' ')[0]}
                <span> {business.name?.split(' ').slice(1).join(' ')}</span>
              </div>
              <p>{business.tagline || 'Quality roofing done right the first time.'}</p>
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
