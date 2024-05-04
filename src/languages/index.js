import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './es';
import pt from './pt';

i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    debug: true,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    resources: {
      es: { translation: es },
      pt: { translation: pt },
    }
  });

export default i18next;
