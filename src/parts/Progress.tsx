import { shopper } from '../data/shopper';
import { dates, shortDate } from '../state/dates';
import { metricKey, moveKey, scoreLines } from '../state/scores';
import { useApp, useFlow } from '../state/store';
import { sampleFace } from './Bubble';
import { Icon } from './Icon';

export function Photos() {
  const { t } = useApp();
  const { state } = useFlow();
  return (
    <div className="photos">
      <figure className="photo">
        <img src={sampleFace} alt={t('photo.alt')} />
        <figcaption className="photo-time">
          <Icon name="clock" size={12} />
          {shortDate(dates.analysis)}
        </figcaption>
      </figure>
      {state.photo && (
        <figure className="photo">
          <img src={sampleFace} alt={t('photo.alt')} />
          <figcaption className="photo-time">
            <Icon name="clock" size={12} />
            {t('today')}
          </figcaption>
        </figure>
      )}
    </div>
  );
}

export function Scores() {
  const { t } = useApp();
  const { state } = useFlow();
  const lines = state.photo ? scoreLines() : null;

  return (
    <div className="scores">
      {!lines && <p className="caption">{t('view.scoresStart')}</p>}
      <ul className="stats">
        {lines
          ? lines.map((line) => (
              <li key={line.metric} className="stat">
                <span className="stat-label">{t(metricKey(line.metric))}</span>
                <span className="stat-value">
                  {t(moveKey(line))}
                  <small className="stat-note">
                    {line.start} → {line.now}
                  </small>
                </span>
              </li>
            ))
          : shopper.concernMetrics.map((metric) => (
              <li key={metric} className="stat">
                <span className="stat-label">{t(metricKey(metric))}</span>
                <span className="stat-value">{shopper.startScores[metric]}</span>
              </li>
            ))}
      </ul>
      <p className="caption">{t('view.scoresNote')}</p>
    </div>
  );
}

export function Compare() {
  return (
    <div className="compare">
      <Photos />
      <Scores />
    </div>
  );
}
