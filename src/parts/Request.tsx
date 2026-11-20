import { useApp } from '../state/store';

export function Request() {
  const { t } = useApp();
  return (
    <>
      <p className="msg-h2">{t('request.title')}</p>
      <p>{t('request.text')}</p>
      <p className="msg-h2">{t('lifestyle.title')}</p>
      <p>{t('lifestyle.text')}</p>
    </>
  );
}
