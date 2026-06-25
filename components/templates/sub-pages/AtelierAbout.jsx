'use client';

import Link from 'next/link';
import '../atelier.css';

export default function AtelierAbout({ business = {}, basePath = '' }) {
  const story = business.story || {};
  const team = business.team || [];
  const stats = business.stats || {};

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
        <div className="ate-section-eyebrow">The Studio</div>
        <h1 style={{ fontFamily: 'var(--ate-serif)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 300, lineHeight: 1.05 }}>
          About Maison Lune
        </h1>
      </section>

      {/* ── ESSAY SECTION 1 ── */}
      <section style={{ padding: '7rem 4rem', borderBottom: '1px solid var(--ate-gray-200)' }}>
        <div className="ate-essay">
          <h2>Why We Design</h2>
          <p>
            <span className="ate-essay__drop">W</span>
            e didn't start Maison Lune to decorate rooms. We started it because we believe that the environments we inhabit shape the way we think, feel, and live — and that most interiors don't take that seriously enough.
          </p>
          <p>
            {story.body || 'Maison Lune was founded on the principle that a home should feel like it belongs to the person who lives in it — not to a trend, a catalog, or a designer\'s ego. We start with who you are, what you love, and how you move through a space. Everything else follows.'}
          </p>
          <hr className="ate-essay-divider" />
          <h2>How We Work</h2>
          <p>
            Every project begins with a long conversation. We ask questions most designers don't bother to ask: What do you want to feel when you come home? What bothers you about your space right now? What's the one room you've always wanted?
          </p>
          <p>
            From there, we develop a concept that holds the whole project together — a logic of material, light, proportion, and object that makes every room feel coherent without being repetitive.
          </p>
          <p>
            We work with a small, trusted network of makers, craftspeople, and dealers who share our commitment to quality and originality. Nothing we specify is chosen without intention.
          </p>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE BREAK ── */}
      <div style={{ aspectRatio: '21/9', background: 'var(--ate-gray-200)', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.65rem', color: 'var(--ate-gray-400)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Studio Interior</span>
        </div>
      </div>

      {/* ── ESSAY SECTION 2 ── */}
      <section style={{ padding: '7rem 4rem', background: 'var(--ate-cream)', borderBottom: '1px solid var(--ate-gray-200)' }}>
        <div className="ate-essay">
          <h2>Our Philosophy</h2>
          <p>
            Good design is the absence of everything that doesn't need to be there. We edit relentlessly — not because we're minimalists, but because restraint is what makes the things that do remain feel significant.
          </p>
          <blockquote style={{ fontFamily: 'var(--ate-serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontStyle: 'italic', color: 'var(--ate-charcoal)', lineHeight: 1.45, padding: '2rem 0 2rem 3rem', margin: '2.5rem 0', borderLeft: '2px solid var(--ate-sage)' }}>
            "The goal is never the finished room. The goal is the life that happens in it."
          </blockquote>
          <p>
            We take on fewer projects than we could because we believe the quality of our attention is the most valuable thing we offer. When we commit to a project, we are fully present for it — from first sketch to final styling.
          </p>
        </div>
      </section>

      {/* ── STUDIO STATS ── */}
      <section style={{ padding: '5rem 4rem', borderBottom: '1px solid var(--ate-gray-200)' }}>
        <div className="ate-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
          {[
            { number: `${stats.projectsCompleted || 85}`, label: 'Projects Completed' },
            { number: `${stats.yearsInBusiness || 11}`, label: 'Years in Practice' },
            { number: `${stats.rating || 4.9}`, label: 'Average Rating' },
            { number: '6', label: 'Projects Per Year' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--ate-serif)', fontSize: '3.5rem', fontWeight: 300, color: 'var(--ate-black)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.number}</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ate-sage)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MINIMAL CTA ── */}
      <section style={{ padding: '8rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <div className="ate-section-eyebrow" style={{ textAlign: 'center' }}>Work With Us</div>
          <h2 style={{ fontFamily: 'var(--ate-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, marginBottom: '1rem', lineHeight: 1.15 }}>
            Let's Make Something Worth Living In
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--ate-gray-600)', marginBottom: '2.5rem', fontWeight: 300, lineHeight: 1.7 }}>
            We respond to all inquiries within two business days.
          </p>
          <Link href={`${basePath}/contact`} className="ate-btn ate-btn--outline">
            Begin a Project
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
