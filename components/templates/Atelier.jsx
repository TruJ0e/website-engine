'use client';

import Link from 'next/link';
import './atelier.css';

export default function Atelier({ business = {}, basePath = '' }) {
  const services = business.services || [];
  const cta = business.cta || {};
  const story = business.story || {};

  const featured = services[0] || { name: 'Full Interior Design', description: 'Complete design direction for your entire home — from concept board to final installation.', price: 'Starting at $12,000' };
  const rest = services.slice(1, 4);

  return (
    <div className="ate">
      {/* ── NAV ── */}
      <nav className="ate-nav">
        <div className="ate-nav__logo">
          Maison<span> Lune</span>
        </div>
        <ul className="ate-nav__links">
          <li><Link href={`${basePath}/services`}>Work</Link></li>
          <li><Link href={`${basePath}/about`}>Studio</Link></li>
          <li><Link href={`${basePath}/contact`} className="ate-nav__contact">Inquire</Link></li>
        </ul>
      </nav>

      {/* ── MANIFESTO OPENER ── */}
      <section className="ate-hero">
        <div className="ate-hero__monogram" aria-hidden="true">ML</div>
        <div className="ate-hero__left">
          <div className="ate-hero__eyebrow">Interior Design · Art Direction</div>
          <h1 className="ate-hero__headline">
            Every space holds<br /><em>a story</em> worth telling.
          </h1>
          <div className="ate-hero__statement">
            <p>We create interiors that hold meaning.</p>
            <p>Not trends. Not noise. Considered, layered, lasting environments</p>
            <p>built around the way you actually live.</p>
          </div>
          <div className="ate-hero__actions">
            <Link href={`${basePath}/contact`} className="ate-btn ate-btn--primary">
              Begin a Project
            </Link>
            <Link href={`${basePath}/services`} className="ate-btn ate-btn--outline">
              Our Work
            </Link>
          </div>
        </div>
        <div className="ate-hero__right">
          <div className="ate-hero__portrait-placeholder">Photo</div>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section style={{ background: 'var(--ate-cream)', padding: '0' }}>
        <div className="ate-story">
          <div className="ate-section-eyebrow">Our Philosophy</div>
          <p className="ate-story__prose">
            {story.body?.slice(0, story.body.indexOf('.') + 1) || 'Design is not decoration. At Maison Lune, we approach every project as a dialogue — listening first, designing second, always asking what a space needs to become.'}
          </p>
          <blockquote className="ate-story__pullquote">
            "Every space holds a story worth telling — and it's our job to help you tell it."
          </blockquote>
          <p className="ate-story__prose">
            From a single room to an entire estate, we bring the same rigorous attention to proportion, material, and light. Our work doesn't shout. It lingers.
          </p>
        </div>
      </section>

      {/* ── EDITORIAL SERVICES GRID ── */}
      <section className="ate-section" style={{ paddingTop: '3rem' }}>
        <div className="ate-container">
          <div className="ate-section-eyebrow">Selected Services</div>
          <h2 className="ate-section-title">What We Offer</h2>

          <div className="ate-editorial-grid" style={{ marginTop: '3rem' }}>
            <div className="ate-editorial-featured">
              <div className="ate-editorial-featured__img" />
              <div className="ate-editorial-featured__content">
                <div className="ate-editorial-featured__label">Signature Service</div>
                <h3 className="ate-editorial-featured__name">{featured.name}</h3>
                <p className="ate-editorial-featured__desc">{featured.description}</p>
                {featured.price && <div className="ate-editorial-featured__price">{featured.price}</div>}
              </div>
            </div>

            <div className="ate-editorial-rest">
              {(rest.length ? rest : [
                { name: 'Room Curation', description: 'Focused redesign of a single room. Furniture, lighting, textiles, art.', price: 'From $4,500' },
                { name: 'Renovation Consulting', description: 'Design direction for your renovation — materials, layouts, and finishes.', price: 'From $3,000' },
                { name: 'Art & Object Sourcing', description: 'Curated objects, art, and antiques to complete your space.', price: 'By project' },
              ]).map((svc, i) => (
                <div key={i} className="ate-editorial-card">
                  <div className="ate-editorial-card__label">0{i + 2}</div>
                  <h3 className="ate-editorial-card__name">{svc.name}</h3>
                  {svc.price && <div className="ate-editorial-card__price">{svc.price}</div>}
                  <p className="ate-editorial-card__desc">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MINIMAL CTA ── */}
      <section style={{ padding: '8rem 2rem', textAlign: 'center', borderTop: '1px solid var(--ate-gray-200)' }}>
        <div className="ate-container" style={{ maxWidth: 560 }}>
          <div className="ate-section-eyebrow" style={{ textAlign: 'center' }}>Start Here</div>
          <h2 style={{ fontFamily: 'var(--ate-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, marginBottom: '1rem', lineHeight: 1.15 }}>
            {cta.headline || 'Let's Talk About Your Space'}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--ate-gray-600)', marginBottom: '2.5rem', fontWeight: 300, lineHeight: 1.7 }}>
            {cta.subtext || 'We take on a limited number of projects each year. Inquire early.'}
          </p>
          <Link href={`${basePath}/contact`} className="ate-btn ate-btn--outline">
            Send an Inquiry
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ate-footer">
        <div className="ate-footer__inner">
          <div className="ate-footer__brand">
            <div className="ate-footer__logo">Maison<span> Lune</span></div>
            <p>Interior design & art direction for homes that mean something.</p>
          </div>
          <div className="ate-footer__col">
            <h4>Studio</h4>
            <Link href={basePath || '/'}>Home</Link>
            <Link href={`${basePath}/services`}>Work</Link>
            <Link href={`${basePath}/about`}>About</Link>
            <Link href={`${basePath}/contact`}>Contact</Link>
          </div>
          <div className="ate-footer__col">
            <h4>Contact</h4>
            {business.phone && <p>{business.phone}</p>}
            {business.email && <p>{business.email}</p>}
            {business.address && <p>{business.address}</p>}
          </div>
        </div>
        <div className="ate-footer__bottom">
          <span className="ate-footer__copy">© {new Date().getFullYear()} Maison Lune. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
