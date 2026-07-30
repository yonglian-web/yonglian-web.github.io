import { useTranslation } from 'react-i18next';
import { site } from './site.js';
import { siteZh } from './siteZh.js';
import { siteFr } from './siteFr.js';
import { siteEs } from './siteEs.js';
import { siteIt } from './siteIt.js';
import { siteJa } from './siteJa.js';
import { siteKo } from './siteKo.js';

// English is the base/fallback. Each other language file is a PARTIAL override —
// it only carries the fields it translates; anything it omits (e.g. the long
// IEEE service list, which is proper nouns) falls back to English. Merge is one
// level deep per section: a section object in the override is spread over the
// English section, and any array in the override replaces the English array
// wholesale (so it must include the structural fields like icon/accent).
function merge(base, over) {
  const out = { ...base };
  for (const key of Object.keys(over)) {
    const b = base[key];
    const o = over[key];
    if (o && typeof o === 'object' && !Array.isArray(o) && b && typeof b === 'object' && !Array.isArray(b)) {
      out[key] = { ...b, ...o };
    } else {
      out[key] = o;
    }
  }
  return out;
}

// Precompute the merged dataset per language (data is static).
const SITES = {
  en: site,
  zh: merge(site, siteZh),
  fr: merge(site, siteFr),
  es: merge(site, siteEs),
  it: merge(site, siteIt),
  ja: merge(site, siteJa),
  ko: merge(site, siteKo),
};

// Election-site prose uses a dataset swap rather than t(). Unknown/unsupported
// languages (e.g. a Thai browser) resolve to English.
export function useSite() {
  const { i18n } = useTranslation();
  // Use i18n.language (the chosen/detected language), NOT resolvedLanguage:
  // fr/es/it/ja/ko have no i18n *resources* (the campaign uses this dataset swap,
  // not t()), so resolvedLanguage would fall back to 'en'. i18n.language keeps the
  // real choice; supportedLngs already sends unsupported locales to 'en'.
  const lng = String(i18n.language || 'en').slice(0, 2);
  return SITES[lng] || site;
}
