import type { Brand } from '../data/brands';
import { copy, type CopyKey } from '../data/copy';
import { shopper } from '../data/shopper';
import { dates, longDate, shortDate } from './dates';

export type T = (key: CopyKey) => string;

export function makeT(brand: Brand): T {
  const product = (id: string) => brand.catalog.find((p) => p.id === id);
  const p1 = product(shopper.bought[0]);
  const p2 = product(shopper.bought[1]);
  const start = shopper.startScores;

  const vars: Record<string, string> = {
    name: shopper.name,
    brand: brand.name,
    p1short: p1?.short ?? '',
    p2short: p2?.short ?? '',
    analysisDate: longDate(dates.analysis),
    todayDate: longDate(dates.today),
    week8Date: longDate(dates.week8),
    startDateShort: shortDate(dates.delivery),
    week8DateShort: shortDate(dates.week8),
    hydrationStart: String(start.hydration),
    textureStart: String(start.texture),
    rednessStart: String(start.redness),
  };

  return (key) => {
    const text: string = brand.tone.copy[key] ?? copy[key];
    return text.replace(/\{(\w+)\}/g, (match, name: string) => vars[name] ?? match);
  };
}
