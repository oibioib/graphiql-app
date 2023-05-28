import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    gap: 50,
  },

  card: {
    textAlign: 'center',
    gap: 20,
    alignItems: 'center',
  },

  title: {
    paddingBottom: 12,
    textAlign: 'center',
  },

  photo: {
    display: 'block',
    maxWidth: 140,
    borderRadius: '50%',
    overflow: 'hidden',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: 100,
    },
  },

  name: {
    fontWeight: 600,
    fontSize: 20,
  },

  github: {
    fontWeight: 600,
    fontSize: 16,
  },
}));

export default useStyles;
