import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { Loader } from '@components';
import { APP_SETTINGS } from '@constants';
import { auth } from '@helpers/firebase';

interface ProtectedRouteProps {
  outlet: JSX.Element;
}

const ProtectedRoute = ({ outlet }: ProtectedRouteProps) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to={APP_SETTINGS.PAGES.WELCOME.ROUTE} replace />;
  }

  return outlet;
};

export default ProtectedRoute;
