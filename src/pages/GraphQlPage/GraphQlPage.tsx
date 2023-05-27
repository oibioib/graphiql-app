import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { EditorTab, Loader } from '@components';
import { GraphSchema } from '@components';
import { APP_SETTINGS } from '@constants';
import { Tabs } from '@mantine/core';

import useStyles from './GraphQlPage.styles';

const GraphQlPage = () => {
  const { classes } = useStyles();

  const { t } = useTranslation();

  return (
    <Tabs defaultValue={APP_SETTINGS.EDITOR_TABS.EDITOR} className={classes.tabs}>
      <Tabs.List>
        <Tabs.Tab value={APP_SETTINGS.EDITOR_TABS.EDITOR}>{t('graphiQlTabs.editor')}</Tabs.Tab>
        <Tabs.Tab value={APP_SETTINGS.EDITOR_TABS.SCHEMA}>{t('graphiQlTabs.schema')}</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={APP_SETTINGS.EDITOR_TABS.EDITOR} className={classes.tab}>
        <EditorTab />
      </Tabs.Panel>
      <Tabs.Panel value={APP_SETTINGS.EDITOR_TABS.SCHEMA} className={classes.tab}>
        <Suspense fallback={<Loader />}>
          <GraphSchema />
        </Suspense>
      </Tabs.Panel>
    </Tabs>
  );
};

export default GraphQlPage;
