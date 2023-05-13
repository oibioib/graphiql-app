import { Outlet } from 'react-router-dom';

import { useAppScroll } from '@hooks';
import { Footer, Header } from '@layouts';
import {
  AppShell,
  Footer as AppShellFooter,
  Header as AppShellHeader,
  createStyles,
} from '@mantine/core';

const useBaseLayoutStyles = createStyles((theme) => ({
  header_shadow: {
    boxShadow: theme.shadows.md,
    paddingTop: 0,
  },
}));

const BaseLayout = () => {
  const { classes, cx } = useBaseLayoutStyles();
  const scrolled = useAppScroll();

  return (
    <AppShell
      padding="md"
      header={
        <AppShellHeader height={60} p="md" className={cx({ [classes.header_shadow]: scrolled })}>
          <Header />
        </AppShellHeader>
      }
      footer={
        <AppShellFooter height={'auto'} p="md">
          <Footer />
        </AppShellFooter>
      }
    >
      <Outlet />
    </AppShell>
  );
};

export default BaseLayout;
