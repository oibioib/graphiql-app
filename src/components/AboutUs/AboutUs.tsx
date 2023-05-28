import { useTranslation } from 'react-i18next';

import { APP_SETTINGS } from '@constants';
import { Anchor, Container, Group, Image, Stack, Text, Title } from '@mantine/core';

import useStyles from './AboutUs.styles';

const AboutUs = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Container className={classes.container}>
      <Title order={3} align="center">
        {t('welcomePage.team')}
      </Title>
      <Group className={classes.container}>
        {APP_SETTINGS.TEAM.map(({ id, member, photo, github }) => (
          <Stack key={id} className={classes.card}>
            <Anchor
              component="a"
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={photo} className={classes.photo} />
            </Anchor>
            <Text className={classes.name}>{member}</Text>
            <Anchor
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.github}
            >
              {github}
            </Anchor>
          </Stack>
        ))}
      </Group>
    </Container>
  );
};

export default AboutUs;
