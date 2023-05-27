import { Suspense } from 'react';

import { EditorTab, Loader } from '@components';
import { GraphSchema } from '@components';
import { Tabs } from '@mantine/core';

import useStyles from './GraphQlPage.styles';

const GraphQlPage = () => {
  const { classes } = useStyles();

  return (
    <Tabs defaultValue="editor" className={classes.tabs}>
      <Tabs.List>
        <Tabs.Tab value="editor">Editor</Tabs.Tab>
        <Tabs.Tab value="schema">Schema</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="schema" className={classes.tab}>
        <Suspense fallback={<Loader />}>
          <GraphSchema />
        </Suspense>
      </Tabs.Panel>

      <Tabs.Panel value="editor" className={classes.tab}>
        <EditorTab />
      </Tabs.Panel>
    </Tabs>
  );
};

export default GraphQlPage;
