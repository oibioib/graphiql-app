import { STORAGE_SETTINGS } from '@constants';
import { useLocalStorage } from '@mantine/hooks';

type UseAppLanguage = [language: AppLanguage, toggleLanguage: (language?: AppLanguage) => void];

const useAppLanguage = (): UseAppLanguage => {
  const [language, setLanguage] = useLocalStorage<AppLanguage>({
    key: STORAGE_SETTINGS.KEYS.LANGUAGE,
    defaultValue: 'en',
    getInitialValueInEffect: true,
  });

  const toggleLanguage = (value?: AppLanguage) =>
    setLanguage(value || (language === 'en' ? 'ru' : 'en'));

  return [language, toggleLanguage];
};

export default useAppLanguage;
