import { useSite } from '../data/useSite.js';
import { Icon } from '../components/Icon.jsx';

const VOTE_URL =
  'https://www.ieee.org/about/corporate/election/technical-activities#yong-peter-lian12?utm_source=website&utm_medium=organic&utm_campaign=2026-candidate-video-lian-bio';

export function HowToVotePage() {
  const s = useSite();
  const p = s.howVote;

  return (
    <div className="cs-page-anim">
      <div className="cs-page-head">
        <div className="cs-page-head__inner">
          <h2>{p.title}</h2>
          <p>{p.sub}</p>
        </div>
      </div>

      <section className="cs-section" style={{ paddingBottom: 0 }}>
        <div className="cs-steps">
          {p.steps.map((step, i) => (
            <div style={{ display: 'contents' }} key={i}>
              {i > 0 ? (
                <span className="cs-step__arrow">
                  <Icon name="arrow" size={26} stroke={2} />
                </span>
              ) : null}
              <div className="cs-step">
                <span className="cs-step__chip">
                  <Icon name={step.icon} size={34} stroke={1.6} />
                </span>
                <div className="cs-step__label">{step.label}</div>
                <div className="cs-step__sub">{step.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="cs-vote-center">
          <a className="cs-btn cs-btn--orange" href={VOTE_URL} rel="noopener" target="_blank">
            {p.cta}
            <Icon name="arrow" size={19} stroke={2.2} />
          </a>
          <div className="cs-vote-center__note">{p.ctaNote}</div>
        </div>
      </section>

      <section className="cs-section" style={{ maxWidth: '1100px' }}>
        <h3 className="cs-h3" style={{ marginBottom: '26px' }}>
          {p.faqTitle}
        </h3>
        <div className="cs-faq">
          {p.faq.map((item, i) => (
            <div className="cs-faq-item" key={i}>
              <div className="cs-faq-item__q">
                <b>Q</b>
                {item.q}
              </div>
              <div className="cs-faq-item__a">
                <b>A</b>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
