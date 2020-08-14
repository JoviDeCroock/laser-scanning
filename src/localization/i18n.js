import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import english from './english'
import dutch from './dutch'
import french from './french'

const resources = {
  // en: english,
  nl: dutch,
  fr: french,
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'nl',
  keySeparator: false,
  interpolation: { escapeValue: false },
})

export default i18n
