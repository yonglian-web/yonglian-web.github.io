import { useSite } from '../data/useSite.js';

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

      <section className="cs-section">
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
          {p.serviceTitle}
        </h3>
        <div className="cs-card cs-service">
          {p.serviceList.map((item, i) => (
            <div className="cs-service__item" key={i}>
              <span className="cs-service__year">{item.year}</span>
              <span className="cs-service__text">{item.text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
