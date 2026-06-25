'use client';

import Link from 'next/link';
import '../momentum.css';

const Initials = ({ name = '' }) =>
  name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

export default function MomentumAbout({ business = {}, basePath = '' }) {
  const story = business.story || {};
  const team = business.team || [];
  const stats = business.stats || {};
  const cta = business.cta || {};

  return (
    <div className="mom">
      {/* ── NAV ── */}
      <nav className="mom-nav">
        <div className="mom-nav__logo">
          <Link href={basePath || '/'}>
            {business.name?.split(' ')[0]}
            <span> {business.name?.split(' ').slice(1).join(' ')}</span>
          </Link>
        </div>
        <ul className="mom-nav__links">
          <li><Link href={`${basePath}/services`}>Services</Link></li>
          <li><Link href={`${basePath}/about`}>About</Link></li>
          <li><Link href={`${basePath}/contact`} className="mom-nav__cta">Free Estimate</Link></li>
        </ul>
      </nav>

      {/* ── PAGE HEADER ── */}
      <section style={{ paddingTop: '9rem', paddingBottom: '5rem', paddingLeft: '3rem', paddingRight: '3rem', borderBottom: '1px solid var(--mom-gray-200)' }}>
        <div className="mom-section-eyebrow">Who We Are</div>
        <h1 style={{ fontFamily: 'var(--mom-serif)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          Built on Reputation
        </h1>
      </section>

      {/* ── CREDENTIALS + NARRATIVE ── */}
      <section className="mom-section">
        <div className="mom-container">
          <div className="mom-about-split">
            <div className="mom-creds">
              <div className="mom-section-eyebrow">By the Numbers</div>
              {[
                { number: `${stats.projectsCompleted || 900}+`, label: 'Roofs Completed', detail: 'Residential and commercial across the region.' },
                { number: `${stats.yearsInBusiness || 15}`, label: 'Years in Business', detail: 'Founded on a handshake. Still run that way.' },
                { number: `${stats.rating || 4.9}/5`, label: 'Average Rating', detail: `From ${stats.reviewCount || 300}+ verified client reviews.` },
                { number: '30yr', label: 'Workmanship Warranty', detail: 'We stand behind every job we complete.' },
              ].map((s, i) => (
                <div key={i} className="mom-cred-stat">
                  <div className="mom-cred-stat__number">{s.number}</div>
                  <div className="mom-cred-stat__label">{s.label}</div>
                  <div className="mom-cred-stat__detail">{s.detail}</div>
                </div>
              ))}
            </div>

            <div className="mom-narrative">
              <h2>{story.headline || `The ${business.name?.split(' ')[0]} Story`}</h2>
              <p>
                {story.body || `We started ${business.name} because we kept seeing homeowners get burned by contractors who overpromised and underdelivered. We knew we could do better — and for ${stats.yearsInBusiness || 15} years, that's exactly what we've done.`}
              </p>
              <p>
                Every estimate is honest. Every timeline is realistic. Every crew member is trained, insured, and held to the same standard we'd want if it were our own roof. That's not a marketing line — it's the only way we know how to operate.
              </p>
              <p>
                We're based in this community. Our kids go to school here. Our clients are our neighbors. We don't take that lightly.
              </p>

              {/* CERTIFICATIONS */}
              <div style={{ marginTop: '3rem' }}>
                <div className="mom-section-eyebrow">Certifications & Affiliations</div>
                <div className="mom-cert-grid">
                  {[
                    { icon: '🏆', name: 'GAF Master Elite' },
                    { icon: '⭐', name: 'BBB Accredited' },
                    { icon: '🛡', name: 'CertainTeed Select' },
                    { icon: '📋', name: 'Licensed & Bonded' },
                    { icon: '🔒', name: 'Fully Insured' },
                    { icon: '✅', name: 'NRCA Member' },
                  ].map((c, i) => (
                    <div key={i} className="mom-cert">
                      <div className="mom-cert__icon">{c.icon}</div>
                      <div className="mom-cert__name">{c.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="mom-section" style={{ background: 'var(--mom-gray-100)' }}>
        <div className="mom-container">
          <div className="mom-section-eyebrow">The Team</div>
          <h2 className="mom-section-title">People You Can Trust</h2>
          <div className="mom-team-grid" style={{ marginTop: '3rem' }}>
            {(team.length ? team : [
              { name: 'Rick Harmon', role: 'Owner & Founder', bio: 'Started Ridgeline with a single truck and a reputation for doing it right. Still on every job site.' },
              { name: 'Carla Vega', role: 'Project Manager', bio: 'Keeps every project on schedule and every client in the loop. 11 years with the company.' },
              { name: 'Tom Adler', role: 'Lead Foreman', bio: 'Master roofer with 20 years of experience. His crews set the standard.' },
            ]).map((member, i) => (
              <div key={i} className="mom-team-card">
                <div className="mom-team-card__avatar">
                  <Initials name={member.name} />
                </div>
                <div className="mom-team-card__name">{member.name}</div>
                <div className="mom-team-card__role">{member.role}</div>
                <p className="mom-team-card__bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: 'var(--mom-black)', padding: '6rem 2rem', textAlign: 'center' }}>
        <div className="mom-container">
          <h2 style={{ fontFamily: 'var(--mom-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--mom-white)', marginBottom: '1rem' }}>
            {cta.headline || 'Get Your Free Estimate'}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', marginBottom: '2.5rem', maxWidth: 480, margin: '0 auto 2.5rem' }}>
            {cta.subtext || 'No obligation. Most estimates within 24 hours.'}
          </p>
          <Link href={`${basePath}/contact`} className="mom-btn mom-btn--primary">
            {cta.buttonText || 'Request Free Estimate'}
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="mom-footer">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="mom-footer__top">
            <div className="mom-footer__brand">
              <div className="mom-footer__logo">{business.name?.split(' ')[0]}<span> {business.name?.split(' ').slice(1).join(' ')}</span></div>
              <p>{business.tagline}</p>
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
