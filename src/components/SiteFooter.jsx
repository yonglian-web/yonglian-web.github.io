import { useTranslation } from 'react-i18next';

export function SiteFooter({ campaign }) {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <section className="site-footer__brand">
          <div className="brand brand--footer">
            <span>
              <span className="brand__name">{campaign.displayName}</span>
              <span className="brand__office">
                {t('header.brandFor')} {campaign.contesting}
              </span>
            </span>
          </div>
          <p>{t('footer.adapted')}</p>
        </section>

        <section>
          <h2>{t('footer.contact')}</h2>
          <a href={`mailto:${campaign.contactEmail}`}>{campaign.contactEmail}</a>
          {campaign.contactPhone ? <a href={`tel:${campaign.contactPhone}`}>{campaign.contactPhone}</a> : null}
          {/* Website shown but not clickable yet — personal site under construction */}
          {campaign.website ? (
            <span className="is-disabled-link" aria-disabled="true">
              {campaign.website}
            </span>
          ) : null}
        </section>
      </div>

      <p className="site-footer__disclaimer">{t('footer.disclaimer')}</p>
    </footer>
  );
}
