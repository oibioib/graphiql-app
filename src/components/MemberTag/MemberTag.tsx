import { Button, createStyles } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  button: {
    color: theme.colors.gray[6],
    [':hover']: {
      color: theme.colors[theme.primaryColor][6],
      backgroundColor: 'transparent',
    },
  },
}));

const MemberTag = ({ gitHubProfile }: { gitHubProfile: string }) => {
  const { classes } = useStyles();

  return (
    <Button
      variant="subtle"
      compact
      component="a"
      leftIcon={<IconBrandGithub size={16} />}
      href={`https://github.com/${gitHubProfile}`}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.button}
    >
      {gitHubProfile}
    </Button>
  );
};

export default MemberTag;
