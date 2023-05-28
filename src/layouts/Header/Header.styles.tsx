import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    transition: '0.3s',
    position: 'fixed',
    display: 'flex',
    height: 80,

    [theme.fn.smallerThan('xs')]: {
      height: 110,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },

  header_active: {
    boxShadow: theme.shadows.md,
    backgroundColor: theme.fn.lighten(theme.colors.cyan[1], 0.6),
  },

  container: {
    height: '100%',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('xs')]: {
      justifyContent: 'center',
      gap: 5,
    },
  },

  logo: {
    textDecoration: 'none',
    fontWeight: 600,
    color: theme.colors[theme.primaryColor][6],
    transition: '0.3s',
    fontSize: 30,
    gap: 5,

    ['&:hover']: {
      color: theme.colors[theme.primaryColor][7],
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 25,
    },
  },

  logo_image: {
    maxHeight: 40,
    width: 'auto',

    [theme.fn.smallerThan('xs')]: {
      maxHeight: 30,
    },
  },
}));

export default useStyles;
