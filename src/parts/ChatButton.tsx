import { useApp, useFlow } from '../state/store';
import { Icon } from './Icon';

export function ChatButton() {
  const { t } = useApp();
  const { state, dispatch } = useFlow();
  const open = () => dispatch({ type: 'OPEN_CHAT' });

  const showNote = state.entry === 'site' && !state.noteClosed && !state.started;

  return (
    <div className={state.chatOpen ? 'launcher is-hidden' : 'launcher'}>
      {showNote && (
        <div className="launcher-note">
          <button className="launcher-note-text" onClick={open}>
            {t('note.text')}
          </button>
          <button className="launcher-note-close" onClick={() => dispatch({ type: 'CLOSE_NOTE' })} aria-label={t('note.close')}>
            <Icon name="cross" size={16} />
          </button>
        </div>
      )}
      <button className="launcher-button" onClick={open} aria-label={t('button.open')}>
        <Icon name="chat" size={26} />
      </button>
    </div>
  );
}
