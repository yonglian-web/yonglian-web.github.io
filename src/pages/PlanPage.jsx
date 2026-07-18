import { useSite } from '../data/useSite.js';
import { Icon } from '../components/Icon.jsx';

export function PlanPage() {
  const s = useSite();
  const p = s.plan;

  return (
    <div className="cs-page-anim">
      <div className="cs-page-head">
        <div className="cs-page-head__inner">
          <h2>{p.title}</h2>
          <p>{p.sub}</p>
        </div>
      </div>

      <section className="cs-section">
        <div className="cs-promise-grid">
          {p.promises.map((promise, i) => (
            <div className={`cs-card cs-promise cs-promise--${promise.accent}`} key={i}>
              <div className="cs-promise__head">
                <span className={`cs-chip cs-chip--sm cs-chip--${promise.accent}`}>
                  <Icon name={promise.icon} size={24} stroke={1.7} />
                </span>
                <span className="cs-promise__num">{promise.num}</span>
              </div>
              <div className="cs-promise__title">{promise.title}</div>
              <div className="cs-promise__block">
                <div className="cs-promise__sub">{p.whyLabel}</div>
                <p className="cs-promise__why">{promise.why}</p>
              </div>
              <div className="cs-promise__block">
                <div className="cs-promise__sub">{p.gainLabel}</div>
                <ul>
                  {promise.gains.map((g, j) => (
                    <li key={j}>{g}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="cs-goal">
          <span className="cs-goal__chip">
            <Icon name="target" size={28} stroke={1.7} />
          </span>
          <p>{p.goal}</p>
        </div>
      </section>
    </div>
  );
}
