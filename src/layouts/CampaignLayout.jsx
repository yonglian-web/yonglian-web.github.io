import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSite } from '../data/useSite.js';
import { Icon } from '../components/Icon.jsx';
import { LanguageToggle } from '../components/LanguageToggle.jsx';

const VOTE_URL =
  'https://www.ieee.org/about/corporate/election/technical-activities#yong-peter-lian12?utm_source=website&utm_medium=organic&utm_campaign=2026-candidate-video-lian-bio';

const navItems = [
  { key: 'home', to: '/' },
  { key: 'whyRun', to: '/why-running' },
  { key: 'whyMe', to: '/why-me' },
  { key: 'what', to: '/plan' },
  { key: 'howVote', to: '/how-to-vote' },
  { key: 'about', to: '/about' },
];

// Election-site chrome, migrated 1:1 from the candidate's Claude Design: sticky
// blurred header with the "连" mark, the past/today/future strip, and the dark
// footer. Everything is wrapped in .campaign-site (scopes campaign-site.css); the
// CV pages share class names but not this wrapper.
export function CampaignLayout({ children }) {
  const s = useSite();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="campaign-site">
      <header className="cs-header">
        <div className="cs-header__inner">
          <Link className="cs-logo" to="/" onClick={() => setOpen(false)}>
            <span className="cs-logo__mark">
              <span>连</span>
            </span>
            <span className="cs-logo__text">
              <span className="cs-logo__name">
                {s.brand.name} {s.brand.nameEn ? <span>{s.brand.nameEn}</span> : null}
              </span>
              <span className="cs-logo__role">{s.brand.role}</span>
            </span>
          </Link>

          <button
            className="cs-menu-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>

          <nav className={open ? 'cs-nav open' : 'cs-nav'}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'cs-nav__link active' : 'cs-nav__link')}
                onClick={() => setOpen(false)}
              >
                {s.nav[item.key]}
              </NavLink>
            ))}
            <LanguageToggle />
            <a className="cs-vote-btn" href={VOTE_URL} rel="noopener" target="_blank">
              {s.nav.vote}
            </a>
          </nav>
        </div>
      </header>

      <main key={pathname}>{children}</main>

      <section className="cs-ptf">
        <div className="cs-ptf__inner">
          {s.ptf.map((cell) => (
            <div className="cs-ptf__cell" key={cell.label}>
              <span className={`cs-ptf__chip cs-chip--${cell.accent}`}>
                <Icon name={cell.icon} size={22} stroke={1.8} />
              </span>
              <div>
                <div className="cs-ptf__label">{cell.label}</div>
                <div className="cs-ptf__text">{cell.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="cs-footer">
        <div className="cs-footer__inner">
          <div>
            <div className="cs-footer__name">{s.footer.name}</div>
            <div className="cs-footer__role">{s.footer.role}</div>
          </div>
          <div className="cs-footer__tag">
            {s.footer.tagline1}
            <br />
            {s.footer.tagline2}
          </div>
        </div>
        <div className="cs-footer__disclaimer">{s.footer.disclaimer}</div>
      </footer>
    </div>
  );
}
