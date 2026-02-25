import React from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '../components/Modal'
import assetSrc from '../lib/assetSrc'

const IconWrapper = ({
  src,
  alt,
  title,
  children,
  isOpen,
  close,
  open,
  next,
  prev,
  prevLogo,
  prevLogoAlt,
  nextLogo,
  nextLogoAlt,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="info-card" onClick={open} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && open()}>
        <img
          className="info-card__icon"
          src={assetSrc(src)}
          alt={t(alt)}
          aria-hidden="true"
        />
        <span className="info-card__title">{t(title)}</span>
        <div className="info-card__caret" />
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={close}
        title={t(title)}
        icon={{ src: assetSrc(src), alt: t(alt) }}
        footer={
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {prev ? (
              <button
                onClick={e => { e.stopPropagation(); prev() }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'transparent',
                  border: '1px solid rgba(0, 212, 180, 0.25)',
                  borderRadius: '4px',
                  padding: '0.6em 1.2em',
                  cursor: 'pointer',
                  color: '#a0b0c0',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.7em',
                  letterSpacing: '0.1em',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#00d4b4'
                  e.currentTarget.style.color = '#00d4b4'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 180, 0.25)'
                  e.currentTarget.style.color = '#a0b0c0'
                }}
              >
                <img src={assetSrc(prevLogo)} alt={t(prevLogoAlt)} style={{ width: 24, height: 24, filter: 'brightness(0) invert(1) opacity(0.6)' }} />
                ← Prev
              </button>
            ) : (
              <span style={{ visibility: 'hidden', width: '80px' }} />
            )}
            {next ? (
              <button
                onClick={e => { e.stopPropagation(); next() }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'transparent',
                  border: '1px solid rgba(0, 212, 180, 0.25)',
                  borderRadius: '4px',
                  padding: '0.6em 1.2em',
                  cursor: 'pointer',
                  color: '#a0b0c0',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.7em',
                  letterSpacing: '0.1em',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#00d4b4'
                  e.currentTarget.style.color = '#00d4b4'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 180, 0.25)'
                  e.currentTarget.style.color = '#a0b0c0'
                }}
              >
                Next →
                <img src={assetSrc(nextLogo)} alt={t(nextLogoAlt)} style={{ width: 24, height: 24, filter: 'brightness(0) invert(1) opacity(0.6)' }} />
              </button>
            ) : (
              <span style={{ visibility: 'hidden', width: '80px' }} />
            )}
          </div>
        }
      >
        {children}
      </Modal>
    </>
  )
}

export default IconWrapper
