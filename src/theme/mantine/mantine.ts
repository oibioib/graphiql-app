import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  fontFamily: `'Inter', sans-serif`,
  primaryColor: 'cyan',
  components: {
    AppShell: {
      styles: {
        root: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
        body: {
          flexGrow: 1,
        },
        main: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
  },
};
