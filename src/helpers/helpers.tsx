import { notifications } from '@mantine/notifications';
import { IconX } from '@tabler/icons-react';

export const showNotifications = (err: unknown) => {
  return notifications.show({
    title: 'Error',
    message: `${err} 🤥`,
    autoClose: 3000,
    icon: <IconX />,
    color: 'red',
  });
};
