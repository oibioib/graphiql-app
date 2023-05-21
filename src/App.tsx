import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { useAppColorScheme } from '@hooks';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { routes } from '@routes';
import { theme } from '@theme';

const router = createBrowserRouter(routes);

const App = () => {
  const [colorScheme, toggleColorScheme] = useAppColorScheme();

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme, ...theme }}>
        <Notifications position="top-center" limit={3} />
        <RouterProvider router={router} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
