import { SiteHeader } from '../components/SiteHeader.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { campaign } from '../data/campaign.js';

// Home (election) chrome: the campaign header with its 3-section scroll nav.
const navItems = [
  { key: 'nav.profile', targetId: 'profile' },
  { key: 'nav.statement', targetId: 'statement' },
  { key: 'nav.activities', targetId: 'activities' },
];

export function CampaignLayout({ children }) {
  return (
    <>
      <SiteHeader campaign={campaign} navItems={navItems} />
      <main>{children}</main>
      <SiteFooter campaign={campaign} />
    </>
  );
}
