import { useTranslation } from '../localization/TranslationContext'

import Gallery from '../components/Gallery'

const Projects = ({ language, projects }) => {
  const { t } = useTranslation()
  return (
    <section id="three">
      <h2>{t('projects')}</h2>
      <Gallery language={language} projects={projects} />
    </section>
  )
}

export default Projects
