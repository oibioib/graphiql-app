import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@layouts';
import { AppShell, Box, Container } from '@mantine/core';

import useStyles from './BaseLayout.styles';

const BaseLayout = () => {
  const { classes } = useStyles();

  return (
    <Box h="100vh">
      <AppShell
        header={<Header />}
        footer={<Footer />}
        fixed={false}
        classNames={{ main: classes.main }}
      >
        <Container size="xl" className={classes.container}>
          <Outlet />
        </Container>
      </AppShell>
    </Box>
  );
};

export default BaseLayout;
