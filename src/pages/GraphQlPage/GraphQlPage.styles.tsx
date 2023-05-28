import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  tabs: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },

  tab: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    paddingTop: theme.spacing.xs,
  },
}));

export default useStyles;
