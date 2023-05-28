import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    color: theme.colors.gray[6],

    [':hover']: {
      color: theme.colors[theme.primaryColor][6],
      backgroundColor: 'transparent',
    },
  },
}));

export default useStyles;
