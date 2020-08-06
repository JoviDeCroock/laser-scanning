import React from 'react'
import { useTranslation } from 'react-i18next'

import projects from '../constants/projects'
import Gallery from '../components/Gallery'

const Projects = () => {
  const { t } = useTranslation()
  return (
    <section id="three">
      <h2>{t('recentWork')}</h2>
      <Gallery images={projects} />
    </section>
  )
}

export default Projects
