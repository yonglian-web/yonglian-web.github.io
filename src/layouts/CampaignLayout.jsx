import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { campaign } from '../data/campaign.js';
import { useSite } from '../data/useSite.js';
import { LanguageToggle } from '../components/LanguageToggle.jsx';

const VOTE_URL =
  'https://www.ieee.org/about/corporate/election/technical-activities#yong-peter-lian12?utm_source=website&utm_medium=organic&utm_campaign=2026-candidate-video-lian-bio';

const navItems = [
  { key: 'home', to: '/' },
  { key: 'whyRunning', to: '/why-running' },
  { key: 'whyMe', to: '/why-me' },
  { key: 'plan', to: '/plan' },
  { key: 'howToVote', to: '/how-to-vote' },
  { key: 'statement', to: '/statement' },
  { key: 'about', to: '/about' },
];

// Election-site chrome, ported from the candidate's static site: sticky topbar,
// the past/today/future strip and the footer disclaimer repeat on every page.
// Everything is wrapped in .campaign-site, which scopes campaign-site.css — the
// CV pages share class names (.hero, .brand, .topbar) but not this wrapper.
export function CampaignLayout({ children }) {
  const s = useSite();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="campaign-site">
      <header className="topbar">
        <div className="wrap">
          <Link className="brand" to="/" onClick={() => setOpen(false)}>
            <img src="/icons/icon_badge_target_blue.png" alt="" />
            <span>
              <b>{s.brand.name}</b>
              <small>{s.brand.role}</small>
            </span>
          </Link>

          <button
            className="menu-toggle"
            aria-label={s.nav.home}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>

          <nav className={open ? 'nav open' : 'nav'} aria-label={s.brand.name}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setOpen(false)}
              >
                {s.nav[item.key]}
              </NavLink>
            ))}
            <LanguageToggle />
            <a className="btn-vote" href={VOTE_URL} rel="noopener" target="_blank">
              {s.nav.vote}
            </a>
          </nav>
        </div>
      </header>

      <main key={pathname}>{children}</main>

      <div className="ptf">
        <div className="wrap">
          {s.ptf.map((cell) => (
            <div className="cell" key={cell.label}>
              <img src={`/icons/${cell.icon}.png`} alt="" />
              <div>
                <b>{cell.label}</b>
                <span>{cell.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="site-footer">
        <div className="wrap">
          <div>
            {s.footer.line}
            <a href={`mailto:${campaign.contactEmail}`}>{campaign.contactEmail}</a>
          </div>
          <div className="disclaimer">{s.footer.disclaimer}</div>
          <div>
            {s.footer.copyright}
            <a href={campaign.website}>yonglian.org</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
