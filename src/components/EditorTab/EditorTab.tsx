import { useState } from 'react';

import { CodeEditor } from '@components';
import { useEditor } from '@hooks';
import { Box, Button, Group, Stack } from '@mantine/core';

import useStyles from './EditorTab.styles';

const EditorTab = () => {
  const { classes } = useStyles();
  const { query, setQuery, code, onMutate, isLoading } = useEditor();

  const [showVariables, setShowVariables] = useState<boolean>(false);
  const [showHeaders, setShowHeaders] = useState<boolean>(false);

  return (
    <>
      <Group className={classes.header}>
        <Button
          variant="subtle"
          onClick={() => {
            setShowVariables((show) => !show);
            setShowHeaders(false);
          }}
          disabled={isLoading}
        >
          Variables
        </Button>
        <Button
          variant="subtle"
          onClick={() => {
            setShowHeaders((show) => !show);
            setShowVariables(false);
          }}
          disabled={isLoading}
        >
          Headers
        </Button>
        <Button onClick={onMutate} disabled={isLoading}>
          Run Query
        </Button>
      </Group>
      {showVariables && <Box>Variables</Box>}
      {showHeaders && <Box>Headers</Box>}
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
