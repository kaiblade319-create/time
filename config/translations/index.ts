import { enTranslations } from './en';
import { hiTranslations } from './hi';
import { esTranslations } from './es';
import { frTranslations } from './fr';
import { LanguageCode } from '@/types';

export const translations: Record<LanguageCode, typeof enTranslations> = {
  en: enTranslations,
  hi: hiTranslations,
  es: esTranslations,
  fr: frTranslations,
};

export function getTranslation(lang: LanguageCode) {
  return translations[lang] || translations.en;
}
