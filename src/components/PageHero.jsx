import { campaign } from '../data/campaign.js';
import { CvHeroActions } from './CvHeroActions.jsx';
import { FactStrip } from './FactStrip.jsx';

// CV-page hero (portrait left; eyebrow + title + lead + CTAs right), followed by
// the shared candidate fact strip — same format as the election home hero.
export function PageHero({ kicker, title, intro }) {
  return (
    <>
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__portrait">
            <img src={campaign.avatar} alt={campaign.name} />
          </div>
          <div className="hero__content">
            {kicker ? <p className="eyebrow">{kicker}</p> : null}
            <h1>{title}</h1>
            {intro ? <p className="hero__role">{intro}</p> : null}
            <CvHeroActions />
          </div>
        </div>
      </section>
      <FactStrip />
    </>
  );
}
