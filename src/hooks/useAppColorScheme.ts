import { STORAGE_SETTINGS } from '@constants';
import { ColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

type UseAppColorScheme = [
  colorScheme: ColorScheme,
  toggleColorScheme: (value?: ColorScheme) => void
];

const useAppColorScheme = (): UseAppColorScheme => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: STORAGE_SETTINGS.KEYS.THEME,
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return [colorScheme, toggleColorScheme];
};

export default useAppColorScheme;
