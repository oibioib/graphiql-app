import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    height: '100%',
  },

  box: {
    height: '100%',
    backgroundColor: theme.colors.gray[1],
    padding: 10,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan('xs')]: {
      padding: 5,
      fontSize: 12,
    },
  },
}));

export default useStyles;
