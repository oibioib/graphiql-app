import { RSLogoImage } from '@assets';
import { APP_SETTINGS } from '@constants';
import { Anchor } from '@mantine/core';

import useStyles from './RSLink.styles';

const RSLink = () => {
  const { classes } = useStyles();

  return (
    <Anchor href={APP_SETTINGS.RS_LINK} target="_blank" rel="noopener noreferrer">
      <RSLogoImage className={classes.link} />
    </Anchor>
  );
};

export default RSLink;
