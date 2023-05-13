import { IconMoonStars, IconSun } from '@assets';
import { useAppLanguage } from '@hooks';
import { useAppScroll } from '@hooks';
import {
  ActionIcon,
  Header as AppShellHeader,
  Button,
  Flex,
  Group,
  createStyles,
  useMantineColorScheme,
} from '@mantine/core';

const useBaseLayoutStyles = createStyles((theme) => ({
  header_shadow: {
    boxShadow: theme.shadows.md,
    paddingTop: 0,
  },
}));

const Header = () => {
  const { classes, cx } = useBaseLayoutStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [language, toggleLanguage] = useAppLanguage();
  const scrolled = useAppScroll();

  return (
    <AppShellHeader height={70} p="md" className={cx({ [classes.header_shadow]: scrolled })}>
      <Group sx={{ height: '100%' }} position="apart">
        <div>Logo</div>
        <Flex gap="md">
          <Button size="sm" color="gray" variant="default" p={10} onClick={() => toggleLanguage()}>
            {language}
          </Button>
          <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={36}>
            {colorScheme === 'dark' ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
          </ActionIcon>
        </Flex>
      </Group>
    </AppShellHeader>
  );
};

export default Header;
