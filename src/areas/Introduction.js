import React from 'react'
import { useTranslation } from 'react-i18next'

const Introduction = () => {
  const { t } = useTranslation()
  return (
    <section id="one">
      <div className="introduction">
        <h2>{t('introduction')}</h2>
        <p>Hallo</p>
      </div>
    </section>
  )
}

export default Introduction
