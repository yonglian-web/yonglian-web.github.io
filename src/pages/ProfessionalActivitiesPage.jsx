import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/PageHero.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { CvList } from '../components/CvList.jsx';
import { CvRecordList } from '../components/CvRecordList.jsx';

export function ProfessionalActivitiesPage({ cv }) {
  const { t } = useTranslation();

  return (
    <article className="document-page">
      <PageHero
        kicker={t('professional.heroKicker')}
        title={t('professional.heroTitle')}
        intro={t('professional.heroIntro')}
      />

      <section className="document-band">
        <div className="document-section">
          <SectionHeading title={t('professional.boardsTitle')} />
          <CvList items={cv.professionalActivities} />
        </div>
      </section>

      <section className="document-band document-band--muted">
        <div className="document-section">
          <SectionHeading title={t('professional.editorialTitle')} />
          <div className="ieee-activities">
            <CvRecordList title={t('professional.editorialGroup1')} items={cv.editorialBoards} />
            <CvRecordList title={t('professional.editorialGroup2')} items={cv.guestEditors} />
          </div>
        </div>
      </section>

      <section className="document-band">
        <div className="document-section">
          <SectionHeading title={t('professional.conferencesTitle')} />
          <CvRecordList items={cv.conferenceCommittees} />
        </div>
      </section>
    </article>
  );
}
