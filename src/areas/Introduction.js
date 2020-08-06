import React from 'react'
import { useTranslation } from 'react-i18next'

const Introduction = () => {
  const { t } = useTranslation()
  return (
    <section id="one">
      <header className="major">
        <h2>{t('introTitle')}</h2>
      </header>
      <p>{t('intro')}</p>
    </section>
  )
}

export default Introduction
