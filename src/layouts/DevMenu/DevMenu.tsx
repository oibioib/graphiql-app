import { Link } from 'react-router-dom';

import { Button, Menu } from '@mantine/core';

const DevMenu = () => {
  const color = 'orange';
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button color={color}>DEV</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item p={0} mb={5}>
          <Button component={Link} to="/" fullWidth color={color}>
            Welcome Page
          </Button>
        </Menu.Item>
        <Menu.Item p={0} mb={5}>
          <Button component={Link} to="/signup" fullWidth color={color}>
            Authentication
          </Button>
        </Menu.Item>
        <Menu.Item p={0} mb={5}>
          <Button component={Link} to="/graphql" fullWidth color={color}>
            GraphQl (Main Page)
          </Button>
        </Menu.Item>
        <Menu.Item p={0}>
          <Button component={Link} to="/abracadabra" fullWidth color={color}>
            Error
          </Button>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
export default DevMenu;
