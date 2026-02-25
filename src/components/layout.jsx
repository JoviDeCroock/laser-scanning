import React from 'react'
import Header from './Header'

const Layout = ({ children, language, setLanguage }) => (
  <>
    <Header language={language} setLanguage={setLanguage} />
    {children}
  </>
)

export default Layout
