import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { validationTestRefine, validationTestRefineEmail } from '@helpers';
import { Button, PasswordInput, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

import useStyles from './Form.style';

interface FormProps {
  title: string;
  handleSubmit: (email: string, password: string) => void;
}

const schema = z.object({
  email: z.string().trim().superRefine(validationTestRefineEmail),
  password: z.string().trim().superRefine(validationTestRefine),
});

const FormAuth: FC<FormProps> = ({ title, handleSubmit }) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();

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
        handleSubmit(values.email, values.password);
      })}
    >
      <TextInput
        {...form.getInputProps('email')}
        classNames={{ input: cx({ [classes.valid]: form.isValid('email') }) }}
        label={t('label.email')}
        placeholder="email@liame.com"
        autoComplete="current-email"
      />
      <PasswordInput
        {...form.getInputProps('password')}
        classNames={{ input: cx({ [classes.valid]: form.isValid('password') }) }}
        label={t('label.password')}
        placeholder={t('password.placeholder') || 'Your password'}
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
