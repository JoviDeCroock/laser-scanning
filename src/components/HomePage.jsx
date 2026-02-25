import React from 'react'
import Layout from './layout'

import ThreeDInformation from '../areas/3DInformation'
import Contact from '../areas/Contact'
import Projects from '../areas/Projects'
import Introduction from '../areas/Introduction'

const HomePage = ({ projects }) => {
  const [language, setLanguage] = React.useState('nl')

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <div id="main">
        <Introduction />
        <ThreeDInformation />
        <Projects language={language} projects={projects} />
        <Contact />
      </div>
    </Layout>
  )
}

export default HomePage
