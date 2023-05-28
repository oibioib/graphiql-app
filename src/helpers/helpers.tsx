import { notifications } from '@mantine/notifications';
import axios from 'axios';

export const showNotificationsError = (errorMessage: unknown) => {
  return notifications.show({
    message: `${errorMessage} 🤥`,
    autoClose: 3000,
    color: 'red',
  });
};

export const parseJSON = (data: string) => {
  try {
    return JSON.parse(data);
  } catch (e) {
    return {};
  }
};

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.request) {
      return error.request.response;
    }

    if (error.response) {
      return error.response.data.message;
    }
  }

  return {
    errors: {
      message: 'Something went wrong, check your request',
    },
  };
};
