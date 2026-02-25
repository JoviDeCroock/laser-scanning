import { createContext } from 'preact'
import { useContext, useMemo } from 'preact/hooks'
import { fallbackLanguage, translate } from './translations'

const TranslationContext = createContext({
  language: fallbackLanguage,
  setLanguage: () => {},
  t: key => key,
})

const TranslationProvider = ({ language, setLanguage, children }) => {
  const currentLanguage = language || fallbackLanguage

  const value = useMemo(
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

const useTranslation = () => useContext(TranslationContext)

export { TranslationProvider, useTranslation }
