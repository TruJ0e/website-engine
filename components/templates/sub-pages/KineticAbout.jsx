'use client';

import Link from 'next/link';
import '../kinetic.css';

export default function KineticAbout({ business = {}, basePath = '' }) {
  const team = business.team || [];
  const story = business.story || {};

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
          THE COLLECTIVE
        </div>
        <h1 style={{ fontFamily: 'var(--kin-display)', fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: 0.9 }}>
          OUR<br /><span style={{ color: 'var(--kin-red)' }}>ARTISTS</span>
        </h1>
      </section>

      {/* ── STORY SECTION 1 ── */}
      <section className="kin-about-section">
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'var(--kin-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
            {story.headline || `The Story Behind ${business.name}`}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--kin-gray-600)', lineHeight: 1.8, maxWidth: 640 }}>
            {story.body || `${business.name} was founded on one principle: tattoos are permanent, so everything we do has to be worth keeping. We don't chase trends. We don't rush. We build relationships with clients that last as long as the ink.`}
          </p>
        </div>
      </section>

      {/* ── PHOTO INTERLUDE 1 ── */}
      <div className="kin-about-interlude">
        <div className="kin-about-interlude__label">The Studio</div>
      </div>

      {/* ── STORY SECTION 2 ── */}
      <section className="kin-about-section kin-about-section--dark">
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'var(--kin-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--kin-white)', marginBottom: '1.5rem' }}>
            Why We Do It
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 640 }}>
            Every artist in the collective chose this craft because they believe in it. We meet with clients, we listen, we spend hours designing before we pick up a machine. That process isn't overhead — it's the product.
          </p>
        </div>
      </section>

      {/* ── PHOTO INTERLUDE 2 ── */}
      <div className="kin-about-interlude kin-about-interlude--dark">
        <div className="kin-about-interlude__label" style={{ color: 'rgba(255,255,255,0.4)' }}>At Work</div>
      </div>

      {/* ── VALUES STRIP ── */}
      <section className="kin-about-section" style={{ background: 'var(--kin-gray-100)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
          {[
            { title: 'Craft First', desc: 'We invest in our technique constantly. Every artist trains, studies, and pushes their limits.' },
            { title: 'Client-Centered', desc: 'No pressure, no upselling. The right tattoo for you, not whatever fills our schedule.' },
            { title: 'Clean & Safe', desc: 'Clinical standards, single-use everything, sterile environment. No exceptions.' },
          ].map((v, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--kin-display)', fontSize: '3rem', color: 'var(--kin-red)', marginBottom: '1rem' }}>0{i + 1}</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>{v.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--kin-gray-600)', lineHeight: 1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MINIMAL CTA ── */}
      <section className="kin-minimal-cta">
        <h2>Come Meet Us</h2>
        <p>Walk-ins welcome. Or book a free consultation online.</p>
        <Link href={`${basePath}/contact`} className="kin-btn--outline-red">
          Book a Consultation
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
