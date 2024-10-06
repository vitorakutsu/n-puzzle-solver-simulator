import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ptBrPageTranslations } from './pages/pt-br';
import { enUsPageTranslations } from './pages/en-us';
import { ptBrComponentTranslations } from './components/pt-br';
import { enUsComponentTranslations } from './components/en-us';
import { ptBrDocumentTranslations } from './document/pt-br';
import { enUsDocumentTranslations } from './document/en-us';

export const initializeI18n = (): void => {
  const i18nConfig: InitOptions = {
    resources: {
      'pt-BR': {
        translations: {
          ...ptBrPageTranslations,
          ...ptBrComponentTranslations,
          ...ptBrDocumentTranslations,
        },
      },
      'en-US': {
        translations: {
          ...enUsPageTranslations,
          ...enUsComponentTranslations,
          ...enUsDocumentTranslations,
        },
      },
    },
    fallbackLng: 'pt-BR',
    lng: 'pt-BR',
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
  };

  i18n.use(initReactI18next).init(i18nConfig);
};
