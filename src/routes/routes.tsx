import { CheckAuth, ProtectedRoute } from '@components';
import { APP_SETTINGS } from '@constants';
import { BaseLayout } from '@layouts';
import { AuthentificationPage, ErrorPage, GraphQlPage, LogInPage, WelcomePage } from '@pages';

const routes = [
  {
    path: '',
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <WelcomePage />,
      },
      {
        path: APP_SETTINGS.PAGES.GRAPHQL.ROUTE,
        element: <ProtectedRoute outlet={<GraphQlPage />} />,
      },
      {
        path: APP_SETTINGS.PAGES.AUTHENTICATION.ROUTE,
        element: <CheckAuth outlet={<AuthentificationPage />} />,
      },
      {
        path: APP_SETTINGS.PAGES.LOGIN.ROUTE,
        element: <CheckAuth outlet={<LogInPage />} />,
      },
    ],
  },
];

export default routes;
