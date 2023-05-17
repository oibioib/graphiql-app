import { STORAGE_SETTINGS } from '@constants';
import { useLocalStorage } from '@mantine/hooks';
import { AppLanguage } from '@types';

type UseAppLanguage = [language: AppLanguage, toggleLanguage: (language?: AppLanguage) => void];

const useAppLanguage = (): UseAppLanguage => {
  const [language, setLanguage] = useLocalStorage<AppLanguage>({
    key: STORAGE_SETTINGS.KEYS.LANGUAGE,
    defaultValue: 'EN',
    getInitialValueInEffect: true,
  });

  const toggleLanguage = (value?: AppLanguage) =>
    setLanguage(value || (language === 'EN' ? 'RU' : 'EN'));

  return [language, toggleLanguage];
};

export default useAppLanguage;
