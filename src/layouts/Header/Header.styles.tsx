import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    transition: '0.3s',
  },

  header_active: {
    position: 'fixed',
    boxShadow: theme.shadows.md,
    backgroundColor: theme.fn.lighten(theme.colors.cyan[0], 0.6),
  },

  container: {
    height: '100%',
    justifyContent: 'center',

    [theme.fn.largerThan('xs')]: {
      justifyContent: 'space-between',
    },
  },

  logo: {
    textDecoration: 'none',
    fontWeight: 600,
    color: theme.colors.cyan[6],
    transition: '0.3s',
    fontSize: 30,

    ['&:hover']: {
      color: theme.colors.cyan[7],
    },
  },

  logo_image: {
    maxHeight: 40,
    width: 'auto',
  },
}));

export default useStyles;
