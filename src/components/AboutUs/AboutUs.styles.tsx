import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
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
    maxWidth: 220,
    borderRadius: '50%',
    overflow: 'hidden',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: 150,
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
