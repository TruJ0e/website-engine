'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../atelier.css';

export default function AtelierContact({ business = {}, basePath = '' }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', project: '', message: '' });
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));

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

      {/* ── MINIMAL CONTACT FORM ── */}
      <section className="ate-contact-minimal" style={{ paddingTop: '10rem' }}>
        <div className="ate-section-eyebrow" style={{ textAlign: 'center' }}>Begin Here</div>
        <h1 className="ate-contact-minimal h1" style={{ fontFamily: 'var(--ate-serif)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, marginBottom: '1.25rem', lineHeight: 1.1 }}>
          Let's Talk
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--ate-gray-600)', marginBottom: '4rem', fontWeight: 300, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 4rem' }}>
          We take on a limited number of projects each year. Tell us about your space and what you're hoping to achieve.
        </p>

        <form style={{ textAlign: 'left' }}>
          <div className="ate-form__group">
            <label className="ate-form__label">Your Name</label>
            <input className="ate-form__input" placeholder="First and last" value={form.name} onChange={e => update('name', e.target.value)} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="ate-form__group">
              <label className="ate-form__label">Email</label>
              <input className="ate-form__input" type="email" placeholder="your@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
            </div>
            <div className="ate-form__group">
              <label className="ate-form__label">Phone (optional)</label>
              <input className="ate-form__input" type="tel" placeholder="555-000-0000" value={form.phone} onChange={e => update('phone', e.target.value)} />
            </div>
          </div>
          <div className="ate-form__group">
            <label className="ate-form__label">Project Type</label>
            <select className="ate-form__input" value={form.project} onChange={e => update('project', e.target.value)}>
              <option value="">What are you working on?</option>
              <option>Full Interior Design</option>
              <option>Room Curation</option>
              <option>Renovation Consulting</option>
              <option>Art & Object Sourcing</option>
              <option>Color & Material Direction</option>
              <option>Something else</option>
            </select>
          </div>
          <div className="ate-form__group">
            <label className="ate-form__label">Tell Us About Your Space</label>
            <textarea className="ate-form__input" placeholder="Location, scale, timeline, what you love and what you want to change…" value={form.message} onChange={e => update('message', e.target.value)} style={{ minHeight: '120px' }} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button type="submit" className="ate-btn ate-btn--primary" style={{ minWidth: 200 }}>
              Send Inquiry
            </button>
          </div>
        </form>

        {/* CONTACT DETAILS */}
        <div className="ate-contact-details">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'left' }}>
            <div>
              <span className="ate-contact-details__label">Studio</span>
              <div className="ate-contact-details__item">{business.address || '88 Rue du Marais, Austin, TX 78704'}</div>
            </div>
            <div>
              <span className="ate-contact-details__label">Email</span>
              <div className="ate-contact-details__item">{business.email || 'studio@maisonlune.com'}</div>
            </div>
            <div>
              <span className="ate-contact-details__label">Phone</span>
              <div className="ate-contact-details__item">{business.phone || '555-000-0000'}</div>
            </div>
          </div>
          <div style={{ marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--ate-gray-200)' }}>
            <span className="ate-contact-details__label">Studio Hours</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '0.75rem' }}>
              {[
                { day: 'Monday – Thursday', hours: '9am – 6pm' },
                { day: 'Friday', hours: '9am – 3pm' },
                { day: 'Weekend', hours: 'By appointment' },
              ].map((h, i) => (
                <div key={i}>
                  <div className="ate-contact-details__item" style={{ fontSize: '0.85rem', marginBottom: 0 }}>{h.day}</div>
                  <div style={{ fontFamily: 'var(--ate-serif)', fontSize: '0.95rem', color: 'var(--ate-sage)', fontStyle: 'italic' }}>{h.hours}</div>
                </div>
              ))}
            </div>
          </div>
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
