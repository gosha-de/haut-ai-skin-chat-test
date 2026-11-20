import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';

interface Props {
  title?: string;
  points: string[];
  done: number;
  now?: boolean;
  justDone?: boolean;
  label: string;
}

function useSeen(on: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(!on);
  useEffect(() => {
    const el = ref.current;
    if (!on || !el) return;
    let timer = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = window.setTimeout(() => setSeen(true), 400);
      },
      { threshold: 1 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [on]);
  return { ref, seen };
}

export function Timeline({ title, points, done: doneIn, now: nowIn = false, justDone = false, label }: Props) {
  const { ref, seen } = useSeen(justDone);
  const waiting = justDone && !seen;
  const done = waiting ? doneIn - 1 : doneIn;
  const now = waiting || nowIn;
  const checked = justDone && seen ? doneIn - 1 : -1;

  const isDone = (i: number) => i < done;
  const isNow = (i: number) => now && i === done;
  const state = (i: number) =>
    isDone(i) ? (i === checked ? ' is-done is-checked' : ' is-done') : isNow(i) ? ' is-now' : '';
  const line = (i: number) => (isDone(i) || isNow(i) ? ' is-done' : '');

  return (
    <div className="timeline">
      {title && (
        <p className="msg-h2">{title}</p>
      )}
      <div className="timeline-row" role="img" aria-label={label} ref={ref}>
        {points.map((point, i) => (
          <span key={i} className="timeline-step" aria-hidden="true">
            {i > 0 && <span className={`timeline-line${line(i)}`} />}
            <span className={`timeline-point${state(i)}`}>
              {isDone(i) ? <Icon name="check" size={14} stroke={3.5} /> : point}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
