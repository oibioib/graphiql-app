import { FC } from 'react';

import { validationTest } from '@helpers';
import { Button, PasswordInput, TextInput, createStyles } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

interface FormProps {
  title: string;
  handleSubmit: (email: string, password: string) => void;
}

const schema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: 'Invalid email' })
    .superRefine((val, ctx) => {
      const issues: string[] = [];
      validationTest(val, issues);
      if (issues.length) {
        const errorMessage = `At least ${issues.join(', ')}.`;
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: errorMessage,
        });
      }
    }),

  password: z
    .string()
    .trim()
    .superRefine((val, ctx) => {
      const issues: string[] = [];
      validationTest(val, issues);
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

const FormAuth: FC<FormProps> = ({ title, handleSubmit }) => {
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
    <form
      onSubmit={form.onSubmit((values) => {
        form.reset();
        console.log(values);
        handleSubmit(values.email, values.password);
      })}
    >
      <TextInput
        {...form.getInputProps('email')}
        classNames={{ input: cx({ [classes.valid]: form.isValid('email') }) }}
        label="Email"
        placeholder="email7@liame.com"
        autoComplete="current-email"
      />
      <PasswordInput
        {...form.getInputProps('password')}
        classNames={{ input: cx({ [classes.valid]: form.isValid('password') }) }}
        label="Password"
        placeholder="Your password"
        mt="md"
        autoComplete="current-password"
      />
      <Button fullWidth mt="xl" type="submit" disabled={!form.isValid()}>
        {title}
      </Button>
    </form>
  );
};

export default FormAuth;
