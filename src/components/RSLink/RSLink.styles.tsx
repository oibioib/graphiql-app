import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  link: {
    width: 70,
    color: theme.colors[theme.primaryColor][6],
    transition: '0.3s',
    cursor: 'pointer',

    ['&:hover']: {
      color: theme.colors[theme.primaryColor][7],
    },
  },
}));

export default useStyles;
