import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/PageHero.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { CvList } from '../components/CvList.jsx';

export function HonorsPage({ cv }) {
  const { t } = useTranslation();

  return (
    <article className="document-page">
      <PageHero
        kicker={t('honors.heroKicker')}
        title={t('honors.heroTitle')}
        intro={t('honors.heroIntro')}
      />

      <section className="document-band">
        <div className="document-section">
          <SectionHeading title={t('honors.honorsTitle')} />
          <CvList items={cv.honors} ordered />
        </div>
      </section>

      <section className="document-band document-band--muted">
        <div className="document-section">
          <SectionHeading title={t('honors.awardsTitle')} />
          <CvList items={cv.researchAwards} ordered />
        </div>
      </section>
    </article>
  );
}
