import { days } from '../data/shopper';

function fromToday(offset: number): Date {
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  d.setDate(d.getDate() + offset);
  return d;
}

const at = (day: number) => fromToday(day - days.today);

export const dates = {
  analysis: at(days.analysis),
  delivery: at(days.delivery),
  today: at(days.today),
  week8: at(days.week8),
};

export function longDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
}

export function shortDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}
