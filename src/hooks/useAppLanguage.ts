import { useTranslation } from 'react-i18next';

import { APP_SETTINGS, STORAGE_SETTINGS } from '@constants';

const useAppLanguage = () => {
  const { i18n } = useTranslation();
  const language = localStorage.getItem(STORAGE_SETTINGS.KEYS.LANGUAGE) || APP_SETTINGS.LANGUAGE.EN;

  const changeLanguage = () => {
    if (language === APP_SETTINGS.LANGUAGE.EN) {
      i18n.changeLanguage(APP_SETTINGS.LANGUAGE.RU);
      localStorage.setItem(STORAGE_SETTINGS.KEYS.LANGUAGE, APP_SETTINGS.LANGUAGE.RU);
    } else {
      i18n.changeLanguage(APP_SETTINGS.LANGUAGE.EN);
      localStorage.setItem(STORAGE_SETTINGS.KEYS.LANGUAGE, APP_SETTINGS.LANGUAGE.EN);
    }
  };

  return { language, changeLanguage };
};

export default useAppLanguage;
