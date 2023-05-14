import {
  Anchor,
  Button,
  Center,
  Container,
  Flex,
  Paper,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import { isEmail, useForm } from '@mantine/form';

const AuthentificationPage = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: isEmail('Invalid email'),
      password: (value) =>
        /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value)
          ? null
          : 'Invalid password',
    },
  });

  return (
    <Flex align="center" h="100%">
      <Container size={420} p={0}>
        <Paper withBorder shadow="md" p={30} radius="md">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              {...form.getInputProps('email')}
              label="Email"
              placeholder="you@mantine.dev"
              required
            />
            <PasswordInput
              {...form.getInputProps('password')}
              label="Password"
              placeholder="Your password"
              required
              mt="md"
            />
            <Button fullWidth mt="xl" type="submit">
              Sign in
            </Button>
          </form>
          <Center mt="lg">
            <Text color="dimmed" size="sm" mt={5}>
              Do not have an account yet?
              <Anchor size="sm" component="button" ml={5}>
                Create account
              </Anchor>
            </Text>
          </Center>
        </Paper>
      </Container>
    </Flex>
  );
};

export default AuthentificationPage;
