import { Link } from 'react-router-dom';

import { Button, Center, Container, Group, Stack, Text, Title } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

import useStyles from './ErrorPage.styles';

const ErrorPage = () => {
  const { classes } = useStyles();

  return (
    <Container h="100vh">
      <Center h="100%">
        <Stack className={classes.container}>
          <div className={classes.label}>404</div>
          <Title className={classes.title}>You have found a secret place.</Title>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            Unfortunately, this is only a 404 page. You may have mistyped the address, or the page
            has been moved to another URL.
          </Text>
          <Group position="center">
            <Button component={Link} to="/" size="md" leftIcon={<IconArrowLeft />}>
              Back to home page
            </Button>
          </Group>
        </Stack>
      </Center>
    </Container>
  );
};

export default ErrorPage;
