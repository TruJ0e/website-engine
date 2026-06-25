// Template registry — main templates + sub-pages

// ── Main Templates ──
export { default as Apex } from './Apex';
export { default as Lumina } from './Lumina';
export { default as Kinetic } from './Kinetic';
export { default as Momentum } from './Momentum';
export { default as Atelier } from './Atelier';

// ── Apex Sub-Pages ──
export { default as ApexServices } from './sub-pages/ApexServices';
export { default as ApexAbout } from './sub-pages/ApexAbout';
export { default as ApexContact } from './sub-pages/ApexContact';

// ── Lumina Sub-Pages ──
export { default as LuminaServices } from './sub-pages/LuminaServices';
export { default as LuminaAbout } from './sub-pages/LuminaAbout';
export { default as LuminaContact } from './sub-pages/LuminaContact';

// ── Kinetic Sub-Pages ──
export { default as KineticServices } from './sub-pages/KineticServices';
export { default as KineticAbout } from './sub-pages/KineticAbout';
export { default as KineticContact } from './sub-pages/KineticContact';

// ── Momentum Sub-Pages ──
export { default as MomentumServices } from './sub-pages/MomentumServices';
export { default as MomentumAbout } from './sub-pages/MomentumAbout';
export { default as MomentumContact } from './sub-pages/MomentumContact';

// ── Atelier Sub-Pages ──
export { default as AtelierServices } from './sub-pages/AtelierServices';
export { default as AtelierAbout } from './sub-pages/AtelierAbout';
export { default as AtelierContact } from './sub-pages/AtelierContact';

// ── Template map (for dynamic lookup by tenant config) ──
export const TEMPLATES = {
  apex: {
    home: () => import('./Apex').then(m => m.default),
    services: () => import('./sub-pages/ApexServices').then(m => m.default),
    about: () => import('./sub-pages/ApexAbout').then(m => m.default),
    contact: () => import('./sub-pages/ApexContact').then(m => m.default),
  },
  lumina: {
    home: () => import('./Lumina').then(m => m.default),
    services: () => import('./sub-pages/LuminaServices').then(m => m.default),
    about: () => import('./sub-pages/LuminaAbout').then(m => m.default),
    contact: () => import('./sub-pages/LuminaContact').then(m => m.default),
  },
  kinetic: {
    home: () => import('./Kinetic').then(m => m.default),
    services: () => import('./sub-pages/KineticServices').then(m => m.default),
    about: () => import('./sub-pages/KineticAbout').then(m => m.default),
    contact: () => import('./sub-pages/KineticContact').then(m => m.default),
  },
  momentum: {
    home: () => import('./Momentum').then(m => m.default),
    services: () => import('./sub-pages/MomentumServices').then(m => m.default),
    about: () => import('./sub-pages/MomentumAbout').then(m => m.default),
    contact: () => import('./sub-pages/MomentumContact').then(m => m.default),
  },
  atelier: {
    home: () => import('./Atelier').then(m => m.default),
    services: () => import('./sub-pages/AtelierServices').then(m => m.default),
    about: () => import('./sub-pages/AtelierAbout').then(m => m.default),
    contact: () => import('./sub-pages/AtelierContact').then(m => m.default),
  },
};

export const TEMPLATE_NAMES = Object.keys(TEMPLATES);
