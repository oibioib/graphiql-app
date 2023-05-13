import { APP_SETTINGS } from '@constants';
import { Center, Container, Stack, createStyles, rem } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';

const useErrorPageStyles = createStyles((theme) => ({
  container: {
    textAlign: 'center',
  },

  text: {
    fontSize: rem(20),
    fontWeight: 500,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
    },
  },
}));

const ErrorPage = () => {
  useDocumentTitle(APP_SETTINGS.PAGES.ERROR.TITLE);
  const { classes } = useErrorPageStyles();

  return (
    <Container h="100vh">
      <Center h="100%">
        <Stack className={classes.container}>
          <span className={classes.text}>Something went wrong</span>
        </Stack>
      </Center>
    </Container>
  );
};

export default ErrorPage;
