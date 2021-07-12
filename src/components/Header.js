import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Footer from './Footer'
import avatar from '../assets/images/website-icon.png'
import LanguageSelector from './LanguageSelector'

const ContactLink = styled.a`
  border: 0;
  color: rgb(232, 230, 227);
  cursor: pointer;
  text-decoration: none;
  width: unset !important;
`;

const Header = ({ language, setLanguage }) => {
  const { t } = useTranslation()
  return (
    <header id="header">
      <div className="inner">
        <img src={avatar} className="image avatar" alt="EDS Systems" />
        <h1>
          <strong>EDS Systems</strong>
        </h1>
        <h2>
          <strong>Mark Swinnen</strong>
        </h2>
        <p style={{ fontSize: '1em' }}>
          {t('scanning')}
        </p>
        <LanguageSelector language={language} setLanguage={setLanguage} />
      </div>
      <ContactLink href="#four">Contact</ContactLink>
      <Footer />
    </header>
  )
}

export default Header
