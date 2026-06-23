import { useTranslation } from 'react-i18next';

// Simple contact-only footer for the CV pages (matches the personal academic
// site). The election home uses the fuller campaign SiteFooter instead.
export function CvSiteFooter({ campaign }) {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <section>
          <h2>{t('footer.contact')}</h2>
          <a href={`mailto:${campaign.contactEmail}`}>{campaign.contactEmail}</a>
          {campaign.contactPhone ? <a href={`tel:${campaign.contactPhone}`}>{campaign.contactPhone}</a> : null}
        </section>
      </div>
    </footer>
  );
}
