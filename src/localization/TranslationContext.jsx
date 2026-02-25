import React from 'react'
import { fallbackLanguage, translate } from './translations'

const TranslationContext = React.createContext({
  language: fallbackLanguage,
  setLanguage: () => {},
  t: key => key,
})

const TranslationProvider = ({ language, setLanguage, children }) => {
  const currentLanguage = language || fallbackLanguage

  const value = React.useMemo(
    () => ({
      language: currentLanguage,
      setLanguage,
      t: key => translate(currentLanguage, key),
    }),
    [currentLanguage, setLanguage]
  )

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

const useTranslation = () => React.useContext(TranslationContext)

export { TranslationProvider, useTranslation }
