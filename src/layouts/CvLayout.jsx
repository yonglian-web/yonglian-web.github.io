import { CvSiteHeader } from '../components/CvSiteHeader.jsx';
import { CvSiteFooter } from '../components/CvSiteFooter.jsx';
import { campaign } from '../data/campaign.js';

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

export function CvLayout({ children }) {
  return (
    <>
      <CvSiteHeader campaign={campaign} navItems={navItems} />
      <main>{children}</main>
      <CvSiteFooter campaign={campaign} />
    </>
  );
}
