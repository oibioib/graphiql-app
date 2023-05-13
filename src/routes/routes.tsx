import { APP_SETTINGS } from '@constants';
import { BaseLayout } from '@layouts';
import { AuthenticationPage, ErrorPage, GraphQlPage, MainPage } from '@pages';

const routes = [
  {
    path: '',
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: APP_SETTINGS.PAGES.GRAPHQL.ROUTE,
        element: <GraphQlPage />,
      },
      {
        path: APP_SETTINGS.PAGES.AUTHENTICATION.ROUTE,
        element: <AuthenticationPage />,
      },
    ],
  },
];

export default routes;
