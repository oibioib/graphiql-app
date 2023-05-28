import { useTranslation } from 'react-i18next';

import { AboutUs } from '@components';
import { Container, List, Title } from '@mantine/core';

import useStyles from './WelcomePage.styles';

const WelcomePage = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Container className={classes.container}>
        <Title order={2} className={classes.title}>
          {t('welcomePage.title')}
        </Title>
        <Title order={4} className={classes.subTitle}>
          {t('welcomePage.opportunity')}
        </Title>
        <List className={classes.list}>
          {t('welcomePage.appContentTitle')}
          <List.Item>{t('welcomePage.appContentItem1')}</List.Item>
          <List.Item>{t('welcomePage.appContentItem2')}</List.Item>
          <List.Item>{t('welcomePage.appContentItem3')}</List.Item>
          <List.Item>{t('welcomePage.appContentItem4')}</List.Item>
          <List.Item>{t('welcomePage.appContentItem5')}</List.Item>
        </List>
      </Container>
      <AboutUs />
    </>
  );
};

export default WelcomePage;
