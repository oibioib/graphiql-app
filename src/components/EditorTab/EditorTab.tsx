import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CodeEditor } from '@components';
import { useEditor } from '@hooks';
import { Box, Button, Group, Stack } from '@mantine/core';
import { IconPlayerPlayFilled } from '@tabler/icons-react';

import useStyles from './EditorTab.styles';

const EditorTab = () => {
  const { classes } = useStyles();
  const { query, setQuery, code, onMutate, isLoading } = useEditor();
  const [showVariables, setShowVariables] = useState<boolean>(false);
  const [showHeaders, setShowHeaders] = useState<boolean>(false);

  const { t } = useTranslation();

  return (
    <>
      <Group className={classes.header}>
        <Button
          variant={showVariables ? 'filled' : 'light'}
          onClick={() => {
            setShowVariables((show) => !show);
            setShowHeaders(false);
          }}
          disabled={isLoading}
        >
          {t('buttons.variables')}
        </Button>
        <Button
          variant={showHeaders ? 'filled' : 'light'}
          onClick={() => {
            setShowHeaders((show) => !show);
            setShowVariables(false);
          }}
          disabled={isLoading}
        >
          {t('buttons.headers')}
        </Button>
        <Button
          onClick={onMutate}
          disabled={isLoading}
          variant="gradient"
          gradient={{ from: 'pink.6', to: 'orange.7', deg: 105 }}
          rightIcon={<IconPlayerPlayFilled size={16} />}
        >
          {t('buttons.runQuery')}
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
