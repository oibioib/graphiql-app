import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    border: 0,
  },

  container: {
    width: '100%',
  },

  group: {
    justifyContent: 'center',

    [theme.fn.largerThan('xs')]: {
      justifyContent: 'space-around',
    },
  },

  members: {
    justifyContent: 'center',
    gap: 5,
  },

  year: {
    color: theme.colors.gray[6],
    fontWeight: 700,
    fontSize: 14,
  },
}));

export default useStyles;
