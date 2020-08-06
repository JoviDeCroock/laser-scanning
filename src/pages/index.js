import React from 'react'
import { useLang, useTitle, useMeta } from 'hooked-head'
import { useTranslation } from 'react-i18next'

import '../localization/i18n'
import Layout from '../components/layout'

import Skills from '../areas/Skills'
import Contact from '../areas/Contact'
import Projects from '../areas/Projects'

const HomeIndex = () => {
  const [language, setLanguage] = React.useState('nl')
  const prevLanguage = React.useRef(language)
  const { t, i18n } = useTranslation()

  useLang(language);
  useTitle('EDS Systems');
  /* TODO: facebook and twitter meta tags. */
  useMeta({ name: 'description', content: t('siteDescription') });

  React.useEffect(() => {
    if (prevLanguage.current !== language) {
      i18n.changeLanguage(prevLanguage.current = language)
    }
  }, [language, i18n])

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <div id="main">
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Layout>
  )
}

export default HomeIndex
