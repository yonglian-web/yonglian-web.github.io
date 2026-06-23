import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/PageHero.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { CvList } from '../components/CvList.jsx';

export function ResearchPage({ cv }) {
  const { t } = useTranslation();
  const { research } = cv;

  return (
    <article className="document-page">
      <PageHero
        kicker={t('research.heroKicker')}
        title={t('research.heroTitle')}
        intro={t('research.heroIntro')}
      />

      <section className="document-band">
        <div className="document-section">
          <SectionHeading title={t('research.interestsTitle')} />
          <p>{t('research.interestsIntro')}</p>
          <CvList items={research.interests} />
        </div>
      </section>

      <section className="document-band document-band--muted">
        <div className="document-section">
          <SectionHeading title={t('research.grantsTitle')} />
          <p>{t('research.grantsText')}</p>
        </div>
      </section>

      <section className="document-band">
        <div className="document-section">
          <SectionHeading title={t('research.outputTitle')} />
          <p>{t('research.pubSummary')}</p>
          <p>
            {t('research.pubLink')}{' '}
            <a href={research.scholarUrl} target="_blank" rel="noreferrer">
              {research.scholarUrl}
            </a>
          </p>
        </div>
      </section>

      <section className="document-band document-band--muted">
        <div className="document-section">
          <SectionHeading title={t('research.mentoringTitle')} />
          <p>{t('research.supervisionText')}</p>
        </div>
      </section>

      <section className="document-band">
        <div className="document-section">
          <SectionHeading title={t('research.talksTitle')} />
          <CvList items={research.keynotes} ordered />
        </div>
      </section>
    </article>
  );
}
