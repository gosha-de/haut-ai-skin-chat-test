import { answerKey, answers, PLAYED } from '../data/script';
import { CloseButton } from '../parts/CloseButton';
import { Icon, type IconName } from '../parts/Icon';
import { Logo } from '../parts/Logo';
import { useApp } from '../state/store';

const tools: IconName[] = ['trash', 'folder', 'reply', 'compose'];

export function Email({ onClose }: { onClose: () => void }) {
  const { t, brand, notPlayed } = useApp();

  return (
    <div className="mail">
      <div className="mail-nav">
        <div className="close-spot">
          <CloseButton onClick={onClose} label={t('mail.close')} />
        </div>
      </div>

      <div className="mail-scroll">
        <header className="mail-head">
          <span className="mail-avatar" aria-hidden="true">
            {brand.name.charAt(0)}
          </span>
          <div className="mail-who">
            <span className="mail-name">{t('email.from')}</span>
            <span className="mail-to">
              {t('mail.to')} <span className="mail-link">{t('mail.toName')}</span>
              <Icon name="chevron" size={12} stroke={2.4} />
            </span>
          </div>
          <span className="mail-time">{t('mail.time')}</span>
        </header>

        <h1 className="mail-subject">{t('email.subject')}</h1>

        <article className="mail-body">
          <div className="mail-brand">
            <Logo />
          </div>

          <div className="mail-text">
            <p>{t('email.greeting')}</p>
            <p>{t('email.products')}</p>
            <p>{t('email.words')}</p>
          </div>

          <div>
            <h2 className="mail-question">{t('email.question')}</h2>
            <p className="mail-promise">{t('email.promise')}</p>
            <div className="mail-answers">
              {answers.map((answer) =>
                answer === PLAYED ? (
                  <a key={answer} className="option" href={`#/chat?answer=${answer}`}>
                    {t(answerKey[answer])}
                  </a>
                ) : (
                  <button key={answer} type="button" className="option" onClick={() => notPlayed(t(answerKey[PLAYED]))}>
                    {t(answerKey[answer])}
                  </button>
                ),
              )}
            </div>
          </div>

          <footer className="mail-foot">
            <p>{t('email.why')}</p>
            <p className="mail-foot-links">
              <span className="mail-foot-link">{t('email.pause')}</span>
              <span aria-hidden="true">·</span>
              <span className="mail-foot-link">{t('email.unsubscribe')}</span>
            </p>
          </footer>
        </article>
      </div>

      <footer className="mail-bar" aria-hidden="true">
        {tools.map((tool) => (
          <span key={tool}>
            <Icon name={tool} size={26} stroke={1.6} />
          </span>
        ))}
      </footer>
    </div>
  );
}
