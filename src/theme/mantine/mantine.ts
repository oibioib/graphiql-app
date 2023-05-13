import { MantineThemeOverride } from '@mantine/core';

const baseColors = {
  white: '#FFFFFF',
  black: '#232134',
  background: '#F7F7F8',
};

export const theme: MantineThemeOverride = {
  fontFamily: `'Inter', sans-serif`,
  white: baseColors.white,
  black: baseColors.black,
};
