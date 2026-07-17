import { Link } from 'react-router-dom';
import { campaign } from '../data/campaign.js';
import { useSite } from '../data/useSite.js';
import { Countdown } from '../components/Countdown.jsx';

const VOTE_URL =
  'https://www.ieee.org/about/corporate/election/technical-activities#yong-peter-lian12?utm_source=website&utm_medium=organic&utm_campaign=2026-candidate-video-lian-bio';

export function HomePage() {
  const s = useSite();

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">{s.home.eyebrow}</p>
            {/* The title carries an intentional line break in both languages. */}
            <h1 dangerouslySetInnerHTML={{ __html: s.home.title }} />
            {s.home.slogan ? <p className="en-slogan">{s.home.slogan}</p> : null}
            <div className="hero-name">
              <b>{s.home.name}</b>
              <span>{s.home.role}</span>
            </div>
            <p className="sub">{s.home.lead}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/why-running">
                {s.home.ctaWhy}
              </Link>
              <Link className="btn btn-ghost" to="/about">
                {s.home.ctaAbout}
              </Link>
            </div>
          </div>
          <div className="hero-photo">
            <img src={campaign.avatar} alt={campaign.name} />
            <Countdown />
          </div>
        </div>

        <div className="wrap vote-band">
          <div className="card">
            <img src="/icons/icon_step_ballot.png" alt="" />
            <div className="dates">
              <b>{s.home.voteBandTitle}</b>
              <br />
              {s.home.voteBandDates}
              <br />
              <span className="sub">{s.home.voteBandNote}</span>
            </div>
            <div className="cta">
              <a className="btn btn-orange" href={VOTE_URL} rel="noopener" target="_blank">
                {s.home.voteBandCta}
              </a>
              <small>
                {s.home.voteBandSmall}
                {' · '}
                <Link to="/how-to-vote">{s.home.voteBandLink}</Link>
              </small>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap doors">
          {s.home.doors.map((door) => (
            <div className={door.accent ? 'card door orange' : 'card door'} key={door.to}>
              <img src={`/icons/${door.icon}.png`} alt="" />
              <h3>{door.title}</h3>
              <p>{door.text}</p>
              <Link to={door.to}>{door.link}</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
