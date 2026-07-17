import { campaign } from '../data/campaign.js';
import { CvHeroActions } from './CvHeroActions.jsx';
import { FactStrip } from './FactStrip.jsx';

// CV-page hero (portrait left; icon + eyebrow + title + lead + CTAs right),
// followed by the shared candidate fact strip. `icon` names a badge in
// public/icons and colour-codes the page.
export function PageHero({ kicker, title, intro, icon }) {
  return (
    <>
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__portrait">
            <img src={campaign.avatar} alt={campaign.name} />
          </div>
          <div className="hero__content">
            {icon ? <img className="hero__icon" src={`/icons/${icon}.png`} alt="" /> : null}
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
