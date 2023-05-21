import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import { APP_SETTINGS } from '@constants';
import { auth } from '@helpers/firebase';
import { Button } from '@mantine/core';
import { signOut } from 'firebase/auth';

const NavigateMenu = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      {!user ? (
        <>
          <Button component={Link} to={APP_SETTINGS.PAGES.AUTHENTICATION.ROUTE}>
            SignUp
          </Button>
          <Button component={Link} to={APP_SETTINGS.PAGES.LOGIN.ROUTE}>
            SignIn
          </Button>
        </>
      ) : (
        <>
          <Button component={Link} to={APP_SETTINGS.PAGES.GRAPHQL.ROUTE}>
            Go to Main Page
          </Button>
          <Button onClick={() => signOut(auth)}>Go out</Button>
        </>
      )}
    </>
  );
};
export default NavigateMenu;
