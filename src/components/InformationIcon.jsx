import React from 'react'
import { useTranslation } from '../localization/TranslationContext'
import Modal from '../components/Modal'
import Icon from './Icon'
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
    <React.Fragment>
      <div className="info-icon">
        <img
          className="info-icon__image"
          title={t(title)}
          alt={t(alt)}
          src={assetSrc(src)}
          onClick={open}
        />
        <p className="info-icon__subtitle" title={t(title)} onClick={open}>
          {t(title)}
        </p>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={close}
        title={t(title)}
        icon={{ src: assetSrc(src), alt: t(alt) }}
        footer={
          <div className="info-icon__button-group">
            {prev ? (
              <span className="info-icon__button-wrapper">
                <img
                  className="info-icon__logo"
                  src={assetSrc(prevLogo)}
                  alt={t(prevLogoAlt)}
                  onClick={prev}
                />
                <button
                  type="button"
                  className="info-icon__button icon"
                  onClick={prev}
                >
                  <Icon name="arrow-left" />
                </button>
              </span>
            ) : (
              <span className="info-icon__invisible" aria-hidden="true" />
            )}
            {next ? (
              <span className="info-icon__button-wrapper">
                <button
                  type="button"
                  className="info-icon__button icon"
                  onClick={next}
                >
                  <Icon name="arrow-right" />
                </button>
                <img
                  className="info-icon__logo"
                  src={assetSrc(nextLogo)}
                  alt={t(nextLogoAlt)}
                  onClick={next}
                />
              </span>
            ) : (
              <span className="info-icon__invisible" aria-hidden="true" />
            )}
          </div>
        }
      >
        <React.Fragment>{children}</React.Fragment>
      </Modal>
    </React.Fragment>
  )
}

export default IconWrapper
