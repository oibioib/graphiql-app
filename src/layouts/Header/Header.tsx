import { useTranslation } from 'react-i18next';

import { NavigateMenu } from '@components';
import { STORAGE_SETTINGS } from '@constants';
import { useAppScroll } from '@hooks';
import {
  Header as AppShellHeader,
  Button,
  Container,
  Flex,
  Group,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
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
  const { classes, cx } = useStyles();
  const scrolled = useAppScroll();
  const { i18n } = useTranslation();
  const language = localStorage.getItem(STORAGE_SETTINGS.KEYS.LANGUAGE) || 'en';

  const changeLanguage = () => {
    if (language === 'en') {
      i18n.changeLanguage('ru');
      localStorage.setItem(STORAGE_SETTINGS.KEYS.LANGUAGE, 'ru');
    } else {
      i18n.changeLanguage('en');
      localStorage.setItem(STORAGE_SETTINGS.KEYS.LANGUAGE, 'en');
    }
  };

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
