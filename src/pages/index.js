import React from 'react'
import Helmet from 'react-helmet'
import { useTranslation } from 'react-i18next'

import '../localization/i18n'
import Layout from '../components/layout'

import Skills from '../areas/Skills'
// import Introduction from '../areas/Introduction';
import Contact from '../areas/Contact'
import Projects from '../areas/Projects'

const siteTitle = 'EDS Systems'

const HomeIndex = () => {
  const [language, setLanguage] = React.useState('nl')
  const prevLanguage = React.useRef(language)
  const { t, i18n } = useTranslation()

  React.useEffect(() => {
    if (prevLanguage.current !== language) {
      i18n.changeLanguage(prevLanguage.current = language)
    }
  }, [language, i18n])

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <Helmet>
        {/* TODO: translate title */}
        <title>{siteTitle}</title>
        <html lang={language} />
        <meta name="description" content={t('siteDescription')} />
        {/* TODO: facebook and twitter meta tags. */}
      </Helmet>
      <div id="main">
        {/* TODO: fill introduction with text */}
        {/* <Introduction /> */}
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Layout>
  )
}

export default HomeIndex
