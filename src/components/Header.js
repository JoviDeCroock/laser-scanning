import React from 'react'
import { useTranslation } from 'react-i18next'

import Footer from './Footer'
import avatar from '../assets/images/website-icon.png'
import LanguageSelector from './LanguageSelector'

const Header = ({ language, setLanguage }) => {
  const { t } = useTranslation()
  return (
    <header id="header">
      <div className="inner">
        <img src={avatar} className="image avatar" alt="EDS Systems" />
        <h1>
          <strong>EDS Systems</strong>
        </h1>
        <h3>
          <strong>Mark Swinnen</strong>
        </h3>
        <p style={{ fontSize: '1em' }}>
          {t('scanning')}
        </p>
        <LanguageSelector language={language} setLanguage={setLanguage} />
      </div>
      <Footer />
    </header>
  )
}

export default Header
