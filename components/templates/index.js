// Template registry — main templates + sub-pages
// Usage: import { Apex, ApexServices } from '@/components/templates'

// ── Main Templates ──
export { default as Apex } from './Apex';
// export { default as Kinetic } from './Kinetic';   // coming soon
// export { default as Lumina } from './Lumina';     // coming soon
// export { default as Momentum } from './Momentum'; // coming soon
// export { default as Atelier } from './Atelier';   // coming soon

// ── Apex Sub-Pages ──
export { default as ApexServices } from './sub-pages/ApexServices';
export { default as ApexAbout } from './sub-pages/ApexAbout';
export { default as ApexContact } from './sub-pages/ApexContact';

// ── Template map (for dynamic lookup by tenant config) ──
export const TEMPLATES = {
  apex: {
    home: () => import('./Apex').then(m => m.default),
    services: () => import('./sub-pages/ApexServices').then(m => m.default),
    about: () => import('./sub-pages/ApexAbout').then(m => m.default),
    contact: () => import('./sub-pages/ApexContact').then(m => m.default),
  },
  // kinetic: { ... },
  // lumina: { ... },
  // momentum: { ... },
  // atelier: { ... },
};

export const TEMPLATE_NAMES = Object.keys(TEMPLATES);
