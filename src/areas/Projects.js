import React from 'react'
import { useTranslation } from 'react-i18next'

import projects from '../constants/projects'
import Gallery from '../components/Gallery'

const Projects = ({ language }) => {
  const { t } = useTranslation()
  return (
    <section id="three">
      <h2>{t('projects')}</h2>
      <Gallery images={projects} language={language} />
    </section>
  )
}

export default Projects
