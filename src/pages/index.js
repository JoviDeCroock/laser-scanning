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
  useTitle('EDS Systems - laser scanning');
  useMeta({ name: 'description', content: t('siteDescription') });
  useMeta({ property: 'og:description', content: t('siteDescription') });
  useMeta({ property: 'og:title', content: 'EDS Systems - laser scanning' });
  useMeta({ property: 'og:type', content: 'website' });
  useMeta({ property: 'og:image', content: 'https://eds-systems.be/website-icon.png' });
  useMeta({ name: 'twitter:card', content: 'summary' });
  useMeta({ name: 'robots', content: 'index, follow' });
  useMeta({ name: 'keywords', content: '3D laserscanning bim' })

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
        <Projects language={language} />
        <Contact />
      </div>
    </Layout>
  )
}

export default HomeIndex
