import { useLayoutEffect, useRef, useState } from 'react';
import type { CardKind } from '../data/script';
import { Analysing, BotRow, BotText, MessageControls, sampleFace, Typing, UserBubble } from '../parts/Bubble';
import { Button } from '../parts/Button';
import { CloseButton } from '../parts/CloseButton';
import { FirstRoutine, JourneyStart } from '../parts/FirstVisit';
import { Icon } from '../parts/Icon';
import { OnTrack, OnTrackPhoto, StillOnTrack } from '../parts/NextStep';
import { Options } from '../parts/Options';
import { Request } from '../parts/Request';
import { Routine } from '../parts/Routine';
import { TodayTimeline } from '../parts/RoutineTimeline';
import { busyOf, TODAY_ID, type Item } from '../state/flow';
import { useApp, useFlow } from '../state/store';
import { Portrait } from './Portrait';

const cards: Record<CardKind, () => JSX.Element> = {
  routine: Routine,
  timeline: TodayTimeline,
  onTrack: () => <OnTrack />,
  onTrackPhoto: OnTrackPhoto,
  stillOnTrack: StillOnTrack,
  firstRoutine: FirstRoutine,
  journeyStart: JourneyStart,
  request: Request,
};

function Card({ card }: { card: CardKind }) {
  const Part = cards[card];
  return <Part />;
}

const fromChat = (item?: Item) => item?.kind === 'say' || item?.kind === 'card' || item?.kind === 'ask';

const PEEK = 76;

const isPrevious = (item: Item) => item.id < TODAY_ID;

