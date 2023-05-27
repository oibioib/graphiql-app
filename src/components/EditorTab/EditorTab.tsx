import { Box, Group } from '@mantine/core';

import useStyles from './EditorTab.styles';

const EditorTab = () => {
  const { classes } = useStyles();

  return (
    <Group grow className={classes.container}>
      <Box className={classes.box}>1</Box>
      <Box className={classes.box}>2</Box>
    </Group>
  );
};

export default EditorTab;
