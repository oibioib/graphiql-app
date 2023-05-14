import { Link } from 'react-router-dom';

import {
  Button,
  Center,
  Container,
  Group,
  Stack,
  Text,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  container: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120),
    },
  },

  title: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(500),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

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
