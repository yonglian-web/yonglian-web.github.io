import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/PageHero.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { Button } from '../components/Button.jsx';
import { CvList } from '../components/CvList.jsx';

export function PublicationsPage({ cv }) {
  const { t } = useTranslation();
  const { research } = cv;

  return (
    <article className="document-page">
      <PageHero
        kicker={t('publications.heroKicker')}
        title={t('publications.heroTitle')}
        intro={t('publications.heroIntro')}
      />

      <section className="document-band">
        <div className="document-section">
          <SectionHeading title={t('publications.overviewTitle')} />
          <p>{t('publications.summary')}</p>
          <p>{t('publications.note')}</p>
          <div className="document-lead">
            <div>
              <Button href={research.scholarUrl} variant="primary">
                {t('buttons.viewScholar')}
              </Button>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
