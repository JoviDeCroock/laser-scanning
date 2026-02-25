import { useState } from 'preact/hooks'
import Layout from './layout'

import ThreeDInformation from '../areas/3DInformation'
import Contact from '../areas/Contact'
import Projects from '../areas/Projects'
import Introduction from '../areas/Introduction'

const HomePage = ({ projects }) => {
  const [language, setLanguage] = useState('nl')

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <main id="main">
        <Introduction />
        <ThreeDInformation />
        <Projects language={language} projects={projects} />
        <Contact />
      </main>
    </Layout>
  )
}

export default HomePage
