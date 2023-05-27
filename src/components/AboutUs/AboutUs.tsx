import { APP_SETTINGS } from '@constants';
import { Anchor, Group, Image, Stack, Text } from '@mantine/core';

import useStyles from './AboutUs.styles';

const AboutUs = () => {
  const { classes } = useStyles();

  return (
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
  );
};

export default AboutUs;
