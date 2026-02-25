import React from 'react'
import { useTranslation } from '../localization/TranslationContext'
import Icon from '../components/Icon'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <section id="four">
      <h2>{t('getInTouch')}</h2>
      <div className="row">
        <ul className="labeled-icons">
          <li>
            <h3 className="icon">
              <Icon name="home" />
              <span className="label">{t('address')}</span>
            </h3>
            Legerbosstraat 18
            <br />
            Meise, 1860
            <br />
            {t('belgium')}
          </li>
          <li>
            <h3 className="icon">
              <Icon name="mobile" />
              <span className="label">{t('phone')}</span>
            </h3>
            +324 77 69 06 09
          </li>
          <li>
            <h3 className="icon">
              <Icon name="envelope-o" />
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
