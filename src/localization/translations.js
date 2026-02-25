import english from './english'
import dutch from './dutch'
import french from './french'

export const fallbackLanguage = 'nl'

export const translations = {
  en: english.translation,
  nl: dutch.translation,
  fr: french.translation,
}

export const translate = (language, key) =>
  translations[language]?.[key] || translations[fallbackLanguage]?.[key] || key
