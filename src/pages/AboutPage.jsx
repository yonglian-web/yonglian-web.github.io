import { Link } from 'react-router-dom';
import { campaign } from '../data/campaign.js';
import { useSite } from '../data/useSite.js';
import { Icon } from '../components/Icon.jsx';

export function AboutPage() {
  const s = useSite();
  const p = s.about;

  return (
    <div className="cs-page-anim">
      <div className="cs-page-head">
        <div className="cs-page-head__inner">
          <h2>{p.title}</h2>
          <p>{p.sub}</p>
        </div>
      </div>

      <section className="cs-section">
        <div className="cs-about-grid">
          <div>
            <div className="cs-about__photo">
              <img src={campaign.avatar} alt={campaign.name} />
            </div>
            <div className="cs-about__btns">
              <a className="cs-btn cs-btn--blue" href="/cv.pdf" target="_blank" rel="noopener">
                <Icon name="download" size={16} stroke={1.9} />
                {p.ctaCv}
              </a>
              <a className="cs-btn cs-btn--ghost" href={`mailto:${campaign.contactEmail}`}>
                <Icon name="mail" size={16} stroke={1.9} />
                {p.ctaContact}
              </a>
            </div>
            {/* Links into the detailed academic CV sub-site (kept from the earlier build). */}
            <Link className="cs-about__cvlink" to="/honors">
              {p.ctaPersonal}
              <Icon name="arrow" size={15} stroke={2} />
            </Link>
          </div>

          <div>
            <p className="cs-about__lead" dangerouslySetInnerHTML={{ __html: p.bio }} />

            <h3 className="cs-hgroup">{p.researchTitle}</h3>
            <div className="cs-tags">
              {p.researchTags.map((tag, i) => (
                <span className="cs-tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="cs-about__cols">
              <div>
                <h3 className="cs-hgroup">{p.honorsTitle}</h3>
                <div className="cs-linelist">
                  {p.honors.map((h, i) => (
                    <div className="cs-linelist__item" key={i}>
                      <Icon name="award" size={20} stroke={1.7} style={{ color: '#e88a17' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="cs-hgroup">{p.serviceTitle}</h3>
                <div className="cs-linelist">
                  {p.service.map((item, i) => (
                    <div className="cs-linelist__item" key={i}>
                      <Icon name="check" size={20} stroke={1.9} style={{ color: '#00629b' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
