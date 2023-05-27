import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
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
}));

export default useStyles;
