import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/PageHero.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { CvList } from '../components/CvList.jsx';
import { CvRecordList } from '../components/CvRecordList.jsx';

export function TeachingPage({ cv }) {
  const { t } = useTranslation();
  const { teaching } = cv;

  return (
    <article className="document-page">
      <PageHero
        kicker={t('teaching.heroKicker')}
        title={t('teaching.heroTitle')}
        intro={t('teaching.heroIntro')}
      />

      <section className="document-band">
        <div className="document-section">
          <SectionHeading title={t('teaching.modulesTitle')} />
          <p>{t('teaching.modulesText')}</p>
        </div>
      </section>

      <section className="document-band document-band--muted">
        <div className="document-section">
          <SectionHeading title={t('teaching.awardsTitle')} />
          <div className="ieee-activities">
            <CvRecordList title={t('teaching.awardsUniversity')} items={teaching.awardsUniversity} sep="space" />
            <CvRecordList title={t('teaching.awardsFaculty')} items={teaching.awardsFaculty} sep="space" />
          </div>
        </div>
      </section>

      <section className="document-band">
        <div className="document-section">
          <SectionHeading title={t('teaching.methodsTitle')} />
          <CvList items={teaching.methods} />
        </div>
      </section>
    </article>
  );
}
