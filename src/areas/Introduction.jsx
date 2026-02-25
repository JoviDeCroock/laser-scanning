import { useTranslation } from '../localization/TranslationContext'

const Introduction = () => {
  const { t } = useTranslation()
  return (
    <section id="one">
      <div className="introduction">
        <h2>{t('introduction')}</h2>
        <p>{t('introCopy')}</p>
      </div>
    </section>
  )
}

export default Introduction
