import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// English-only Personal Website — no language toggle (the CV content is English).
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
