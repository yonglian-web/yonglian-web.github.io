import { useTranslation } from 'react-i18next';
import { Button } from './Button.jsx';

// Home (election) hero CTAs: Vote links to IEEE official election page; View Website
// navigates into the personal CV section (Honors & Awards entry).
export function HeroActions() {
  const { t } = useTranslation();

  return (
    <div className="hero__actions">
      <Button href="https://www.ieee.org/about/corporate/election/technical-activities#yong-peter-lian12?utm_source=website&utm_medium=organic&utm_campaign=2026-candidate-video-lian-bio" variant="inverse">
        {t('buttons.vote')}
      </Button>
      <Button to="/honors" variant="ghost">
        {t('buttons.viewWebsite')}
      </Button>
    </div>
  );
}
