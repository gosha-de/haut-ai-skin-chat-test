import type { CopyKey } from '../data/copy';
import { journey } from '../data/shopper';
import { useApp } from '../state/store';
import { Timeline } from './Timeline';

const weeks = [...journey.marks, journey.weeks];

interface Props {
  done: number;
  now?: boolean;
  justDone?: boolean;
  title?: CopyKey;
  label: CopyKey;
}

function RoutineTimeline({ done, now, justDone, title, label }: Props) {
  const { t } = useApp();
  return (
    <Timeline
      title={title && t(title)}
      points={weeks.map(String)}
      done={done}
      now={now}
      justDone={justDone}
      label={t(label)}
    />
  );
}

export function StartTimeline() {
  return <RoutineTimeline done={1} title="timeline.titleStart" label="timeline.labelStart" />;
}

export function TodayTimeline() {
  return (
    <RoutineTimeline
      done={weeks.indexOf(journey.week)}
      now
      title="timeline.titleToday"
      label="timeline.labelToday"
    />
  );
}

export function NextTimeline() {
  return <RoutineTimeline done={weeks.indexOf(journey.week) + 1} justDone label="timeline.labelNext" />;
}
