import { useState } from 'react';

import { FormAuth, FormRedirect, NotificationLoading } from '@components';
import { APP_SETTINGS } from '@constants';
import { showNotificationsError } from '@helpers';
import { auth, db } from '@helpers/firebase';
import { Container, Flex, Paper } from '@mantine/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

const AuthentificationPage = () => {
  const [isloading, setLoading] = useState(false);

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
        {isloading ? <NotificationLoading /> : null}
        <Paper withBorder shadow="md" p={30} radius="md">
          <FormAuth title="Sign Up" handleSubmit={handleRegistration}></FormAuth>
          <FormRedirect
            question="Already have an account?"
            title="Login now"
            redirectRoute={signInRoute}
          ></FormRedirect>
        </Paper>
      </Container>
    </Flex>
  );
};

export default AuthentificationPage;
