import { createStyles, px } from '@mantine/core';

const useStyles = createStyles((theme) => {
  const tabsSpacing = theme.spacing.xs;

  return {
    tabs: {
      height: '100%',
    },

    tab: {
      paddingTop: tabsSpacing,
      height: `calc(100% - ${px(tabsSpacing) * 3}px)`,
    },
  };
});

export default useStyles;
