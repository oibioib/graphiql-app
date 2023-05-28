import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button, Center, Container, Group, Stack, Text, Title } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

import useStyles from './ErrorPage.styles';

const ErrorPage = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Container h="100vh">
      <Center h="100%">
        <Stack className={classes.container}>
          <div className={classes.label}>404</div>
          <Title className={classes.title}>{t('errorPage.title')}</Title>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            {t('errorPage.description')}
          </Text>
          <Group position="center">
            <Button component={Link} to="/" size="md" leftIcon={<IconArrowLeft />}>
              {t('errorPage.goBack')}
            </Button>
          </Group>
        </Stack>
      </Center>
    </Container>
  );
};

export default ErrorPage;
