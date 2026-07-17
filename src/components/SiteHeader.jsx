import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle.jsx';

export function SiteHeader({ campaign, navItems }) {
  const { t } = useTranslation();
  const [activeTarget, setActiveTarget] = useState(navItems[0]?.targetId ?? '');
  const ieeeLinks = [
    { label: 'IEEE.org', href: 'https://www.ieee.org/' },
    { label: 'IEEE Xplore Digital Library', href: 'https://ieeexplore.ieee.org/' },
    { label: 'IEEE Standards', href: 'https://standards.ieee.org/' },
    { label: 'IEEE Spectrum', href: 'https://spectrum.ieee.org/' },
    { label: 'More Sites', href: 'https://www.ieee.org/sitemap.html' },
  ];

  function scrollToSection(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;
    const headerHeight =
      document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
    setActiveTarget(targetId);
    window.history.replaceState(null, '', `#${targetId}`);
    window.scrollTo({ top, behavior: 'smooth' });
  }

  return (
    <header className="site-header">
      <div className="topbar" aria-label="IEEE related links">
        {ieeeLinks.map((item) => (
          <a href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </div>

      <div className="notice">
        <span className="notice__mark" aria-hidden="true" />
        <span>
          <Trans
            i18nKey="header.notice"
            values={{ office: campaign.contesting, committee: campaign.committee }}
            components={{ b: <strong /> }}
          />
        </span>
        <span className="notice__close">{t('header.electionCycle')}</span>
      </div>

      <div className="masthead">
        <a href="#" className="brand" aria-label={`${campaign.displayName} campaign home`}>
          <span>
            <span className="brand__name">{campaign.displayName}</span>
            <span className="brand__office">
              {t('header.brandFor')} {campaign.contesting}
            </span>
          </span>
        </a>
        {/* <LanguageToggle /> */}{/* TEMP: hidden until Chinese is ready */}
      </div>

      <nav className="template-switcher" aria-label="Section navigation">
        {navItems.map((item) => (
          <button
            className={item.targetId === activeTarget ? 'is-active' : ''}
            key={item.targetId}
            type="button"
            onClick={() => scrollToSection(item.targetId)}
          >
            {t(item.key)}
          </button>
        ))}
      </nav>
    </header>
  );
}
