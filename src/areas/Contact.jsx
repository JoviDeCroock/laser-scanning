import React from 'react'
import { useTranslation } from '../localization/TranslationContext'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <section id="four">
      <h2>{t('getInTouch')}</h2>
      <div className="row">
        <ul className="labeled-icons">
          <li>
            <h3 className="icon fa-home">
              <span className="label">{t('address')}</span>
            </h3>
            Legerbosstraat 18
            <br />
            Meise, 1860
            <br />
            {t('belgium')}
          </li>
          <li>
            <h3 className="icon fa-mobile">
              <span className="label">{t('phone')}</span>
            </h3>
            +324 77 69 06 09
          </li>
          <li>
            <h3 className="icon fa-envelope-o">
              <span className="label">Email</span>
            </h3>
            <a href="mailto:mark-eds-systems@telenet.be">
              mark-eds-systems@telenet.be
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
