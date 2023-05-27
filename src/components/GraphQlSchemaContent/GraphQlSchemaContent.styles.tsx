import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    gap: theme.spacing.xs,
    overflowX: 'auto',
  },

  element: {
    backgroundColor: theme.colors.gray[1],
    padding: theme.spacing.sm,
    flexShrink: 0,
    borderRadius: theme.radius.lg,
  },

  indent_element: {
    paddingLeft: theme.spacing.sm,
  },

  bracket_before: {
    ['&::before']: {
      content: '"{"',
      marginLeft: 5,
      marginRight: 5,
    },
  },

  bracket_after: {
    ['&::after']: {
      content: '"}"',
      marginLeft: 5,
      marginRight: 5,
    },
  },

  bracket_after_open: {
    ['&::after']: {
      content: '"{"',
      marginLeft: 5,
      marginRight: 5,
    },
  },

  bracket_after_close: {
    ['&::after']: {
      content: '"}"',
    },
  },

  args: {
    marginRight: 5,
  },

  disabled: {
    fontWeight: 600,
  },
}));

export default useStyles;
