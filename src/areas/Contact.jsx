import React from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <p className="section-number">04 — {t('getInTouch')}</p>
          <h2 className="section-title">{t('getInTouch')}</h2>
        </div>

        <div className="contact-grid">
          <div>
            <p className="contact-tagline">
              Ready to bring your project<br />
              into precise<br />
              <em>three dimensions.</em>
            </p>
            <p className="contact-intro">
              EDS Systems provides professional 3D laser scanning services for buildings,
              monuments, industrial installations, and infrastructure across Belgium.
              Get in touch with Mark Swinnen to discuss your project.
            </p>
          </div>

          <div>
            <div className="contact-item">
              <span className="contact-item__label">{t('address')}</span>
              <p className="contact-item__value">
                Legerbosstraat 18<br />
                Meise, 1860<br />
                {t('belgium')}
              </p>
            </div>
            <div className="contact-item">
              <span className="contact-item__label">{t('phone')}</span>
              <p className="contact-item__value">
                <a href="tel:+32477690609">+324 77 69 06 09</a>
              </p>
            </div>
            <div className="contact-item">
              <span className="contact-item__label">Email</span>
              <p className="contact-item__value">
                <a href="mailto:mark-eds-systems@telenet.be">
                  mark-eds-systems@telenet.be
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
