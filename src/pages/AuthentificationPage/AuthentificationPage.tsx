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
  createStyles,
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

const useStyles = createStyles((theme) => {
  const validColor = theme.colors.green[6];

  return {
    valid: {
      borderColor: validColor,

      ['&:focus-within']: {
        borderColor: validColor,
      },

      ['&:active']: {
        borderColor: validColor,
      },
    },
  };
});

const AuthentificationPage = () => {
  const { classes, cx } = useStyles();
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
              classNames={{ input: cx({ [classes.valid]: form.isValid('email') }) }}
              label="Email"
              placeholder="email@liame.com"
            />
            <PasswordInput
              {...form.getInputProps('password')}
              classNames={{ input: cx({ [classes.valid]: form.isValid('password') }) }}
              label="Password"
              placeholder="Your password"
              mt="md"
            />
            <Button fullWidth mt="xl" type="submit" disabled={!form.isValid()}>
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
