import { Footer as AppShellFooter, Container, Flex, Group, Text } from '@mantine/core';

const Footer = () => {
  return (
    <AppShellFooter height="auto" py="md" sx={{ display: 'flex', alignItems: 'center' }}>
      <Container size="xl" w="100%">
        <Group position="apart">
          <Text>Footer</Text>
          <Flex gap="md">
            <Text>Info</Text>
          </Flex>
        </Group>
      </Container>
    </AppShellFooter>
  );
};

export default Footer;
