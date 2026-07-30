import { useTranslation } from 'react-i18next';

// Election site languages. Each label shows the native name plus its English
// name so it's clear what each option is (e.g. "中文 (Chinese)").
const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文 (Chinese)' },
  { code: 'fr', label: 'Français (French)' },
  { code: 'es', label: 'Español (Spanish)' },
  { code: 'it', label: 'Italiano (Italian)' },
  { code: 'ja', label: '日本語 (Japanese)' },
  { code: 'ko', label: '한국어 (Korean)' },
];

const CODES = LANGS.map((l) => l.code);

// National flag shown on the left, matching the current language.
const FLAGS = {
  en: '🇬🇧',
  zh: '🇨🇳',
  fr: '🇫🇷',
  es: '🇪🇸',
  it: '🇮🇹',
  ja: '🇯🇵',
  ko: '🇰🇷',
};

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const resolved = String(i18n.language || 'en').slice(0, 2);
  const current = CODES.includes(resolved) ? resolved : 'en';

  return (
    <label className="lang-select">
      <span className="sr-only">Language / 语言</span>
      <span className="lang-select__flag" aria-hidden="true">
        {FLAGS[current]}
      </span>
      <select
        aria-label="Language / 语言"
        value={current}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {LANGS.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </label>
  );
}
