import { useTranslation } from 'react-i18next';
import { campaign } from '../data/campaign.js';

// Candidate facts bar shown directly under the hero on every page.
export function FactStrip() {
  const { t } = useTranslation();
  const facts = [
    [t('facts.memberSince'), campaign.memberSince],
    [t('facts.memberGrade'), campaign.memberGrade],
    [t('facts.region'), campaign.region],
    [t('facts.papers'), '350+'],
    [t('facts.awards'), '20+'],
  ];

  return (
    <section className="fact-strip" aria-label="Candidate facts">
      {facts.map(([label, value]) => (
        <div key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </section>
  );
}
