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

  photo: {
    display: 'block',
    maxWidth: 100,
    borderRadius: '50%',
    overflow: 'hidden',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: 80,
    },
  },

  name: {
    fontWeight: 600,
    fontSize: 22,
  },

  github: {
    fontWeight: 600,
    fontSize: 18,
  },
}));

export default useStyles;
