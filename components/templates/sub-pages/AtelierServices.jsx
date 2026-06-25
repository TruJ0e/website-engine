'use client';

import Link from 'next/link';
import '../atelier.css';

export default function AtelierServices({ business = {}, basePath = '' }) {
  const services = business.services || [];
  const cta = business.cta || {};

  const defaultServices = [
    { name: 'Full Interior Design', description: 'Complete design direction for your home. From concept and mood boards through furniture selection, art sourcing, and final installation. We manage every detail so you don\'t have to.', price: 'Starting at $12,000', duration: '3–6 months' },
    { name: 'Room Curation', description: 'Focused redesign of a single room. We address proportion, light, material, and object placement to create a space that feels intentional and finished.', price: 'From $4,500', duration: '4–8 weeks' },
    { name: 'Renovation Consulting', description: 'Design direction for clients already working with builders or architects. We specify finishes, materials, and layouts — and translate your vision into actionable decisions.', price: 'From $3,000', duration: '2–6 weeks' },
    { name: 'Art & Object Sourcing', description: 'We find the pieces that complete a room — from vintage dealers and galleries to emerging artists and artisan makers. Each object is selected with your space in mind.', price: 'By project', duration: 'Ongoing' },
    { name: 'Color & Material Direction', description: 'A one-day intensive to define the palette, textures, and material logic for your home. Delivered as a physical sample board and digital presentation.', price: '$1,800', duration: '1–2 weeks' },
  ];

  const displayed = services.length ? services : defaultServices;

  return (
    <div className="ate">
      {/* ── NAV ── */}
      <nav className="ate-nav">
        <div className="ate-nav__logo">
          <Link href={basePath || '/'}>Maison<span> Lune</span></Link>
        </div>
        <ul className="ate-nav__links">
          <li><Link href={`${basePath}/services`}>Work</Link></li>
          <li><Link href={`${basePath}/about`}>Studio</Link></li>
          <li><Link href={`${basePath}/contact`} className="ate-nav__contact">Inquire</Link></li>
        </ul>
      </nav>

      {/* ── PAGE HEADER ── */}
      <section style={{ paddingTop: '9rem', paddingBottom: '5rem', paddingLeft: '4rem', paddingRight: '4rem', borderBottom: '1px solid var(--ate-gray-200)' }}>
        <div className="ate-section-eyebrow">What We Do</div>
        <h1 style={{ fontFamily: 'var(--ate-serif)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 300, lineHeight: 1.05, maxWidth: 700 }}>
          Our Services
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--ate-gray-600)', marginTop: '1.5rem', maxWidth: 480, lineHeight: 1.85, fontWeight: 300 }}>
          We take on a limited number of projects each year to ensure every client receives our full attention.
        </p>
      </section>

      {/* ── MAGAZINE LAYOUT ── */}
      <div className="ate-magazine-service">
        {displayed.map((svc, i) => (
          <div key={i} className="ate-mag-section">
            <div className="ate-mag-section__img" style={{
              background: `hsl(${90 + i * 15}, ${10 + i * 3}%, ${80 - i * 5}%)`,
            }} />
            <div className="ate-mag-section__content">
              <div className="ate-mag-section__num">0{i + 1} / {String(displayed.length).padStart(2, '0')}</div>
              <h2 className="ate-mag-section__name">{svc.name}</h2>
              {svc.price && <div className="ate-mag-section__price">{svc.price}</div>}
              <p className="ate-mag-section__desc">{svc.description}</p>
              <Link href={`${basePath}/contact`} className="ate-btn ate-btn--outline">
                Inquire About This Service
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ── MINIMAL CTA ── */}
      <section style={{ padding: '8rem 4rem', textAlign: 'center', borderTop: '1px solid var(--ate-gray-200)' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <div className="ate-section-eyebrow" style={{ textAlign: 'center' }}>Begin Here</div>
          <h2 style={{ fontFamily: 'var(--ate-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, marginBottom: '1rem', lineHeight: 1.15 }}>
            {cta.headline || 'Every Project Starts with a Conversation'}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--ate-gray-600)', marginBottom: '2.5rem', fontWeight: 300, lineHeight: 1.7 }}>
            {cta.subtext || 'Tell us about your space and what you\'re hoping to achieve. We\'ll respond within two business days.'}
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
