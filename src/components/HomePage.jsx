import React from 'react'
import { useTranslation } from 'react-i18next'

import '../localization/i18n'
import Layout from './layout'
import Footer from './Footer'

import ThreeDInformation from '../areas/3DInformation'
import Contact from '../areas/Contact'
import Projects from '../areas/Projects'
import Introduction from '../areas/Introduction'

const HomePage = ({ projects }) => {
  const [language, setLanguage] = React.useState('nl')
  const prevLanguage = React.useRef(language)
  const { i18n } = useTranslation()

  React.useEffect(() => {
    if (prevLanguage.current !== language) {
      i18n.changeLanguage((prevLanguage.current = language))
    }
  }, [language, i18n])

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <div id="main">
        <Introduction />
        <ThreeDInformation />
        <Projects language={language} projects={projects} />
        <Contact />
        <Footer />
      </div>
    </Layout>
  )
}

export default HomePage
