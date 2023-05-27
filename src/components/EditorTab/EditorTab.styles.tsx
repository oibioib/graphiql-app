import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    height: '100%',
    gap: theme.spacing.xs,
  },

  box: {
    height: '100%',
    backgroundColor: theme.colors.gray[1],
    padding: 10,
    borderRadius: theme.radius.md,
  },
}));

export default useStyles;
