import type { CSSProperties } from 'react';
import { plumeraCatalog, sunfoldCatalog, type Product } from './catalog';
import type { Copy } from './copy';

export interface Brand {
  id: string;
  name: string;
  logo: { text: string; letterSpacing: string; weight: number };
  color: string;
  font: { name: string; stack: string };
  tone: { name: string; copy: Partial<Copy> };
  catalog: Product[];
}

const sunfold: Brand = {
  id: 'sunfold',
  name: 'Sunfold',
  logo: { text: 'sunfold', letterSpacing: '-0.01em', weight: 800 },
  color: '#b5573a',
  font: { name: 'Nunito', stack: "'Nunito', ui-rounded, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" },
  tone: {
    name: 'Chatty and caring',
    copy: {
      'email.greeting': 'Hey {name}!',
      'email.products': "It's been three weeks with your new routine.",
      'opening.check': "Before we go on, let's make sure I remember everything right.",
      'reply.same': "Let's check in on how your skin is doing.",
      'q.sting.reply': 'Lovely. Your skin is taking it well.',
      'end.title': "You're right on track!",
      'later.title': 'Still right on track!',
    },
  },
  catalog: sunfoldCatalog,
};

const plumera: Brand = {
  id: 'plumera',
  name: 'Plumera',
  logo: { text: 'PLUMERA', letterSpacing: '0.12em', weight: 600 },
  color: '#6b4f96',
  font: { name: 'Inter', stack: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" },
  tone: { name: 'Quiet expert', copy: {} },
  catalog: plumeraCatalog,
};

export const brands: Brand[] = [sunfold, plumera];

function channels(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [n >> 16, (n >> 8) & 255, n & 255];
}

function textOn(hex: string): string {
  const [r, g, b] = channels(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.3 ? '27 31 38' : '255 255 255';
}

export function brandVars(brand: Brand): CSSProperties {
  return {
    '--color-brand': channels(brand.color).join(' '),
    '--color-text-on-brand': textOn(brand.color),
    '--font': brand.font.stack,
  } as CSSProperties;
}
