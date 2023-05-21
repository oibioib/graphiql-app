import { GraphQlSchemaContent } from '@components';
import { SCHEMA_QUERY } from '@constants';
import { fetchData } from '@helpers';
import { Button, Drawer, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const resource = fetchData(SCHEMA_QUERY.default);

const GraphSchema = () => {
  const schema = resource.read() as GraphQLSchemaJsToTS;
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Drawer
        opened={opened}
        onClose={close}
        title="GraphSchema"
        overlayProps={{ opacity: 0.5, blur: 4 }}
      >
        <GraphQlSchemaContent schema={schema} />
      </Drawer>
      <Group position="center">
        <Button onClick={open}>Open Schema</Button>
      </Group>
    </div>
  );
};

export default GraphSchema;
