import React from 'react'

import Header from './Header'
import { TranslationProvider } from '../localization/TranslationContext'

const Layout = ({ children, language, setLanguage }) => (
  <div>
    <TranslationProvider language={language} setLanguage={setLanguage}>
      <Header language={language} setLanguage={setLanguage} />
      {children}
    </TranslationProvider>
  </div>
)

export default Layout
