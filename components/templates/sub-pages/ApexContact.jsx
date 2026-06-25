'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../apex.css';

export default function ApexContact({ business = {}, basePath = '' }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const services = business.services || [];
  const cta = business.cta || {};

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, businessName: business.name }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    background: 'var(--apex-gray-200)',
    border: '1px solid var(--apex-border)',
    borderRadius: 'var(--apex-radius)',
    padding: '0.9rem 1.25rem',
    color: 'var(--apex-white)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.3s',
    fontFamily: 'var(--apex-font-body)',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--apex-gray-400)',
    marginBottom: '0.5rem',
  };

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
      <section className="apex-hero" style={{ minHeight: '45vh' }}>
        <div className="apex-hero__bg" />
        <div className="apex-hero__grid" />
        <div className="apex-hero__content" style={{ paddingTop: '10rem', paddingBottom: '3rem' }}>
          <div className="apex-hero__eyebrow">Get in Touch</div>
          <h1 className="apex-hero__headline" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Let's <em>Talk</em>
          </h1>
          <p className="apex-hero__sub">
            {cta.subtext || 'Free estimates. No pressure. Most responses within 2 hours.'}
          </p>
        </div>
      </section>

      {/* ── CONTACT LAYOUT ── */}
      <section style={{ padding: '7rem 0', background: 'var(--apex-black)' }}>
        <div className="apex-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '6rem', alignItems: 'start' }}>

            {/* LEFT: contact info */}
            <div>
              <div className="apex-section-eyebrow">Contact Details</div>
              <h2 className="apex-section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>
                Reach Us Directly
              </h2>

              {[
                business.phone && {
                  icon: '📞',
                  label: 'Phone',
                  value: business.phone,
                  href: `tel:${business.phone}`,
                },
                business.email && {
                  icon: '✉',
                  label: 'Email',
                  value: business.email,
                  href: `mailto:${business.email}`,
                },
                business.address && {
                  icon: '📍',
                  label: 'Address',
                  value: business.address,
                  href: null,
                },
              ].filter(Boolean).map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '1.25rem',
                  padding: '1.5rem 0',
                  borderBottom: '1px solid var(--apex-border)',
                }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    border: '1px solid var(--apex-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--apex-gray-400)', marginBottom: '0.25rem' }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: '1rem', color: 'var(--apex-white)' }}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '1rem', color: 'var(--apex-white)' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Hours / trust badge */}
              <div style={{
                marginTop: '2.5rem',
                padding: '1.5rem',
                background: 'var(--apex-gray-100)',
                border: '1px solid var(--apex-border)',
                borderRadius: '4px',
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--apex-accent)', marginBottom: '1rem' }}>
                  Response Commitment
                </div>
                {[
                  'Free estimate — no obligation',
                  'Response within 2 business hours',
                  'Licensed, bonded & insured',
                  '100% satisfaction guarantee',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', fontSize: '0.875rem', color: 'var(--apex-gray-400)' }}>
                    <span style={{ color: 'var(--apex-accent)' }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: form */}
            <div style={{
              background: 'var(--apex-gray-100)',
              border: '1px solid var(--apex-border)',
              borderRadius: '4px',
              padding: '3rem',
            }}>
              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--apex-font-display)', fontSize: '1.75rem', color: 'var(--apex-white)', marginBottom: '0.75rem' }}>
                    Message Received
                  </h3>
                  <p style={{ color: 'var(--apex-gray-400)', marginBottom: '2rem' }}>
                    We'll be in touch within 2 business hours.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                    className="apex-btn--ghost"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: 'var(--apex-font-display)', fontSize: '1.5rem', color: 'var(--apex-white)', marginBottom: '0.5rem' }}>
                    Request a Free Quote
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--apex-gray-400)', marginBottom: '2rem' }}>
                    Fill out the form and we'll get back to you fast.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input
                        style={inputStyle}
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input
                        style={inputStyle}
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      style={inputStyle}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  {services.length > 0 && (
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={labelStyle}>Service Interested In</label>
                      <select
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s, i) => (
                          <option key={i} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={labelStyle}>Tell Us About Your Project *</label>
                    <textarea
                      style={{ ...inputStyle, minHeight: 140, resize: 'vertical' }}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Describe your project, timeline, or any questions…"
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{ color: '#e05555', fontSize: '0.875rem', marginBottom: '1rem' }}>
                      Something went wrong. Please call us directly or try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="apex-btn--primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending…' : `${cta.buttonText || 'Send My Request'} →`}
                  </button>
                </form>
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
              <li><Link href={`${basePath}/about`}>About</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
