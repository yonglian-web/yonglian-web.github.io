import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './en.js';
import { zh } from './zh.js';

// TEMP: Chinese translation not yet ready — locked to English.
// To restore bilingual mode: uncomment .use(LanguageDetector), remove lng:'en',
// and restore the detection block below.
i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
    lng: 'en', // TEMP: force English; remove when Chinese is ready
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    nonExplicitSupportedLngs: true, // zh-CN / zh-TW / zh-Hans → zh
    load: 'languageOnly', // en-US → en, zh-CN → zh
    // detection: {
    //   order: ['querystring', 'localStorage', 'navigator'],
    //   lookupQuerystring: 'lng',
    //   lookupLocalStorage: 'i18nextLng',
    //   caches: ['localStorage'],
    // },
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
