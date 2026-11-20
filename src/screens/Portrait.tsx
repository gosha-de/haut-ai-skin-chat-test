import { journey } from '../data/shopper';
import { Button } from '../parts/Button';
import { Icon } from '../parts/Icon';
import { Photos, Scores } from '../parts/Progress';
import { useApp, useFlow } from '../state/store';

export function Portrait() {
  const { t, notPlayed } = useApp();
  const { state, dispatch } = useFlow();

  return (
    <div
      className={state.viewOpen ? 'cover is-open' : 'cover'}
      role="dialog"
      aria-label={t('chat.portrait')}
      aria-hidden={!state.viewOpen}
    >
      <header className="nav">
        <Button size="s" look="grey" round className="btn-back" onClick={() => dispatch({ type: 'CLOSE_VIEW' })}>
          <span className="btn-back-label">
            <Icon name="chevron" size={16} turn={180} />
            {t('view.back')}
          </span>
        </Button>
        <h1 className="nav-title">{t('chat.portrait')}</h1>
      </header>

      <div className="cover-body">
        <section className="section">
          <div className="section-head">
            <h2 className="page-h2">{t('view.analysis')}</h2>
            <Button size="s" look="primary" round className="btn-new" onClick={() => notPlayed()} aria-label={t('view.new')}>
              <Icon name="plus" size={16} />
            </Button>
          </div>
          <Photos />
          {state.photo && <p className="msg-h2">{t('view.headline.B')}</p>}
          <Scores />
        </section>

        <section className="section">
          <h2 className="page-h2">{t('week.title')}</h2>
          <div className="week">
            <div className="week-bar" aria-hidden="true">
              <i style={{ width: `${(journey.week / journey.weeks) * 100}%` }} />
            </div>
            <div className="week-ends">
              <span>{t('week.start')}</span>
              <span>{t('week.end')}</span>
            </div>
          </div>
        </section>

        {state.finished && (
          <section className="section">
            <h2 className="page-h2">{t('next.week8.title')}</h2>
          </section>
        )}
      </div>
    </div>
  );
}
