import { RSLogoImage } from '@assets';
import { Box } from '@mantine/core';

import useStyles from './RSLink.styles';

const RSLink = () => {
  const { classes } = useStyles();
  return (
    <Box component="a" href="https://rs.school/react/" target="_blank" rel="noopener noreferrer">
      <RSLogoImage className={classes.link} />
    </Box>
  );
};

export default RSLink;
