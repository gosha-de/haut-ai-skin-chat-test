import { ChatButton } from '../parts/ChatButton';
import { CloseButton } from '../parts/CloseButton';
import { Logo } from '../parts/Logo';
import { Sheet } from '../parts/Sheet';
import { useApp, useFlow } from '../state/store';
import { Chat } from './Chat';

export function BrandPage({ onClose }: { onClose: () => void }) {
  const { t } = useApp();
  const { state, dispatch } = useFlow();

  return (
    <div className="site">
      <div className="site-page">
        <header className="site-head">
          <Logo />
          <div className="close-spot">
            <CloseButton onClick={onClose} label={t('site.close')} />
          </div>
        </header>
        <div className="site-hero" aria-hidden="true" />
        <div className="site-lines" aria-hidden="true">
          <i style={{ width: '70%' }} />
          <i style={{ width: '92%' }} />
          <i style={{ width: '54%' }} />
        </div>
        <div className="site-grid" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>

      <ChatButton />

      <Sheet open={state.chatOpen} onClose={() => dispatch({ type: 'CLOSE_CHAT' })} label={t('chat.portrait')}>
        <Chat />
      </Sheet>
    </div>
  );
}
