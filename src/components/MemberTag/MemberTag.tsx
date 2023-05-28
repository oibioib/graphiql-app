import { APP_SETTINGS } from '@constants';
import { Button } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

import useStyles from './MemberTag.styles';

const MemberTag = ({ gitHubProfile }: { gitHubProfile: string }) => {
  const { classes } = useStyles();

  return (
    <Button
      variant="subtle"
      compact
      component="a"
      leftIcon={<IconBrandGithub size={16} />}
      href={`${APP_SETTINGS.GITHUB_LINK}${gitHubProfile}`}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.button}
    >
      {gitHubProfile}
    </Button>
  );
};

export default MemberTag;
