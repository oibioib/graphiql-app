import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@layouts';
import { AppShell } from '@mantine/core';

const BaseLayout = () => {
  return (
    <AppShell padding="md" header={<Header />} footer={<Footer />}>
      <Outlet />
    </AppShell>
  );
};

export default BaseLayout;
