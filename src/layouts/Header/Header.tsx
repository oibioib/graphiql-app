import { NavigateMenu } from '@components';
import { useAppLanguage, useAppScroll } from '@hooks';
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
  const { language, changeLanguage } = useAppLanguage();

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
