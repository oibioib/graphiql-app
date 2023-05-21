import { initReactI18next } from 'react-i18next';

import { STORAGE_SETTINGS } from '@constants';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';

const language = localStorage.getItem(STORAGE_SETTINGS.KEYS.LANGUAGE) || 'en';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: language,
    debug: false,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
