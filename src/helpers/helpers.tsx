import { notifications } from '@mantine/notifications';

export const showNotificationsError = (errorMessage: unknown) => {
  return notifications.show({
    message: `${errorMessage} 🤥`,
    autoClose: 3000,
    color: 'red',
  });
};
