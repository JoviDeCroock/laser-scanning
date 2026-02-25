import React from 'react'
import { useTranslation } from '../localization/TranslationContext'

import Footer from './Footer'
import avatar from '../assets/images/website-icon.png'
import LanguageSelector from './LanguageSelector'
import assetSrc from '../lib/assetSrc'

const Header = ({ language, setLanguage }) => {
  const { t } = useTranslation()
  return (
    <header id="header">
      <div className="inner">
        <img
          src={assetSrc(avatar)}
          className="image avatar"
          alt="EDS Systems"
          width="128"
          height="128"
          fetchPriority="high"
          decoding="async"
        />
        <h1>
          <strong>EDS Systems</strong>
        </h1>
        <h2>
          <strong>Mark Swinnen</strong>
        </h2>
        <p style={{ fontSize: '1em' }}>{t('scanning')}</p>
        <LanguageSelector language={language} setLanguage={setLanguage} />
      </div>
      <a className="header-contact-link" href="#four">
        Contact
      </a>
      <Footer />
    </header>
  )
}

export default Header
