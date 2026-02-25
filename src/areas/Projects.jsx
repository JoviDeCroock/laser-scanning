import React from 'react'
import { useTranslation } from 'react-i18next'
import Gallery from '../components/Gallery'

const Projects = ({ language, projects }) => {
  const { t } = useTranslation()
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <p className="section-number">03 — {t('projects')}</p>
          <h2 className="section-title">{t('projects')}</h2>
        </div>
        <Gallery language={language} projects={projects} />
      </div>
    </section>
  )
}

export default Projects
