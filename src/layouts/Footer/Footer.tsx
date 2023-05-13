import { Link } from 'react-router-dom';

import { Button, Flex, Group, Text } from '@mantine/core';

const Footer = () => {
  return (
    <Group position="apart">
      <Text>Footer</Text>
      <Flex gap="md">
        <Link to="/">
          <Button>Main</Button>
        </Link>
        <Link to="/auth">
          <Button>Authentication</Button>
        </Link>
        <Link to="/graphql">
          <Button>GraphQl</Button>
        </Link>
        <Link to="/abracadabra">
          <Button>Error</Button>
        </Link>
      </Flex>
    </Group>
  );
};

export default Footer;
