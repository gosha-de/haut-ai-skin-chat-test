import type { CopyKey } from '../data/copy';
import { photoScores, shopper, type MetricId } from '../data/shopper';

const VARIATION = 5;

type Move = 'better' | 'same' | 'worse';

interface ScoreLine {
  metric: MetricId;
  start: number;
  now: number;
  move: Move;
}

function moveOf(start: number, now: number): Move {
  const diff = now - start;
  if (diff >= VARIATION) return 'better';
  if (diff <= -VARIATION) return 'worse';
  return 'same';
}

const ORDER: Move[] = ['better', 'same', 'worse'];

export function scoreLines(): ScoreLine[] {
  const lines: ScoreLine[] = [];
  (Object.keys(shopper.startScores) as MetricId[]).forEach((metric) => {
    const value = photoScores[metric];
    const start = shopper.startScores[metric];
    const move = moveOf(start, value);
    const isConcern = shopper.concernMetrics.includes(metric);
    if (isConcern || move !== 'same') lines.push({ metric, start, now: value, move });
  });
  return lines.sort((a, b) => ORDER.indexOf(a.move) - ORDER.indexOf(b.move));
}

export function moveKey(line: ScoreLine): CopyKey {
  if (line.move === 'same') return 'score.same';
  if (line.metric === 'redness') {
    return line.move === 'worse' ? 'score.redness.worse' : 'score.redness.better';
  }
  return line.move === 'better' ? 'score.better' : 'score.worse';
}

export function metricKey(metric: MetricId): CopyKey {
  return `metric.${metric}` as CopyKey;
}
