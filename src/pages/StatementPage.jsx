import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { HeroActions } from '../components/HeroActions.jsx';
import { FactStrip } from '../components/FactStrip.jsx';
import { campaignZh } from '../data/campaignZh.js';

export function StatementPage({ campaign }) {
  const { t, i18n } = useTranslation();
  // Frozen homepage: English reads the untouched campaign object; only when the
  // language is Chinese do we swap in the translated dataset.
  const isZh = String(i18n.resolvedLanguage || i18n.language || 'en').startsWith('zh');
  const c = isZh ? campaignZh : campaign;

  return (
    <article className="document-page">
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__portrait">
            <img src={campaign.avatar} alt={campaign.name} />
          </div>
          <div className="hero__content">
            <p className="eyebrow">{c.nomination}</p>
            <h1>{c.name}</h1>
            <p className="hero__role">
              {c.title}
              <br />
              {c.location}
            </p>
            <HeroActions />
          </div>
        </div>
      </section>

      <FactStrip />

      <section className="document-band" id="profile">
        <div className="document-section">
          <SectionHeading title={c.oneLine} />
          {c.biography.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="document-band document-band--muted" id="statement">
        <div className="document-section">
          <SectionHeading title={t('sections.statementTitle')} />
          {c.statement.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="document-band" id="activities">
        <div className="document-section">
          <SectionHeading title={c.activitiesTitle} />
          <p>{c.activitiesIntro}</p>
          <div className="ieee-activities">
            {c.activityGroups.map((group) => (
              <section className="ieee-activity-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="ieee-activity-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
