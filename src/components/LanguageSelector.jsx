const LanguageSelector = ({ language, setLanguage }) => (
  <div className="language-selector">
    <button
      type="button"
      className={`language-selector__option ${
        language === 'nl' ? 'is-selected' : ''
      }`}
      onClick={() => setLanguage('nl')}
    >
      NL
    </button>
    <span aria-hidden="true" className="language-selector__separator">
      |
    </span>
    <button
      type="button"
      className={`language-selector__option ${
        language === 'fr' ? 'is-selected' : ''
      }`}
      onClick={() => setLanguage('fr')}
    >
      FR
    </button>
    <span aria-hidden="true" className="language-selector__separator">
      |
    </span>
    <button
      type="button"
      className={`language-selector__option ${
        language === 'en' ? 'is-selected' : ''
      }`}
      onClick={() => setLanguage('en')}
    >
      EN
    </button>
  </div>
)

export default LanguageSelector
