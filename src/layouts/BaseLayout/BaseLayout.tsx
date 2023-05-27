import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@layouts';
import { AppShell, Box, Container, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    flexGrow: 1,
    height: '100%',

    [theme.fn.smallerThan('xs')]: {
      padding: 7,
    },
  },
}));

const BaseLayout = () => {
  const { classes } = useStyles();
  return (
    <Box h="100vh">
      <AppShell header={<Header />} footer={<Footer />} fixed={false}>
        <Container size="xl" className={classes.container}>
          <Outlet />
        </Container>
      </AppShell>
    </Box>
  );
};

export default BaseLayout;
