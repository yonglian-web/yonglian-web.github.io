import { useTranslation } from 'react-i18next';
import { Button } from './Button.jsx';
import { campaign } from '../data/campaign.js';

// CV-page hero CTAs: CV PDF + Contact + Election Website. (The election home hero
// uses HeroActions with Vote + View Website instead.) The Election Website button
// is the way back to the election home — it replaces the old "← Home" CV nav link.
export function CvHeroActions() {
  const { t } = useTranslation();

  return (
    <div className="hero__actions">
      <Button href="/cv.pdf" variant="inverse">
        {t('buttons.downloadCv')}
      </Button>
      <Button href={`mailto:${campaign.contactEmail}`} variant="ghost">
        {t('buttons.contact')}
      </Button>
      <Button to="/" variant="ghost">
        {t('buttons.electionSite')}
      </Button>
    </div>
  );
}
