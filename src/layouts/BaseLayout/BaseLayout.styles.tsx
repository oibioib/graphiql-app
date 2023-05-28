import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  main: {
    padding: '7px 0',
  },

  container: {
    flexGrow: 1,
    height: '100%',

    [theme.fn.smallerThan('xs')]: {
      padding: 7,
    },
  },
}));

export default useStyles;
