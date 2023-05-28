import { MemberTag, RSLink } from '@components';
import { APP_SETTINGS } from '@constants';
import { Footer as AppShellFooter, Container, Flex, Group, Text } from '@mantine/core';

import useStyles from './Footer.styles';

const Footer = () => {
  const { classes } = useStyles();

  const authors = Object.entries(APP_SETTINGS.AUTHORS).map(([key, value]) => (
    <MemberTag key={key} gitHubProfile={value} />
  ));

  return (
    <AppShellFooter height="auto" className={classes.footer}>
      <Container size="xl" className={classes.container}>
        <Group className={classes.group}>
          <RSLink />
          <Group className={classes.members}>{authors}</Group>
          <Flex gap="md">
            <Text component="span" className={classes.year}>
              2023
            </Text>
          </Flex>
        </Group>
      </Container>
    </AppShellFooter>
  );
};

export default Footer;
