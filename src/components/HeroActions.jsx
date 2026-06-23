import { useTranslation } from 'react-i18next';
import { Button } from './Button.jsx';

// Home (election) hero CTAs: Vote scrolls to the Statement section; View Website
// navigates into the personal CV section (Education & Employment entry).
export function HeroActions() {
  const { t } = useTranslation();

  function scrollToStatement(event) {
    event.preventDefault();
    document.getElementById('statement')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="hero__actions">
      <Button href="#statement" variant="inverse" onClick={scrollToStatement}>
        {t('buttons.vote')}
      </Button>
      <Button to="/experience" variant="ghost">
        {t('buttons.viewWebsite')}
      </Button>
    </div>
  );
}
