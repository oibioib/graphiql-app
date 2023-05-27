import { CodeEditor } from '@components';
import { useEditor } from '@hooks';
import { Box, Button, Center, Group, Stack } from '@mantine/core';

import useStyles from './EditorTab.styles';

const EditorTab = () => {
  const { classes } = useStyles();
  const { query, setQuery, code, onMutate, isLoading } = useEditor();

  return (
    <>
      <Center pb={10}>
        <Button onClick={onMutate} disabled={isLoading}>
          Run Query
        </Button>
      </Center>
      <Group grow spacing={7} className={classes.container}>
        <Box className={classes.box}>
          <CodeEditor code={query} isActive={true} onChange={setQuery} />
        </Box>
        <Stack sx={{ height: '100%' }}>
          <Box className={classes.box}>
            <CodeEditor code={code} isActive={false} />
          </Box>
        </Stack>
      </Group>
    </>
  );
};

export default EditorTab;
