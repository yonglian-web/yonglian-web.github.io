import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './en.js';
import { zh } from './zh.js';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    nonExplicitSupportedLngs: true, // zh-CN / zh-TW / zh-Hans → zh
    load: 'languageOnly', // en-US → en, zh-CN → zh
    detection: {
      // querystring first so ?lng=en / ?lng=zh can force a language for testing;
      // real visitors fall through to a saved choice, then their browser/region.
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lng',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
    returnEmptyString: false,
  });

// Keep <html lang> in sync — drives the :lang(zh) CJK font fallback too.
const syncHtmlLang = (lng) => {
  document.documentElement.lang = String(lng || 'en').startsWith('zh') ? 'zh' : 'en';
};
syncHtmlLang(i18n.resolvedLanguage || i18n.language);
i18n.on('languageChanged', syncHtmlLang);

export default i18n;
