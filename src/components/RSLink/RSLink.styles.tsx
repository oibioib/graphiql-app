import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  link: {
    width: 60,
    color: theme.colors.gray[6],
    transition: '0.3s',
    cursor: 'pointer',

    ['&:hover']: {
      color: theme.colors[theme.primaryColor][6],
    },
  },
}));

export default useStyles;
