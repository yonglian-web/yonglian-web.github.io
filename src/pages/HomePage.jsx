import { Link } from 'react-router-dom';
import { campaign } from '../data/campaign.js';
import { useSite } from '../data/useSite.js';
import { Countdown } from '../components/Countdown.jsx';
import { Icon } from '../components/Icon.jsx';

const VOTE_URL =
  'https://www.ieee.org/about/corporate/election/technical-activities#yong-peter-lian12?utm_source=website&utm_medium=organic&utm_campaign=2026-candidate-video-lian-bio';

export function HomePage() {
  const s = useSite();

  return (
    <div className="cs-page-anim">
      <section className="cs-hero">
        <div className="cs-hero__dots" aria-hidden="true" />
        <div className="cs-hero__glow-a" aria-hidden="true" />
        <div className="cs-hero__glow-b" aria-hidden="true" />
        <div className="cs-hero__grid">
          <div>
            <h1 className="cs-hero__title" dangerouslySetInnerHTML={{ __html: s.home.title }} />
            {s.home.slogan ? <p className="cs-hero__slogan">{s.home.slogan}</p> : null}
            <div className="cs-hero__name">
              <b>
                {s.home.name} {s.home.nameEn ? <span>{s.home.nameEn}</span> : null}
              </b>
            </div>
            <p className="cs-hero__role">{s.home.role}</p>
            <p className="cs-hero__lead">{s.home.lead}</p>
            <div className="cs-hero__actions">
              <Link className="cs-btn cs-btn--blue" to="/why-running">
                {s.home.ctaWhy}
                <Icon name="arrow" size={17} stroke={2} />
              </Link>
              {/* "Watch 60s video" button removed — no video available yet. */}
            </div>
          </div>
          <div className="cs-hero__media">
            <div className="cs-hero__net" aria-hidden="true" />
            <Countdown />
            <div className="cs-hero__photo">
              <img src="/yong-lian-cutout.png" alt={campaign.name} />
            </div>
          </div>
        </div>

        <div className="cs-voteband cs-voteband--hero">
          <div className="cs-voteband__inner">
          <div className="cs-voteband__info">
            <span className="cs-voteband__badge">
              <Icon name="institution" size={26} stroke={1.7} />
            </span>
            <div>
              <div className="cs-voteband__title">{s.home.voteTitle}</div>
              <div className="cs-voteband__time">
                <Icon name="calendar" size={15} stroke={1.8} />
                {s.home.voteTimeLabel}
              </div>
              <div className="cs-voteband__dates">
                {s.home.voteDates}
                <br />
                <small>{s.home.voteNote}</small>
              </div>
            </div>
          </div>
          <div className="cs-voteband__cta">
            <a className="cs-btn cs-btn--orange" href={VOTE_URL} rel="noopener" target="_blank">
              {s.home.voteCta}
              <Icon name="arrow" size={18} stroke={2.2} />
            </a>
            <div className="cs-voteband__note">
              <span>{s.home.voteSmall}</span>
              <Link className="cs-linkbtn" to="/how-to-vote">
                {s.home.voteLink}
                <Icon name="arrow" size={14} stroke={2} />
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-doors">
          {s.home.doors.map((door) => (
            <Link
              key={door.to}
              to={door.to}
              className={door.accent === 'orange' ? 'cs-card cs-door cs-door--orange' : 'cs-card cs-door'}
            >
              <span className={`cs-door__chip cs-chip--${door.accent}`}>
                <Icon name={door.icon} size={28} stroke={1.7} />
              </span>
              <div className="cs-door__title">{door.title}</div>
              <p className="cs-door__text">{door.text}</p>
              <span className="cs-door__link">
                {door.link}
                <Icon name="arrow" size={15} stroke={2} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
