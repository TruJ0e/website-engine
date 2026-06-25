'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../momentum.css';

const Initials = ({ name = '' }) =>
  name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

export default function MomentumContact({ business = {}, basePath = '' }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const services = business.services || [];
  const team = business.team || [];

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
        <div className="mom-section-eyebrow">Get In Touch</div>
        <h1 style={{ fontFamily: 'var(--mom-serif)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          Free Estimate Request
        </h1>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="mom-section">
        <div className="mom-container">
          <div className="mom-contact-grid">
            {/* FORM */}
            <div>
              <h2 style={{ fontFamily: 'var(--mom-serif)', fontSize: '1.8rem', marginBottom: '2rem' }}>Tell Us About Your Project</h2>
              <div className="mom-form__group">
                <label className="mom-form__label">Full Name</label>
                <input className="mom-form__input" placeholder="Your name" value={form.name} onChange={e => update('name', e.target.value)} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="mom-form__group">
                  <label className="mom-form__label">Email</label>
                  <input className="mom-form__input" type="email" placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
                </div>
                <div className="mom-form__group">
                  <label className="mom-form__label">Phone</label>
                  <input className="mom-form__input" type="tel" placeholder="555-000-0000" value={form.phone} onChange={e => update('phone', e.target.value)} />
                </div>
              </div>
              <div className="mom-form__group">
                <label className="mom-form__label">Service Needed</label>
                <select className="mom-form__input" value={form.service} onChange={e => update('service', e.target.value)}>
                  <option value="">Select a service…</option>
                  {(services.length ? services : [
                    { name: 'Roof Replacement' }, { name: 'Storm Damage Repair' }, { name: 'Gutter Installation' }, { name: 'Siding' }, { name: 'Inspection' },
                  ]).map((s, i) => <option key={i} value={s.name}>{s.name}</option>)}
                </select>
              </div>
              <div className="mom-form__group">
                <label className="mom-form__label">Project Details</label>
                <textarea className="mom-form__input" placeholder="Property address, age of current roof, any visible damage…" value={form.message} onChange={e => update('message', e.target.value)} />
              </div>
              <button className="mom-btn mom-btn--primary" style={{ width: '100%', padding: '1rem', fontSize: '0.9rem' }}>
                Submit Estimate Request →
              </button>
              <p style={{ fontSize: '0.75rem', color: 'var(--mom-gray-400)', marginTop: '0.75rem' }}>
                We respond to all requests within 24 hours. No obligation.
              </p>
            </div>

            {/* SIDEBAR */}
            <div>
              {/* URGENCY PANEL */}
              <div className="mom-urgency">
                <h3>Storm Damage? Call Now.</h3>
                <p>We prioritize storm damage responses. Most inspections scheduled within 24–48 hours of a weather event. Insurance documentation provided at no charge.</p>
                <div className="mom-urgency__phone">
                  {business.phone || '555-000-0000'}
                </div>
              </div>

              {/* HOURS */}
              <div style={{ padding: '2rem', border: '1px solid var(--mom-gray-200)', borderRadius: '4px', marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--mom-serif)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>Hours</h3>
                {[
                  ['Mon – Fri', '7am – 6pm'],
                  ['Saturday', '8am – 4pm'],
                  ['Sunday', 'Emergency only'],
                ].map(([day, hrs], i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--mom-gray-600)' }}>{day}</span>
                    <span style={{ fontWeight: 600 }}>{hrs}</span>
                  </div>
                ))}
              </div>

              {/* ADDRESS */}
              <div style={{ padding: '1.5rem', background: 'var(--mom-sage-dim)', border: '1px solid var(--mom-sage-light)', borderRadius: '4px' }}>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--mom-sage)', marginBottom: '0.75rem' }}>
                  Service Area
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--mom-gray-600)', lineHeight: 1.65 }}>
                  {business.address || '123 Ridge Rd, Denver, CO 80202'}<br />
                  Serving the greater metro area within 60 miles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM BIOS ── */}
      {team.length > 0 && (
        <section className="mom-section" style={{ background: 'var(--mom-gray-100)' }}>
          <div className="mom-container">
            <div className="mom-section-eyebrow">Who You'll Work With</div>
            <h2 className="mom-section-title">Meet the Team</h2>
            <div className="mom-team-grid" style={{ marginTop: '3rem' }}>
              {team.map((member, i) => (
                <div key={i} className="mom-team-card">
                  <div className="mom-team-card__avatar"><Initials name={member.name} /></div>
                  <div className="mom-team-card__name">{member.name}</div>
                  <div className="mom-team-card__role">{member.role}</div>
                  <p className="mom-team-card__bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
