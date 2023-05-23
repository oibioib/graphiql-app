import { useTranslation } from 'react-i18next';

import { Notification } from '@mantine/core';

const NotificationLoading = () => {
  const { t } = useTranslation();
  return (
    <Notification loading title={t('notification.loadingTitle')}>
      {t('notification.loadingMessage')}
    </Notification>
  );
};

export default NotificationLoading;
