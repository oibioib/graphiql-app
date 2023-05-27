import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  editor: {
    height: '100%',
    overflowY: 'auto',

    '.cm-editor': {
      height: '100%',
    },

    '.cm-scroller': {
      backgroundColor: theme.colors.gray[1],
    },

    '.cm-activeLine': {
      backgroundColor: 'transparent',
    },
  },
}));

export default useStyles;
