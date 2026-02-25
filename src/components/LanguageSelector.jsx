import React from 'react'

const LanguageSelector = ({ language, setLanguage }) => (
  <div className="lang-selector">
    {['nl', 'fr', 'en'].map(lang => (
      <p
        key={lang}
        className={`lang-option${language === lang ? ' active' : ''}`}
        onClick={() => setLanguage(lang)}
      >
        {lang.toUpperCase()}
      </p>
    ))}
  </div>
)

export default LanguageSelector
