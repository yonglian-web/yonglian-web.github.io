import { useTranslation } from 'react-i18next';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
];

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = String(i18n.resolvedLanguage || i18n.language || 'en').startsWith('zh')
    ? 'zh'
    : 'en';

  return (
    <div className="lang-toggle" role="group" aria-label="Language / 语言">
      {LANGS.map((lang) => (
        <button
          key={lang.code}
          type="button"
          className={lang.code === current ? 'is-active' : ''}
          aria-pressed={lang.code === current}
          onClick={() => i18n.changeLanguage(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
