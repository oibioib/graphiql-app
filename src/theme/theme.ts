import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
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
  globalStyles: (theme) => ({
    ['::-webkit-scrollbar']: {
      width: 12,
      height: 12,

      [theme.fn.smallerThan('xs')]: {
        width: 7,
        height: 7,
      },
    },

    ['::-webkit-scrollbar-track']: {
      background: theme.colors.gray[3],
    },

    ['::-webkit-scrollbar-thumb']: {
      background: theme.colors.gray[5],
    },

    ['::-webkit-scrollbar-thumb:hover']: {
      background: theme.colors.cyan[6],
    },
  }),
};

export default theme;
