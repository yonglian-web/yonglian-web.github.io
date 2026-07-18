import { useSite } from '../data/useSite.js';
import { Icon } from '../components/Icon.jsx';

export function WhyRunningPage() {
  const s = useSite();
  const p = s.whyRun;

  return (
    <div className="cs-page-anim">
      <div className="cs-page-head">
        <div className="cs-page-head__inner">
          <h2>{p.title}</h2>
          <p>{p.sub}</p>
        </div>
      </div>

      <section className="cs-section" style={{ paddingTop: 0 }}>
        <div className="cs-quote cs-quote--wide">
          <svg width="44" height="44" viewBox="0 0 24 24" className="cs-quote__mark" fill="currentColor" aria-hidden="true">
            <path d="M6.5 6h4.5v5c0 3-2 5.2-5 5.4v-2.3c1.3-.2 2.2-1.1 2.3-2.6H6.5z M14 6h4.5v5c0 3-2 5.2-5 5.4v-2.3c1.3-.2 2.2-1.1 2.3-2.6H14z" />
          </svg>
          <p dangerouslySetInnerHTML={{ __html: p.quote }} />
        </div>

        <h3 className="cs-h3">{p.reasonsTitle}</h3>
        <div className="cs-reasons">
          {p.reasons.map((r, i) => (
            <div className="cs-reason" key={i}>
              <span className={`cs-reason__chip cs-chip cs-chip--round cs-chip--${r.accent}`}>
                <Icon name={r.icon} size={32} stroke={1.7} />
              </span>
              <div className="cs-reason__label" dangerouslySetInnerHTML={{ __html: r.label }} />
            </div>
          ))}
        </div>

        <h3 className="cs-h3" style={{ marginTop: '56px' }}>
          {p.visionTitle}
        </h3>
        <p className="cs-h3__sub">{p.visionSub}</p>
        <div className="cs-vision-grid">
          {p.pillars.map((pillar, i) => (
            <div className="cs-card cs-vision" key={i}>
              <span className={`cs-chip cs-chip--${pillar.accent}`}>
                <Icon name={pillar.icon} size={26} stroke={1.7} />
              </span>
              <div className="cs-vision__title">{pillar.title}</div>
              <p className="cs-vision__text">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
