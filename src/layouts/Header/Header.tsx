import { Link } from 'react-router-dom';

import { LogoImage } from '@assets';
import { NavigateMenu } from '@components';
import { useAppLanguage, useAppScroll } from '@hooks';
import { Header as AppShellHeader, Box, Button, Container, Flex, Group, Text } from '@mantine/core';

import useStyles from './Header.styles';

const Header = () => {
  const { classes, cx } = useStyles();
  const scrolled = useAppScroll();
  const { language, changeLanguage } = useAppLanguage();

  return (
    <AppShellHeader
      height="auto"
      className={cx(classes.header, { [classes.header_active]: scrolled })}
    >
      <Container size="xl" w="100%">
        <Group className={classes.container}>
          <Box component={Link} to="/" className={classes.logo}>
            <Group>
              <Box component={LogoImage} className={classes.logo_image} />
              <Text>GraphiQL</Text>
            </Group>
          </Box>
          <Flex gap="xs">
            <NavigateMenu />
            <Button
              size="sm"
              color="gray"
              variant="default"
              p={10}
              onClick={() => changeLanguage()}
            >
              {language.toUpperCase()}
            </Button>
          </Flex>
        </Group>
      </Container>
    </AppShellHeader>
  );
};

export default Header;
