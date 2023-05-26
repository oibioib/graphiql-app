import { useTranslation } from 'react-i18next';

import { STORAGE_SETTINGS } from '@constants';

const useAppLanguage = () => {
  const { i18n } = useTranslation();
  const language = localStorage.getItem(STORAGE_SETTINGS.KEYS.LANGUAGE) || 'en';

  const changeLanguage = () => {
    if (language === 'en') {
      i18n.changeLanguage('ru');
      localStorage.setItem(STORAGE_SETTINGS.KEYS.LANGUAGE, 'ru');
    } else {
      i18n.changeLanguage('en');
      localStorage.setItem(STORAGE_SETTINGS.KEYS.LANGUAGE, 'en');
    }
  };

  return { language, changeLanguage };
};

export default useAppLanguage;
