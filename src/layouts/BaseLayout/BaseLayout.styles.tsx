import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  main: {
    padding: '7px 0',
  },

  body: {
    marginTop: 80,

    [theme.fn.smallerThan('xs')]: {
      marginTop: 110,
    },
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
