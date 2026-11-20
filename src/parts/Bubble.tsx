import type { ReactNode } from 'react';
import { useApp } from '../state/store';
import { Icon } from './Icon';

const base = import.meta.env.BASE_URL;
export const sampleFace = `${base}faces/sample.jpg`;

export function UserBubble({ children, isNew = false }: { children: ReactNode; isNew?: boolean }) {
  return (
    <div className="msg-user">
      <p className={isNew ? 'bubble is-new' : 'bubble'}>{children}</p>
    </div>
  );
}

export function BotRow({ children, lead = false, isNew = false }: { children: ReactNode; lead?: boolean; isNew?: boolean }) {
  return (
    <div className={isNew ? 'msg-bot is-new' : 'msg-bot'}>
      <span className={lead ? 'avatar' : 'avatar is-hidden'} aria-hidden="true" />
      <div className="msg-text">{children}</div>
    </div>
  );
}

export function BotText({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

function Working({ lead, text }: { lead: boolean; text: string }) {
  return (
    <BotRow lead={lead}>
      <span className="shine">{text}</span>
    </BotRow>
  );
}

export function Typing({ lead }: { lead: boolean }) {
  const { t } = useApp();
  return <Working lead={lead} text={t('chat.thinking')} />;
}

export function Analysing({ lead }: { lead: boolean }) {
  const { t } = useApp();
  return <Working lead={lead} text={t('chat.analysing')} />;
}

export function MessageControls() {
  const { t, notPlayed } = useApp();
  return (
    <div className="msg-controls">
      <button type="button" className="thumb" onClick={() => notPlayed()} aria-label={t('chat.like')}>
        <Icon name="thumbUp" size={20} />
      </button>
      <button type="button" className="thumb" onClick={() => notPlayed()} aria-label={t('chat.dislike')}>
        <Icon name="thumbDown" size={20} />
      </button>
    </div>
  );
}
