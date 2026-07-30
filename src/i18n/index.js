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
    // Election site is available in these; the campaign prose comes from useSite's
    // dataset swap (not i18n resources), so listing a lang here is enough for the
    // detector to resolve it. Anything else (e.g. a Thai browser) → English.
    supportedLngs: ['en', 'zh', 'fr', 'es', 'it', 'ja', 'ko'],
    nonExplicitSupportedLngs: true, // fr-FR → fr, zh-CN → zh, ja-JP → ja …
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

// Fixed-English instance for the Personal Website (academic CV). It ignores the
// campaign site's language toggle so the CV is always English — the CV content is
// English-only, so a Chinese label + English body would look half-translated.
// NOTE: no `.use(initReactI18next)` here — that would re-bind the GLOBAL react
// default to this instance and turn the whole app English. The CV subtree gets it
// via <I18nextProvider i18n={cvI18n}> in CvLayout instead.
export const cvI18n = i18n.createInstance();
cvI18n.init({
  resources: { en: { translation: en } },
  lng: 'en',
  fallbackLng: 'en',
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
