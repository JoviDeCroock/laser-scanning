import React from 'react'
import { useLang, useTitle, useMeta } from 'hooked-head'
import { useTranslation } from 'react-i18next'

import '../localization/i18n'
import Layout from '../components/layout'

import ThreeDInformation from '../areas/3DInformation'
import Contact from '../areas/Contact'
import Projects from '../areas/Projects'
import Introduction from '../areas/Introduction';

const HomeIndex = () => {
  const [language, setLanguage] = React.useState('nl')
  const prevLanguage = React.useRef(language)
  const { t, i18n } = useTranslation()

  useLang(language);
  useTitle('EDS Systems');
  useMeta({ name: 'description', content: t('siteDescription') });

  React.useEffect(() => {
    if (prevLanguage.current !== language) {
      i18n.changeLanguage(prevLanguage.current = language)
    }
  }, [language, i18n])

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <div id="main">
        <Introduction />
        <ThreeDInformation />
        <Projects />
        <Contact />
      </div>
    </Layout>
  )
}

export default HomeIndex
