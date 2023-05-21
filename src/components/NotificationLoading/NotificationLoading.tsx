import { Notification } from '@mantine/core';

const NotificationLoading = () => {
  return (
    <Notification loading title="Uploading data to the server">
      Please wait until data is uploaded
    </Notification>
  );
};

export default NotificationLoading;
