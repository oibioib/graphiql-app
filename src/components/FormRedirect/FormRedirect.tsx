import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Anchor, Center, Text } from '@mantine/core';

interface FormProps {
  question: string;
  title: string;
  redirectRoute: string;
}

const FormRedirect: FC<FormProps> = ({ question, title, redirectRoute }) => {
  return (
    <Center mt="lg">
      <Text color="dimmed" size="sm" mt={5}>
        {question}
        <Anchor size="sm" component={Link} to={redirectRoute} ml={5}>
          {title}
        </Anchor>
      </Text>
    </Center>
  );
};

export default FormRedirect;
