export type Answer = 'good' | 'same' | 'off';
export type MetricId = 'hydration' | 'texture' | 'redness';

export const shopper = {
  name: 'Maya',
  bought: ['serum', 'night-cream'],
  notBought: ['cleanser'],
  routine: ['cleanser', 'serum', 'night-cream'],
  concernMetrics: ['hydration', 'texture'] as MetricId[],
  startScores: { hydration: 62, texture: 64, redness: 87 } as Record<MetricId, number>,
};

export const days = {
  analysis: -3,
  delivery: 0,
  today: 21,
  week8: 56,
};

export const journey = {
  week: 3,
  weeks: 8,
  marks: [0, 3],
};

export const photoScores: Record<MetricId, number> = { hydration: 64, texture: 63, redness: 86 };
