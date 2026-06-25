'use client';

import Link from 'next/link';
import '../lumina.css';

const Initials = ({ name = '' }) =>
  name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

export default function LuminaAbout({ business = {}, basePath = '' }) {
  const story = business.story || {};
  const team = business.team || [];
  const stats = business.stats || {};

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
            Who We Are
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>
            About Us
          </h1>
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

      {/* ── SPLIT ABOUT ── */}
      <section className="lum-section" style={{ background: 'var(--lum-dark)' }}>
        <div className="lum-container">
          <div className="lum-about-split">
            <div className="lum-about-img" />
            <div className="lum-about-text">
              <div style={{ fontFamily: 'var(--lum-mono)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--lum-purple)', marginBottom: '1rem' }}>
                Our Story
              </div>
              <h2>{story.headline || `${business.name} — Obsessed with Detail`}</h2>
              <p>{story.body || 'We started this business because we believed the auto detailing industry could do better. Better products, better technique, better transparency. Every car that comes through our bay gets treated like it\'s our own.'}</p>
              <p>We use only professional-grade products — no shortcuts, no fillers. Just honest work and results that speak for themselves.</p>
              <p>Whether it's a daily driver or a show car, we bring the same level of precision to every job.</p>
              {business.phone && (
                <a href={`tel:${business.phone}`} className="lum-btn lum-btn--primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                  Call Us: {business.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      {(team.length > 0) && (
        <section className="lum-section" style={{ background: 'var(--lum-black)' }}>
          <div className="lum-container">
            <div className="lum-section-eyebrow">The Crew</div>
            <h2 className="lum-section-title">Meet the Team</h2>
            <div className="lum-team-grid">
              {team.map((member, i) => (
                <div key={i} className="lum-team-card">
                  <div className="lum-team-card__avatar">
                    <Initials name={member.name} />
                  </div>
                  <div className="lum-team-card__name">{member.name}</div>
                  <div className="lum-team-card__role">{member.role}</div>
                  <p className="lum-team-card__bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SPLIT CTA ── */}
      <div className="lum-split-cta">
        <div className="lum-split-cta__left">
          <div style={{ maxWidth: '480px' }}>
            <div className="lum-section-eyebrow">Work With Us</div>
            <h2 className="lum-split-cta__headline">Ready to Experience the Difference?</h2>
            <p className="lum-split-cta__sub">Over {stats.projectsCompleted || 1200} cars detailed. Zero excuses.</p>
          </div>
        </div>
        <div className="lum-split-cta__right">
          <h2 className="lum-split-cta__headline">Book Your Detail</h2>
          <p className="lum-split-cta__sub">Appointments available 7 days a week.</p>
          <Link href={`${basePath}/contact`} className="lum-btn lum-btn--white">
            Get a Quote →
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
