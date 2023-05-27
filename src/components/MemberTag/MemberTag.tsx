import { Button } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

const MemberTag = ({ gitHubProfile }: { gitHubProfile: string }) => {
  return (
    <Button
      variant="subtle"
      component="a"
      leftIcon={<IconBrandGithub />}
      href={`https://github.com/${gitHubProfile}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {gitHubProfile}
    </Button>
  );
};

export default MemberTag;
