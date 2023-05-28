import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { routes } from '@routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '@theme';

import './i18n';

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Notifications position="top-center" limit={3} />
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
