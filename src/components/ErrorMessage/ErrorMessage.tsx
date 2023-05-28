import { useTranslation } from 'react-i18next';

import { Paper, Text, Title } from '@mantine/core';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  const { t } = useTranslation();

  return (
    <Paper shadow="sm" radius="md" p="md" bg="gray.1">
      <Title order={2} mb={12}>
        {t('errors.default')}
      </Title>
      <Text>{message}</Text>
    </Paper>
  );
};

export default ErrorMessage;
