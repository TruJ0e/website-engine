'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../kinetic.css';

export default function KineticContact({ business = {}, basePath = '' }) {
  const [form, setForm] = useState({ name: '', email: '', service: '', artist: '', message: '' });
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const team = business.team || [];
  const services = business.services || [];

  const defaultArtists = [
    { name: 'Raya Silva', role: 'Realism & Portraits', bio: 'Specializes in photorealistic portraits and black & grey work. Known for precision and emotional depth.' },
    { name: 'Tomás Cruz', role: 'Neo Traditional', bio: 'Bold lines, rich palettes, and classic motifs reimagined for the modern collector.' },
    { name: 'Jules Park', role: 'Fine Line & Micro', bio: 'Delicate single-needle work, botanical illustration, and geometric patterns.' },
  ];

  const artists = team.length ? team.map((t, i) => ({ ...t, role: defaultArtists[i]?.role || 'Tattoo Artist' })) : defaultArtists;

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
          GET BOOKED
        </div>
        <h1 style={{ fontFamily: 'var(--kin-display)', fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: 0.9 }}>
          BOOK A<br /><span style={{ color: 'var(--kin-red)' }}>SESSION</span>
        </h1>
      </section>

      {/* ── CONTACT GRID ── */}
      <section style={{ padding: '5rem 3rem' }}>
        <div className="kin-contact-grid">
          {/* FORM */}
          <div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '2.5rem' }}>Booking Request</h2>
            <div className="kin-form__group">
              <label className="kin-form__label">Full Name</label>
              <input className="kin-form__input" placeholder="Your name" value={form.name} onChange={e => update('name', e.target.value)} />
            </div>
            <div className="kin-form__group">
              <label className="kin-form__label">Email</label>
              <input className="kin-form__input" type="email" placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
            </div>
            <div className="kin-form__group">
              <label className="kin-form__label">Service Type</label>
              <select className="kin-form__input" value={form.service} onChange={e => update('service', e.target.value)}>
                <option value="">What kind of tattoo?</option>
                {(services.length ? services : [
                  { name: 'Custom Design' }, { name: 'Cover-Up' }, { name: 'Fine Line' }, { name: 'Black & Grey' }, { name: 'Color Work' },
                ]).map((s, i) => <option key={i} value={s.name}>{s.name}</option>)}
              </select>
            </div>
            <div className="kin-form__group">
              <label className="kin-form__label">Preferred Artist (optional)</label>
              <select className="kin-form__input" value={form.artist} onChange={e => update('artist', e.target.value)}>
                <option value="">No preference</option>
                {artists.map((a, i) => <option key={i} value={a.name}>{a.name} — {a.role}</option>)}
              </select>
            </div>
            <div className="kin-form__group">
              <label className="kin-form__label">Describe Your Tattoo Idea</label>
              <textarea className="kin-form__input" style={{ minHeight: '120px', resize: 'none' }} placeholder="Placement, size, style, reference images you have…" value={form.message} onChange={e => update('message', e.target.value)} />
            </div>
            <button className="kin-btn kin-btn--primary" style={{ width: '100%', padding: '1.1rem', fontSize: '0.85rem' }}>
              Submit Booking Request
            </button>
          </div>

          {/* SIDEBAR */}
          <div>
            <div style={{ background: 'var(--kin-black)', color: 'var(--kin-white)', padding: '2.5rem', marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--kin-display)', fontSize: '1.4rem', marginBottom: '1.25rem' }}>STUDIO HOURS</h3>
              {[
                ['Tue – Sat', '11am – 8pm'],
                ['Sun', '12pm – 6pm'],
                ['Mon', 'Closed'],
              ].map(([day, hrs], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.875rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.55)' }}>{day}</span>
                  <span style={{ color: hrs === 'Closed' ? 'var(--kin-red)' : 'var(--kin-white)', fontWeight: 600 }}>{hrs}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '1.25rem', paddingTop: '1.25rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
                  {business.address || '456 Ink Lane, Austin, TX 78702'}
                </p>
                {business.phone && (
                  <a href={`tel:${business.phone}`} style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--kin-red)', fontWeight: 700 }}>
                    {business.phone}
                  </a>
                )}
              </div>
            </div>

            <div style={{ padding: '2rem', border: '1px solid var(--kin-gray-200)' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Walk-Ins Welcome
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--kin-gray-600)', lineHeight: 1.65 }}>
                We keep availability for walk-ins every day we're open. Call ahead to check current wait times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTIST BIOS GRID ── */}
      <section style={{ padding: '5rem 3rem', background: 'var(--kin-gray-100)', borderTop: '1px solid var(--kin-gray-200)' }}>
        <h2 style={{ fontFamily: 'var(--kin-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '3rem' }}>
          THE <span style={{ color: 'var(--kin-red)' }}>ARTISTS</span>
        </h2>
        <div className="kin-artist-grid">
          {artists.map((artist, i) => (
            <div key={i} className="kin-artist-card">
              <div className="kin-artist-card__photo" />
              <div className="kin-artist-card__name">{artist.name}</div>
              <div className="kin-artist-card__role">{artist.role}</div>
              <p className="kin-artist-card__bio">{artist.bio}</p>
            </div>
          ))}
        </div>
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
