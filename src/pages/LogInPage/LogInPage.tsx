import { useState } from 'react';

import { FormAuth, FormRedirect, NotificationLoading } from '@components';
import { APP_SETTINGS } from '@constants';
import { showNotificationsError } from '@helpers';
import { auth } from '@helpers/firebase';
import { Container, Flex, Paper } from '@mantine/core';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LogInPage = () => {
  const [isloading, setLoading] = useState(false);

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
        {isloading ? <NotificationLoading /> : null}
        <Paper withBorder shadow="md" p={30} radius="md">
          <FormAuth title="Sign In" handleSubmit={handleLogin}></FormAuth>
          <FormRedirect
            question="Do not have an account yet?"
            title="Create account"
            redirectRoute={signUpRoute}
          ></FormRedirect>
        </Paper>
      </Container>
    </Flex>
  );
};

export default LogInPage;
