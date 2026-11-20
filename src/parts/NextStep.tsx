import { demo } from '../data/start';
import { useApp } from '../state/store';
import { Button } from './Button';
import { Compare } from './Progress';
import { NextTimeline } from './RoutineTimeline';

export function OnTrack({ photo = false }: { photo?: boolean }) {
  const { t } = useApp();
  return (
    <>
      <h2 className="msg-h1">{t('end.title')}</h2>
      <p>
        {t('end.cheer')} {t('end.text.same')}
      </p>
      {photo && (
        <>
          <Compare />
          <p className="msg-h2">{t('fix.title')}</p>
          <ul className="bullets">
            <li>{t('fix.use')}</li>
            <li>{t('fix.day')}</li>
            <Winter />
          </ul>
        </>
      )}
      {!photo && (
        <>
          <p className="msg-h2">{t('tips.title')}</p>
          <ul className="bullets">
            <li>{t('tips.more')}</li>
            <Winter />
          </ul>
        </>
      )}
      <p className="msg-h2">{t('started.expectTitle')}</p>
      <p>{t('end.expect')}</p>
      <NextCheck />
    </>
  );
}

function Winter() {
  const { t, note } = useApp();
  const [before, after] = t('fix.winter').split('{link}');
  return (
    <li>
      <span>
        {before}
        <button type="button" className="link" onClick={() => note(demo.upsellNote)}>
          {t('fix.winter.link')}
        </button>
        {after}
      </span>
    </li>
  );
}

export function OnTrackPhoto() {
  return <OnTrack photo />;
}

export function StillOnTrack() {
  const { t } = useApp();
  return (
    <>
      <h2 className="msg-h1">{t('later.title')}</h2>
      <p>{t('later.text.same')}</p>
      <Compare />
      <p className="msg-h2">{t('fix.title')}</p>
      <ul className="bullets">
        <li>{t('fix.use')}</li>
        <li>{t('fix.day')}</li>
      </ul>
    </>
  );
}

function NextCheck() {
  const { t, note } = useApp();

  return (
    <>
      <p className="msg-h2">{t('next.week8.title')}</p>
      <p>{t('next.week8.text')}</p>
      <div className="actions">
        <Button size="s" look="grey" round onClick={() => note(demo.skipNote)}>
          {t('next.skip')}
        </Button>
      </div>
      <NextTimeline />
    </>
  );
}
