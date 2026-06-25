'use client';

import Link from 'next/link';
import '../apex.css';

const Initials = ({ name = '' }) =>
  name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

const Stars = ({ rating = 5 }) =>
  Array.from({ length: 5 }, (_, i) => (
    <span key={i} style={{ opacity: i < rating ? 1 : 0.25 }}>★</span>
  ));

export default function ApexAbout({ business = {}, basePath = '' }) {
  const story = business.story || {};
  const team = business.team || [];
  const stats = business.stats || {};
  const testimonials = business.testimonials || [];
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
      <section className="apex-hero" style={{ minHeight: '55vh' }}>
        <div className="apex-hero__bg" />
        <div className="apex-hero__grid" />
        <div className="apex-hero__content" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
          <div className="apex-hero__eyebrow">Who We Are</div>
          <h1 className="apex-hero__headline" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Built on <em>Trust</em>
          </h1>
          <p className="apex-hero__sub">
            {story.headline || `${business.name} — a team that takes pride in every project, every time.`}
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="apex-stats">
        <div className="apex-container">
          <div className="apex-stats__grid">
            {[
              { number: `${stats.projectsCompleted || 500}+`, label: 'Projects Completed' },
              { number: `${stats.yearsInBusiness || 10}+`, label: 'Years in Business' },
              { number: `${stats.rating || 4.9}/5`, label: 'Average Rating' },
              { number: `${stats.reviewCount || 200}+`, label: 'Happy Clients' },
            ].map((s, i) => (
              <div key={i} className="apex-stat">
                <span className="apex-stat__number">{s.number}</span>
                <span className="apex-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="apex-story">
        <div className="apex-container">
          <div className="apex-story__layout">
            <div className="apex-story__visual">
              <div className="apex-story__visual-inner">
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--apex-gray-400)' }}>
                  Our Story Photo
                </span>
              </div>
              {stats.yearsInBusiness && (
                <div className="apex-story__badge">
                  <span className="apex-story__badge-number">{stats.yearsInBusiness}</span>
                  <span className="apex-story__badge-label">Yrs Experience</span>
                </div>
              )}
            </div>
            <div>
              <div className="apex-section-eyebrow">Our Story</div>
              <h2 className="apex-story__headline">
                {story.headline || `${business.name} — Where It All Began`}
              </h2>
              <p className="apex-story__body">
                {story.body ||
                  `We started with a simple belief: every client deserves honest pricing, expert work, and a team they can trust. That belief has guided every project we've completed, and it shows in the relationships we've built with our community.`}
              </p>
              <p className="apex-story__body">
                Today, we're proud to serve hundreds of clients across the region, backed by a team of skilled professionals who share the same commitment to excellence that started it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      {team.length > 0 && (
        <section style={{ padding: '7rem 0', background: 'var(--apex-black)' }}>
          <div className="apex-container">
            <div className="apex-section-header">
              <div className="apex-section-eyebrow">The Team</div>
              <h2 className="apex-section-title">The People Behind the Work</h2>
              <p className="apex-section-subtitle">
                Every member of our team is vetted, trained, and committed to delivering the highest standard.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}>
              {team.map((member, i) => (
                <div key={i} className="apex-proof__card" style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'var(--apex-gray-200)',
                    border: '1px solid var(--apex-border)',
                    margin: '0 auto 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--apex-accent)',
                  }}>
                    <Initials name={member.name} />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--apex-font-display)',
                    fontSize: '1.2rem',
                    color: 'var(--apex-white)',
                    marginBottom: '0.25rem',
                  }}>
                    {member.name}
                  </h3>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--apex-accent)',
                    marginBottom: '0.75rem',
                  }}>
                    {member.role}
                  </div>
                  {member.bio && (
                    <p style={{ fontSize: '0.875rem', color: 'var(--apex-gray-400)', lineHeight: 1.7 }}>
                      {member.bio}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── VALUES ── */}
      <section style={{ padding: '7rem 0', background: 'var(--apex-gray-100)', borderTop: '1px solid var(--apex-border)' }}>
        <div className="apex-container">
          <div className="apex-section-header" style={{ textAlign: 'center', margin: '0 auto 4rem' }}>
            <div className="apex-section-eyebrow">What We Stand For</div>
            <h2 className="apex-section-title" style={{ margin: '0 auto' }}>Our Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { icon: '◆', title: 'Integrity First', desc: 'We say what we mean and do what we say. Transparent pricing, honest timelines, zero surprises.' },
              { icon: '◆', title: 'Craft Matters', desc: 'We don\'t cut corners. Every detail is executed with care — because your home deserves nothing less.' },
              { icon: '◆', title: 'Client Partnership', desc: 'We treat every project as a collaboration. Your vision drives us; our expertise delivers it.' },
            ].map((v, i) => (
              <div key={i} className="apex-proof__card">
                <div style={{ color: 'var(--apex-accent)', fontSize: '1rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--apex-font-display)',
                  fontSize: '1.2rem',
                  color: 'var(--apex-white)',
                  marginBottom: '0.75rem',
                }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--apex-gray-400)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS STRIP ── */}
      {testimonials.length > 0 && (
        <section style={{ padding: '7rem 0', background: 'var(--apex-black)' }}>
          <div className="apex-container">
            <div className="apex-section-header">
              <div className="apex-section-eyebrow">Client Words</div>
              <h2 className="apex-section-title">What People Say</h2>
            </div>
            <div className="apex-proof__grid">
              {testimonials.slice(0, 3).map((t, i) => (
                <div key={i} className="apex-proof__card">
                  <div className="apex-proof__stars"><Stars rating={t.rating} /></div>
                  <p className="apex-proof__quote">"{t.text}"</p>
                  <div className="apex-proof__author">
                    <div className="apex-proof__avatar"><Initials name={t.name} /></div>
                    <div>
                      <div className="apex-proof__name">{t.name}</div>
                      {t.location && <div className="apex-proof__location">{t.location}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="apex-cta">
        <div className="apex-cta__bg" />
        <div className="apex-cta__border" />
        <div className="apex-container">
          <div className="apex-cta__inner">
            <h2 className="apex-cta__headline">{cta.headline || 'Ready to Work Together?'}</h2>
            <p className="apex-cta__subtext">{cta.subtext || 'Let\'s talk about your project. Free estimates, always.'}</p>
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

      <footer className="apex-footer">
        <div className="apex-container">
          <div className="apex-footer__bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
            <span className="apex-footer__copy">
              © {new Date().getFullYear()} {business.name}. All rights reserved.
            </span>
            <ul className="apex-footer__legal">
              <li><Link href={basePath || '/'}>Home</Link></li>
              <li><Link href={`${basePath}/services`}>Services</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
