import { useAppLanguage, useAppScroll } from '@hooks';
import DevMenu from '@layouts/DevMenu/DevMenu';
import {
  ActionIcon,
  Header as AppShellHeader,
  Button,
  Container,
  Flex,
  Group,
  createStyles,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

const useBaseLayoutStyles = createStyles((theme) => ({
  header: {
    transition: '0.3s',
  },

  header_active: {
    position: 'fixed',
    boxShadow: theme.shadows.md,
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[1] : theme.colors.dark[6],
  },
}));

const Header = () => {
  const { classes, cx } = useBaseLayoutStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [language, toggleLanguage] = useAppLanguage();
  const scrolled = useAppScroll();

  return (
    <AppShellHeader
      height="auto"
      py="md"
      className={cx(classes.header, { [classes.header_active]: scrolled })}
    >
      <Container size="xl">
        <Group position="apart" sx={{ height: '100%' }}>
          <div>Logo</div>
          <Flex gap="md">
            <DevMenu />
            <Button
              size="sm"
              color="gray"
              variant="default"
              p={10}
              onClick={() => toggleLanguage()}
            >
              {language}
            </Button>
            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={36}>
              {colorScheme === 'dark' ? <IconSun size="1rem" /> : <IconMoon size="1rem" />}
            </ActionIcon>
          </Flex>
        </Group>
      </Container>
    </AppShellHeader>
  );
};

export default Header;
