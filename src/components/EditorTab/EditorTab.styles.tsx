import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    flex: 1,
  },

  box: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.gray[1],
    padding: 10,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan('xs')]: {
      padding: 5,
      fontSize: 12,
    },
  },

  header: {
    paddingBottom: 10,
    gap: 7,

    [theme.fn.smallerThan('xs')]: {
      justifyContent: 'center',
    },
  },

  variables: {
    padding: 10,
    borderRadius: theme.radius.md,
    marginBottom: 7,
    height: 'auto',

    maxHeight: 200,
  },
}));

export default useStyles;
