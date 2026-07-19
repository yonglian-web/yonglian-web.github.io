import { I18nextProvider } from 'react-i18next';
import { CvSiteHeader } from '../components/CvSiteHeader.jsx';
import { CvSiteFooter } from '../components/CvSiteFooter.jsx';
import { campaign } from '../data/campaign.js';
import { cvI18n } from '../i18n/index.js';

// CV (personal site) chrome: the CV nav. Same order as the personal CV site —
// Education & Employment comes LAST. The CV pages are reachable only via the
// home's "View Website" button; getting back to the election home lives in the
// CV hero (the "Election Website" button in CvHeroActions), not this nav.
const navItems = [
  { key: 'nav.honors', to: '/honors' },
  { key: 'nav.professional', to: '/professional-activities' },
  { key: 'nav.research', to: '/research' },
  { key: 'nav.teaching', to: '/teaching' },
  { key: 'nav.publications', to: '/publications' },
  { key: 'nav.experience', to: '/experience' },
];

// The whole CV subtree is wrapped in a fixed-English i18n instance, so every t()
// here renders English no matter what the campaign site's toggle is set to.
export function CvLayout({ children }) {
  return (
    <I18nextProvider i18n={cvI18n}>
      <CvSiteHeader campaign={campaign} navItems={navItems} />
      <main>{children}</main>
      <CvSiteFooter campaign={campaign} />
    </I18nextProvider>
  );
}
