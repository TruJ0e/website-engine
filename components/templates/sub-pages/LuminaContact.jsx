'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../lumina.css';

export default function LuminaContact({ business = {}, basePath = '' }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const services = business.services || [];

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
            Get In Touch
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>
            Book a Detail
          </h1>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="lum-section" style={{ background: 'var(--lum-dark)' }}>
        <div className="lum-container">
          <div className="lum-contact-grid">
            {/* GLASS FORM */}
            <div className="lum-contact-form">
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '2rem' }}>Request a Quote</h2>
              <div className="lum-form__group">
                <label className="lum-form__label">Full Name</label>
                <input className="lum-form__input" placeholder="Your name" value={form.name} onChange={e => update('name', e.target.value)} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="lum-form__group">
                  <label className="lum-form__label">Email</label>
                  <input className="lum-form__input" type="email" placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
                </div>
                <div className="lum-form__group">
                  <label className="lum-form__label">Phone</label>
                  <input className="lum-form__input" type="tel" placeholder="555-000-0000" value={form.phone} onChange={e => update('phone', e.target.value)} />
                </div>
              </div>
              <div className="lum-form__group">
                <label className="lum-form__label">Service Interested In</label>
                <select className="lum-form__input" value={form.service} onChange={e => update('service', e.target.value)}>
                  <option value="">Select a service…</option>
                  {(services.length ? services : [
                    { name: 'Express Detail' }, { name: 'Full Detail' }, { name: 'Paint Correction' }, { name: 'Ceramic Coating' },
                  ]).map((s, i) => <option key={i} value={s.name}>{s.name}</option>)}
                </select>
              </div>
              <div className="lum-form__group">
                <label className="lum-form__label">Tell Us About Your Vehicle</label>
                <textarea className="lum-form__input" placeholder="Year, make, model, any concerns…" value={form.message} onChange={e => update('message', e.target.value)} />
              </div>
              <button className="lum-btn lum-btn--primary" style={{ width: '100%', padding: '1rem' }}>
                Send Request →
              </button>
            </div>

            {/* SIDEBAR PANELS */}
            <div className="lum-contact-sidebar">
              <div className="lum-sidebar-panel">
                <h3>Hours</h3>
                <ul>
                  {[
                    ['Mon – Fri', '8am – 6pm'],
                    ['Saturday', '9am – 5pm'],
                    ['Sunday', 'By appointment'],
                  ].map(([day, hrs], i) => (
                    <li key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span>{day}</span>
                      <span style={{ color: 'var(--lum-purple-light)' }}>{hrs}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lum-sidebar-panel">
                <h3>Location</h3>
                <p>{business.address || '123 Detail Drive, Austin, TX 78701'}</p>
                <p style={{ marginTop: '0.75rem' }}>
                  <a href={`tel:${business.phone}`} style={{ color: 'var(--lum-purple-light)', fontWeight: 600 }}>
                    {business.phone}
                  </a>
                </p>
              </div>

              <div className="lum-sidebar-panel">
                <h3>What to Expect</h3>
                <ul>
                  {[
                    '✦ Free quote within 2 hours',
                    '◈ Flexible scheduling',
                    '⬡ Drop-off or mobile service',
                    '◉ 100% satisfaction guarantee',
                  ].map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
