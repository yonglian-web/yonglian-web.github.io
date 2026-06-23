import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/PageHero.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';

export function ExperiencePage({ cv }) {
  const { t } = useTranslation();

  return (
    <article className="document-page">
      <PageHero
        kicker={t('experience.heroKicker')}
        title={t('experience.heroTitle')}
        intro={t('experience.heroIntro')}
      />

      <section className="document-band">
        <div className="document-section">
          <SectionHeading title={t('experience.educationTitle')} />
          <ul className="record-list">
            {cv.education.map((edu) => (
              <li key={edu.degree}>
                <time>{edu.year}</time>
                <span>
                  <strong>{edu.degree}</strong>
                  <em className="cv-affil">{edu.institution}</em>
                  {edu.detail ? <span className="cv-detail">{edu.detail}</span> : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="document-band document-band--muted">
        <div className="document-section">
          <SectionHeading title={t('experience.employmentTitle')} />
          <ul className="record-list">
            {cv.employment.map((job, index) => (
              <li key={`${job.period}-${index}`}>
                <time>{job.period}</time>
                <span>
                  <strong>{job.position}</strong>
                  {job.org ? <em className="cv-affil">{job.org}</em> : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
