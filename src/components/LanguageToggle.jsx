import { useTranslation } from 'react-i18next';
import { Flag } from './Flag.jsx';

// Election site languages. Each label is written in its own language.
const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
];

const CODES = LANGS.map((l) => l.code);

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const resolved = String(i18n.language || 'en').slice(0, 2);
  const current = CODES.includes(resolved) ? resolved : 'en';

  return (
    <label className="lang-select">
      <span className="sr-only">Language / 语言</span>
      <Flag code={current} />
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
