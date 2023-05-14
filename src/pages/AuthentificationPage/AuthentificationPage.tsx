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
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().superRefine((val, ctx) => {
    const issues = [];

    if (val.length < 8) {
      issues.push('8 chars');
    }

    if (!/[A-Za-z]/.test(val)) {
      issues.push('one letter');
    }

    if (!/[0-9]/.test(val)) {
      issues.push('one digit');
    }

    if (!/[#?!@$%^&*-]/.test(val)) {
      issues.push('one special character');
    }

    if (issues.length) {
      const errorMessage = `At least ${issues.join(', ')}.`;
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: errorMessage,
      });
    }
  }),
});

const AuthentificationPage = () => {
  const form = useForm({
    validateInputOnChange: true,
    validate: zodResolver(schema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Flex align="center" h="100%">
      <Container size={440} p={0} w="100%">
        <Paper withBorder shadow="md" p={30} radius="md">
          <form
            onSubmit={form.onSubmit((values) => {
              form.reset();
              console.log(values);
            })}
          >
            <TextInput
              {...form.getInputProps('email')}
              label="Email"
              placeholder="email@liame.com"
            />
            <PasswordInput
              {...form.getInputProps('password')}
              label="Password"
              placeholder="Your password"
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
