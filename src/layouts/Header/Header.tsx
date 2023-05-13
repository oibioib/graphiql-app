import { IconMoonStars, IconSun } from '@assets';
import { useAppLanguage } from '@hooks';
import { ActionIcon, Button, Flex, Group, useMantineColorScheme } from '@mantine/core';

const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [language, toggleLanguage] = useAppLanguage();

  return (
    <Group sx={{ height: '100%' }} position="apart">
      <div>Logo</div>
      <Flex gap="md">
        <Button size="xs" color="gray" variant="default" p={10} onClick={() => toggleLanguage()}>
          {language}
        </Button>
        <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
          {colorScheme === 'dark' ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
        </ActionIcon>
      </Flex>
    </Group>
  );
};

export default Header;
