import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: 'center',
    gap: 30,
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    paddingBottom: 30,
  },

  subTitle: {
    textAlign: 'center',
  },

  list: {
    paddingTop: 10,
  },
}));

export default useStyles;
