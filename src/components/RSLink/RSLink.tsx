import { RSLogoImage } from '@assets';
import { Anchor } from '@mantine/core';

import useStyles from './RSLink.styles';

const RSLink = () => {
  const { classes } = useStyles();

  return (
    <Anchor href="https://rs.school/react/" target="_blank" rel="noopener noreferrer">
      <RSLogoImage className={classes.link} />
    </Anchor>
  );
};

export default RSLink;
