import React from 'react'

import Header from './Header'

const Layout = ({ children, language, setLanguage }) => (
  <div>
    <Header language={language} setLanguage={setLanguage} />
    {children}
  </div>
)

export default Layout
