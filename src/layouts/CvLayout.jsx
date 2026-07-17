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

// The .cv-site class scopes the personal-site styling in cv-site.css. The election
// home shares these class names (.hero, .document-band, …) but not this wrapper, so
// it keeps its own look. Must stay a plain div: overflow/transform/filter here would
// create a containing block and break the header's position:sticky.
export function CvLayout({ children }) {
  return (
    <div className="cv-site">
      <CvSiteHeader campaign={campaign} navItems={navItems} />
      <main>{children}</main>
      <CvSiteFooter campaign={campaign} />
    </div>
  );
}
