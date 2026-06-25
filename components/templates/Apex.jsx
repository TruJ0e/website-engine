'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import './apex.css';

/* ─── tiny helpers ─── */
const Stars = ({ rating = 5 }) =>
  Array.from({ length: 5 }, (_, i) => (
    <span key={i} style={{ opacity: i < rating ? 1 : 0.25 }}>★</span>
  ));

const Initials = ({ name = '' }) =>
  name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

/* ─── Sub-components ─── */

function ApexNav({ business }) {
  return (
    <nav className="apex-nav">
      <div className="apex-nav__inner">
        <div className="apex-nav__logo">
          {business.name.split(' ')[0]}
          <span>{business.name.split(' ').slice(1).join(' ') || '.'}</span>
        </div>
        <ul className="apex-nav__links">
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#work">Our Work</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#contact" className="apex-nav__cta">Get Started</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function ApexHero({ business }) {
  const words = (business.tagline || '').split(' ');
  const half = Math.ceil(words.length / 2);

  return (
    <section className="apex-hero">
      <div className="apex-hero__bg" />
      <div className="apex-hero__grid" />
      <div className="apex-hero__content">
        <div className="apex-hero__eyebrow">Premier Service</div>
        <h1 className="apex-hero__headline">
          {words.slice(0, half).join(' ')}{' '}
          <em>{words.slice(half).join(' ')}</em>
        </h1>
        <p className="apex-hero__sub">
          {business.tagline}
        </p>
        <div className="apex-hero__actions">
          <Link href="#contact" className="apex-btn--primary">
            {business.cta?.buttonText || 'Get Your Free Quote'} →
          </Link>
          <Link href="#services" className="apex-btn--ghost">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}

function ApexStatWall({ stats = {} }) {
  const items = [
    { number: stats.projectsCompleted ? `${stats.projectsCompleted}+` : '500+', label: 'Projects Completed' },
    { number: stats.yearsInBusiness ? `${stats.yearsInBusiness}+` : '10+', label: 'Years in Business' },
    { number: stats.rating ? `${stats.rating}/5` : '4.9/5', label: 'Average Rating' },
    { number: stats.reviewCount ? `${stats.reviewCount}+` : '200+', label: 'Verified Reviews' },
  ];

  return (
    <section className="apex-stats">
      <div className="apex-container">
        <div className="apex-stats__grid">
          {items.map((s, i) => (
            <div key={i} className="apex-stat">
              <span className="apex-stat__number">{s.number}</span>
              <span className="apex-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApexAccordionServices({ services = [], basePath }) {
  const [openIdx, setOpenIdx] = useState(0);
  const active = services[openIdx] || {};

  return (
    <section className="apex-services" id="services">
      <div className="apex-container">
        <div className="apex-section-header">
          <div className="apex-section-eyebrow">What We Do</div>
          <h2 className="apex-section-title">Services Built for Results</h2>
          <p className="apex-section-subtitle">
            Each service is delivered with precision, backed by years of experience and a commitment to excellence.
          </p>
        </div>

        <div className="apex-services__layout">
          <div className="apex-accordion">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`apex-accordion__item${openIdx === i ? ' apex-accordion__item--open' : ''}`}
              >
                <button
                  className="apex-accordion__trigger"
                  onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                  aria-expanded={openIdx === i}
                >
                  <div className="apex-accordion__trigger-left">
                    <span className="apex-accordion__index">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="apex-accordion__name">{svc.name}</span>
                  </div>
                  <span className="apex-accordion__icon">+</span>
                </button>
                <div className="apex-accordion__body">
                  <div className="apex-accordion__content">
                    <p className="apex-accordion__desc">{svc.description}</p>
                    <div className="apex-accordion__meta">
                      {svc.price && (
                        <span className="apex-accordion__price">From {svc.price}</span>
                      )}
                      {svc.duration && (
                        <span className="apex-accordion__duration">{svc.duration}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="apex-services__visual">
            <div className="apex-services__card">
              <div className="apex-services__card-bg" />
              <div className="apex-services__card-content">
                <div className="apex-services__card-label">Currently Viewing</div>
                <div className="apex-services__card-title">
                  {active.name || 'Our Services'}
                </div>
              </div>
            </div>
            {basePath && (
              <div style={{ marginTop: '1.5rem' }}>
                <Link href={`${basePath}/services`} className="apex-btn--ghost" style={{ width: '100%', justifyContent: 'center' }}>
                  View All Services →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const CASE_STUDIES = [
  {
    tag: 'Residential',
    title: 'Complete Home Renovation',
    excerpt: 'Transformed a dated property into a modern showcase, delivering exceptional results on time and within budget.',
    result: '★ Completed 3 weeks ahead of schedule',
  },
  {
    tag: 'Commercial',
    title: 'Office Complex Buildout',
    excerpt: 'End-to-end project management for a 12,000 sq ft commercial space, coordinating 8 subcontractors seamlessly.',
    result: '★ 18% under original budget estimate',
  },
  {
    tag: 'Specialty',
    title: 'Historic Property Restoration',
    excerpt: 'Preserved original architectural details while modernizing all systems — a delicate balance executed flawlessly.',
    result: '★ Featured in Regional Architecture Review',
  },
  {
    tag: 'Outdoor',
    title: 'Landscape & Hardscape Overhaul',
    excerpt: 'Designed and installed a complete outdoor living space that increased the property value by an estimated 22%.',
    result: '★ $180k increase in appraised value',
  },
];

function ApexCaseStudyCarousel() {
  const [offset, setOffset] = useState(0);
  const max = CASE_STUDIES.length - 2;

  const prev = () => setOffset(o => Math.max(0, o - 1));
  const next = () => setOffset(o => Math.min(max, o + 1));

  return (
    <section className="apex-cases" id="work">
      <div className="apex-container">
        <div className="apex-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="apex-section-eyebrow">Our Work</div>
            <h2 className="apex-section-title">Projects That Speak for Themselves</h2>
          </div>
          <div className="apex-carousel__controls">
            <button className="apex-carousel__btn" onClick={prev} aria-label="Previous">←</button>
            <button className="apex-carousel__btn" onClick={next} aria-label="Next">→</button>
          </div>
        </div>

        <div className="apex-carousel">
          <div
            className="apex-carousel__track"
            style={{ transform: `translateX(calc(-${offset} * (50% + 1rem)))` }}
          >
            {CASE_STUDIES.map((cs, i) => (
              <div key={i} className="apex-carousel__slide">
                <div className="apex-carousel__image">
                  <div className="apex-carousel__image-inner">
                    <span className="apex-carousel__image-label">Project Photo</span>
                  </div>
                </div>
                <div className="apex-carousel__body">
                  <div className="apex-carousel__tag">{cs.tag}</div>
                  <h3 className="apex-carousel__title">{cs.title}</h3>
                  <p className="apex-carousel__excerpt">{cs.excerpt}</p>
                  <div className="apex-carousel__result">{cs.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ApexProofWall({ testimonials = [] }) {
  const items = testimonials.length
    ? testimonials
    : [
        { name: 'Sarah M.', location: 'Austin, TX', rating: 5, text: 'Exceptional work from start to finish. The team was professional, punctual, and the results exceeded every expectation.' },
        { name: 'James R.', location: 'Denver, CO', rating: 5, text: 'Finally a contractor that does what they say. Transparent pricing, no surprises, and outstanding craftsmanship.' },
        { name: 'Linda K.', location: 'Nashville, TN', rating: 5, text: 'They transformed our space beyond imagination. Worth every penny — we get compliments constantly.' },
      ];

  return (
    <section className="apex-proof" id="reviews">
      <div className="apex-container">
        <div className="apex-section-header">
          <div className="apex-section-eyebrow">Proof Wall</div>
          <h2 className="apex-section-title">What Clients Actually Say</h2>
        </div>
        <div className="apex-proof__grid">
          {items.map((t, i) => (
            <div key={i} className="apex-proof__card">
              <div className="apex-proof__stars">
                <Stars rating={t.rating} />
              </div>
              <p className="apex-proof__quote">"{t.text}"</p>
              <div className="apex-proof__author">
                <div className="apex-proof__avatar">
                  <Initials name={t.name} />
                </div>
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
  );
}

function ApexStory({ business, basePath }) {
  const story = business.story || {};
  return (
    <section className="apex-story" id="about">
      <div className="apex-container">
        <div className="apex-story__layout">
          <div className="apex-story__visual">
            <div className="apex-story__visual-inner">
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--apex-gray-400)' }}>Team Photo</span>
            </div>
            {business.stats?.yearsInBusiness && (
              <div className="apex-story__badge">
                <span className="apex-story__badge-number">{business.stats.yearsInBusiness}</span>
                <span className="apex-story__badge-label">Yrs Experience</span>
              </div>
            )}
          </div>
          <div className="apex-story__content">
            <div className="apex-section-eyebrow">Our Story</div>
            <h2 className="apex-story__headline">
              {story.headline || `${business.name} — Built on Excellence`}
            </h2>
            <p className="apex-story__body">
              {story.body || `We've been serving our community with integrity and craftsmanship for over a decade. Every project we take on is treated as if it were our own — because your satisfaction is our reputation.`}
            </p>
            {basePath && (
              <Link href={`${basePath}/about`} className="apex-btn--ghost">
                Meet the Team →
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ApexCTA({ business, basePath }) {
  const cta = business.cta || {};
  return (
    <section className="apex-cta" id="contact">
      <div className="apex-cta__bg" />
      <div className="apex-cta__border" />
      <div className="apex-container">
        <div className="apex-cta__inner">
          <h2 className="apex-cta__headline">
            {cta.headline || 'Ready to Start Your Project?'}
          </h2>
          <p className="apex-cta__subtext">
            {cta.subtext || 'Get a free, no-obligation estimate. Most responses within 2 hours.'}
          </p>
          <div className="apex-cta__actions">
            <Link href={`${basePath || ''}/contact`} className="apex-btn--primary">
              {cta.buttonText || 'Get a Free Quote'} →
            </Link>
            {business.phone && (
              <a href={`tel:${business.phone}`} className="apex-btn--ghost">
                Call {business.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ApexFooter({ business, basePath }) {
  return (
    <footer className="apex-footer">
      <div className="apex-container">
        <div className="apex-footer__grid">
          <div>
            <div className="apex-footer__brand">
              {business.name.split(' ')[0]}
              <span>{business.name.split(' ').slice(1).join(' ')}</span>
            </div>
            <p className="apex-footer__tagline">{business.tagline}</p>
            {business.phone && (
              <div className="apex-footer__contact-item">
                <span>📞</span>
                <a href={`tel:${business.phone}`}>{business.phone}</a>
              </div>
            )}
            {business.email && (
              <div className="apex-footer__contact-item">
                <span>✉</span>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </div>
            )}
            {business.address && (
              <div className="apex-footer__contact-item">
                <span>📍</span>
                <span>{business.address}</span>
              </div>
            )}
          </div>
          <div>
            <div className="apex-footer__col-title">Services</div>
            <ul className="apex-footer__links">
              {(business.services || []).slice(0, 5).map((s, i) => (
                <li key={i}><Link href={`${basePath || ''}/services`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="apex-footer__col-title">Company</div>
            <ul className="apex-footer__links">
              <li><Link href={`${basePath || ''}/about`}>About Us</Link></li>
              <li><Link href={`${basePath || ''}/services`}>All Services</Link></li>
              <li><Link href={`${basePath || ''}/contact`}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="apex-footer__col-title">Connect</div>
            <ul className="apex-footer__links">
              <li><a href="#">Google Reviews</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="apex-footer__bottom">
          <span className="apex-footer__copy">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </span>
          <ul className="apex-footer__legal">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Export ─── */
export default function Apex({ business = {}, basePath = '' }) {
  return (
    <div className="apex">
      <ApexNav business={business} />
      <ApexHero business={business} />
      <ApexStatWall stats={business.stats} />
      <ApexAccordionServices services={business.services} basePath={basePath} />
      <ApexCaseStudyCarousel />
      <ApexProofWall testimonials={business.testimonials} />
      <ApexStory business={business} basePath={basePath} />
      <ApexCTA business={business} basePath={basePath} />
      <ApexFooter business={business} basePath={basePath} />
    </div>
  );
}
