import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => {
  const validColor = theme.colors.green[6];

  return {
    valid: {
      borderColor: validColor,

      ['&:focus-within']: {
        borderColor: validColor,
      },

      ['&:active']: {
        borderColor: validColor,
      },
    },
  };
});

export default useStyles;
