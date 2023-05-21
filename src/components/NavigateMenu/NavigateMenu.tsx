import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { APP_SETTINGS } from '@constants';
import { auth } from '@helpers/firebase';
import { Button } from '@mantine/core';
import { signOut } from 'firebase/auth';

const NavigateMenu = () => {
  const [user] = useAuthState(auth);
  const { t } = useTranslation();

  return (
    <>
      {!user ? (
        <>
          <Button component={Link} to={APP_SETTINGS.PAGES.AUTHENTICATION.ROUTE}>
            {t('buttons.registration')}
          </Button>
          <Button component={Link} to={APP_SETTINGS.PAGES.LOGIN.ROUTE}>
            {t('buttons.login')}
          </Button>
        </>
      ) : (
        <>
          <Button component={Link} to={APP_SETTINGS.PAGES.GRAPHQL.ROUTE}>
            {t('buttons.main')}
          </Button>
          <Button onClick={() => signOut(auth)}>{t('buttons.logout')}</Button>
        </>
      )}
    </>
  );
};
export default NavigateMenu;
