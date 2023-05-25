import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FormAuth, FormRedirect, NotificationLoading } from '@components';
import { APP_SETTINGS } from '@constants';
import { showNotificationsError } from '@helpers';
import { auth, db } from '@helpers/firebase';
import { Container, Flex, Paper } from '@mantine/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

const AuthentificationPage = () => {
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleRegistration = async (email: string, password: string) => {
    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        authProvider: 'local',
        email,
      });
    } catch (err) {
      showNotificationsError(err);
    } finally {
      setLoading(false);
    }
  };

  const signInRoute = APP_SETTINGS.PAGES.LOGIN.ROUTE;

  return (
    <Flex align="center" h="100%">
      <Container size={440} p={0} w="100%">
        {isLoading ? <NotificationLoading /> : null}
        <Paper withBorder shadow="md" p={30} radius="md">
          <h2>{t('pageTitle.registration')}</h2>
          <FormAuth title={t('buttons.registration')} handleSubmit={handleRegistration}></FormAuth>
          <FormRedirect
            question={t('redirect.registrationQuestion')}
            title={t('buttons.login')}
            redirectRoute={signInRoute}
          ></FormRedirect>
        </Paper>
      </Container>
    </Flex>
  );
};

export default AuthentificationPage;
