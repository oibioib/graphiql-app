import { APP_SETTINGS } from '@constants';
import { BaseLayout } from '@layouts';
import { AuthentificationPage, ErrorPage, GraphQlPage, WelcomePage } from '@pages';

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
        element: <GraphQlPage />,
      },
      {
        path: APP_SETTINGS.PAGES.AUTHENTICATION.ROUTE,
        element: <AuthentificationPage />,
      },
    ],
  },
];

export default routes;
