import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FormAuth, FormRedirect, NotificationLoading } from '@components';
import { APP_SETTINGS } from '@constants';
import { showNotificationsError } from '@helpers';
import { auth } from '@helpers/firebase';
import { Container, Flex, Paper, Title } from '@mantine/core';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LogInPage = () => {
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      showNotificationsError(err);
    } finally {
      setLoading(false);
    }
  };

  const signUpRoute = APP_SETTINGS.PAGES.AUTHENTICATION.ROUTE;

  return (
    <Flex align="center" h="100%">
      <Container size={440} p={0} w="100%">
        {isLoading ? <NotificationLoading /> : null}
        <Paper withBorder shadow="md" p={30} radius="md">
          <Title order={1} size="h2" pb={10}>
            {t('pageTitle.login')}
          </Title>
          <FormAuth title={t('buttons.login')} handleSubmit={handleLogin}></FormAuth>
          <FormRedirect
            question={t('redirect.loginQuestion')}
            title={t('buttons.registration')}
            redirectRoute={signUpRoute}
          ></FormRedirect>
        </Paper>
      </Container>
    </Flex>
  );
};

export default LogInPage;
