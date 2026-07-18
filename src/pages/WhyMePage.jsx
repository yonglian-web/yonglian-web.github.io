import { useSite } from '../data/useSite.js';
import { Icon } from '../components/Icon.jsx';

export function WhyMePage() {
  const s = useSite();
  const p = s.whyMe;

  return (
    <div className="cs-page-anim">
      <div className="cs-page-head">
        <div className="cs-page-head__inner">
          <h2>{p.title}</h2>
          <p>{p.sub}</p>
        </div>
      </div>

      <section className="cs-section" style={{ paddingBottom: 0 }}>
        <div className="cs-card cs-stats">
          {p.stats.map((stat, i) => (
            <div style={{ display: 'contents' }} key={i}>
              {i > 0 ? <span className="cs-stats__divider" /> : null}
              <div className="cs-stat">
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="cs-h3" style={{ marginTop: '52px' }}>
          {p.achTitle}
        </h3>
        <div className="cs-ach-grid">
          {p.achievements.map((a, i) => (
            <div className="cs-card cs-ach" key={i}>
              <span className={`cs-chip cs-chip--sm cs-chip--${a.accent}`}>
                <Icon name={a.icon} size={24} stroke={1.7} />
              </span>
              <div className="cs-ach__title">{a.title}</div>
              <p className="cs-ach__text">{a.text}</p>
              <div className="cs-ach__slot">{a.slot}</div>
            </div>
          ))}
        </div>

        <h3 className="cs-h3" style={{ marginTop: '56px' }}>
          {p.timelineTitle}
        </h3>
        <div className="cs-timeline">
          <div className="cs-timeline__rail" aria-hidden="true" />
          <div className="cs-timeline__nodes">
            {p.timeline.map((t, i) => (
              <div className="cs-tl" key={i}>
                <div className="cs-tl__dot" />
                <div className="cs-tl__year">{t.year}</div>
                <div className="cs-tl__text">{t.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
