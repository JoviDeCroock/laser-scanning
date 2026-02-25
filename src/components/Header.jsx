import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'
import assetSrc from '../lib/assetSrc'
import avatar from '../assets/images/website-icon.png'

const Header = ({ language, setLanguage }) => {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="site-header__inner">
        <a href="#hero" className="site-header__brand">
          <img src={assetSrc(avatar)} alt="EDS Systems" />
          <div>
            <span className="site-header__brand-name">EDS Systems</span>
            <span className="site-header__brand-sub">Mark Swinnen</span>
          </div>
        </a>

        <nav className="site-header__nav">
          <a href="#intro">{t('introduction')}</a>
          <a href="#services">{t('threeD')}</a>
          <a href="#projects">{t('projects')}</a>
          <a href="#contact">{t('getInTouch')}</a>
        </nav>

        <div className="site-header__right">
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  )
}

export default Header
