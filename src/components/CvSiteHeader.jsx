import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle.jsx';

export function CvSiteHeader({ campaign, navItems }) {
  const { t } = useTranslation();

  return (
    <header className="site-header">
      <div className="masthead">
        <Link to="/" className="brand" aria-label={campaign.displayName}>
          <span>
            <span className="brand__name">{campaign.displayName}</span>
          </span>
        </Link>
        <LanguageToggle />
      </div>

      <nav className="template-switcher" aria-label="Site navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => (isActive ? 'is-active' : '')}
          >
            {t(item.key)}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
