import i18n from 'i18next';
import { useTranslation as useTranslationI18n } from 'react-i18next';

type UseTranslation = (translationKey: string, params?: Record<string, string>) => string;

export const useTranslation = (key: string): UseTranslation => {
  const { t: translate } = useTranslationI18n();

  return (translationKey: string, params?: Record<string, string>): string =>
    translate(`${key}.${translationKey}`, params);
};

export const hasTranslate = (key: string): boolean => {
  return i18n.exists(key);
};
