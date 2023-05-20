import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import { APP_SETTINGS } from '@constants';
import { auth } from '@helpers/firebase';
import { Button } from '@mantine/core';
import { signOut } from 'firebase/auth';

const NavigateMenu = () => {
  const color = 'orange';
  const [user] = useAuthState(auth);

  return (
    <>
      {!user ? (
        <>
          <Button component={Link} to={APP_SETTINGS.PAGES.AUTHENTICATION.ROUTE} color={color}>
            SignUp
          </Button>
          <Button component={Link} to={APP_SETTINGS.PAGES.LOGIN.ROUTE} color={color}>
            SignIn
          </Button>
        </>
      ) : (
        <>
          <Button component={Link} to={APP_SETTINGS.PAGES.GRAPHQL.ROUTE} color={color}>
            Go to Main Page
          </Button>
          <Button color={color} onClick={() => signOut(auth)}>
            Go out
          </Button>
        </>
      )}
    </>
  );
};
export default NavigateMenu;
