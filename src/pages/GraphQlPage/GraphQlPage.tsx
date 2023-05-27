import { Suspense } from 'react';

import { Loader } from '@components';
import { GraphSchema } from '@components';
import { Tabs } from '@mantine/core';

const GraphQlPage = () => {
  return (
    <Tabs defaultValue="editor">
      <Tabs.List>
        <Tabs.Tab value="editor">Editor</Tabs.Tab>
        <Tabs.Tab value="schema">Schema</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="schema" pt="xs">
        <Suspense fallback={<Loader />}>
          <GraphSchema />
        </Suspense>
      </Tabs.Panel>

      <Tabs.Panel value="editor" pt="xs">
        Editor
      </Tabs.Panel>
    </Tabs>
  );
};

export default GraphQlPage;
