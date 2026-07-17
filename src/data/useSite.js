import { useTranslation } from 'react-i18next';
import { site } from './site.js';
import { siteZh } from './siteZh.js';

// Election-site prose uses a dataset swap rather than t() — same pattern the
// campaign home already used for campaign.js / campaignZh.js.
export function useSite() {
  const { i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'en';
  return String(lng).startsWith('zh') ? siteZh : site;
}