export function Chat() {
  const { t, notPlayed } = useApp();
  const { state, dispatch } = useFlow();
  const busy = busyOf(state);

  const threadRef = useRef<HTMLDivElement>(null);
  const byHand = useRef(false);
  const atBottom = useRef(true);
  const [below, setBelow] = useState(false);
  const [showPrevious, setShowPrevious] = useState(false);

  const measure = () => {
    const el = threadRef.current;
    if (!el) return;
    const rest = el.scrollHeight - el.scrollTop - el.clientHeight;
    atBottom.current = rest < 48;
    setBelow(rest > 96);
  };

  useLayoutEffect(() => {
    byHand.current = false;
  }, [state.anchorId]);

  useLayoutEffect(() => {
    const el = threadRef.current;
    if (!el) return;
    const find = (id: number) => el.querySelector<HTMLElement>(`[data-id="${id}"]`);
    const max = el.scrollHeight - el.clientHeight;
    const go = (top: number) => el.scrollTo({ top: Math.max(0, Math.min(max, top)), behavior: 'smooth' });

    if (byHand.current) {
      if (atBottom.current) {
        const newest = find(state.thread[state.thread.length - 1].id);
        go(newest ? Math.min(max, newest.offsetTop - 12) : max);
      }
    } else {
      const anchor = find(state.anchorId);
      const offset = state.anchorId === TODAY_ID ? PEEK : 12;
      go(anchor ? anchor.offsetTop - offset : max);
    }
    const id = window.setTimeout(measure, 400);
    return () => window.clearTimeout(id);
  }, [state.thread, state.anchorId, busy]);

  const toBottom = () => {
    const el = threadRef.current;
    if (!el) return;
    byHand.current = true;
    atBottom.current = true;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  };
  const scrolledByHand = () => {
    byHand.current = true;
  };

  const todayTop = useRef<number | null>(null);
  const openPrevious = () => {
    const today = threadRef.current?.querySelector<HTMLElement>(`[data-id="${TODAY_ID}"]`);
    todayTop.current = today ? today.getBoundingClientRect().top : null;
    byHand.current = true;
    setShowPrevious(true);
  };
  useLayoutEffect(() => {
    const el = threadRef.current;
    const today = el?.querySelector<HTMLElement>(`[data-id="${TODAY_ID}"]`);
    if (el && today && todayTop.current !== null) {
      el.scrollTop += today.getBoundingClientRect().top - todayTop.current;
      todayTop.current = null;
    }
    measure();
  }, [showPrevious]);

  const last = state.thread[state.thread.length - 1];

  const controlsAfter = (i: number) => {
    const item = state.thread[i];
    if (!fromChat(item) || item.kind === 'ask' || fromChat(state.thread[i + 1])) return false;
    return !(i === state.thread.length - 1 && busy);
  };

  return (
    <div className="chat">
      <header className="chat-head">
        <button type="button" className="portrait-chip" onClick={() => dispatch({ type: 'OPEN_VIEW' })}>
          <span className="portrait-face">
            <img src={sampleFace} alt="" />
          </span>
          <span className="portrait-name">{t('chat.portrait')}</span>
          <span className="portrait-week">{t('week.short')}</span>
        </button>
        <CloseButton onClick={() => dispatch({ type: 'CLOSE_CHAT' })} label={t('chat.close')} />
      </header>

      <div
        className="thread"
        ref={threadRef}
        onScroll={measure}
        onWheel={scrolledByHand}
        onTouchMove={scrolledByHand}
      >
        {!showPrevious && (
          <div className="previous">
            <Button size="s" look="grey" round onClick={openPrevious}>
              {t('chat.previous')}
              <Icon name="chevron" size={12} turn={90} />
            </Button>
          </div>
        )}
        <div className="messages">
          {state.thread.map((item, i) => {
            if (!showPrevious && isPrevious(item)) return null;
            const lead = !fromChat(state.thread[i - 1]);
            const isNew = !isPrevious(item);
            return (
              <div key={item.id} data-id={item.id} className={`item item--${item.kind}`}>
                {item.kind === 'date' && t(item.key)}
                {item.kind === 'user' && <UserBubble isNew={isNew}>{t(item.key)}</UserBubble>}
                {item.kind === 'say' && (
                  <BotRow lead={lead} isNew={isNew}>
                    <BotText>{t(item.key)}</BotText>
                  </BotRow>
                )}
                {item.kind === 'card' && (
                  <BotRow lead={lead} isNew={isNew}>
                    <Card card={item.card} />
                  </BotRow>
                )}
                {item.kind === 'ask' && (
                  <BotRow lead={lead} isNew={isNew}>
                    {item.card && <Card card={item.card} />}
                    {item.lead && <BotText>{item.lead.map((key) => t(key)).join(' ')}</BotText>}
                    <BotText>{t(item.key)}</BotText>
                    {(item.style === 'rows' || !item.answered) && (
                      <Options
                        chips={item.chips}
                        style={item.style}
                        picked={item.picked}
                        onPick={(chip) => dispatch({ type: 'ANSWER', askId: item.askId, chip })}
                      />
                    )}
                  </BotRow>
                )}
                {controlsAfter(i) && <MessageControls />}
              </div>
            );
          })}
          {busy && (
            <div className="item">
              {busy === 'typing' ? <Typing lead={!fromChat(last)} /> : <Analysing lead={!fromChat(last)} />}
            </div>
          )}
        </div>
      </div>

      <Button
        size="m"
        look="dark"
        icon
        className={below ? 'scroll-down is-on' : 'scroll-down'}
        onClick={toBottom}
        tabIndex={below ? 0 : -1}
        aria-hidden={!below}
      >
        <Icon name="chevron" size={20} turn={90} />
      </Button>

      <footer className="chat-foot">
        <div className="field">
          <button type="button" className="field-text" onClick={() => notPlayed()}>
            {t('chat.input')}
          </button>
          <Button size="m" look="dark" icon disabled aria-label={t('chat.send')}>
            <Icon name="arrow" size={20} />
          </Button>
        </div>
        <p className="footnote">{t('chat.disclaimer')}</p>
      </footer>

      <Portrait />
    </div>
  );
}
