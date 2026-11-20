import { shopper } from '../data/shopper';
import { useApp } from '../state/store';
import { Products } from './Products';
import { StartTimeline } from './RoutineTimeline';

export function FirstRoutine() {
  const { brand } = useApp();
  const products = shopper.routine
    .map((id) => brand.catalog.find((p) => p.id === id))
    .filter((p) => p !== undefined);

  return <Products items={products} />;
}

export function JourneyStart() {
  const { t } = useApp();
  return (
    <>
      <p className="msg-h2">{t('started.expectTitle')}</p>
      <p>{t('started.expect')}</p>
      <p className="msg-h2">{t('started.nextTitle')}</p>
      <p>{t('started.promise')}</p>
      <StartTimeline />
    </>
  );
}
