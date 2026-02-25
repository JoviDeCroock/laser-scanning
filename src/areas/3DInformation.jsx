import React from 'react'
import { useTranslation } from 'react-i18next'
import IconWrapper from '../components/InformationIcon'
import infoBlocks from '../constants/infoBlocks'
import services from '../constants/services'
import assetSrc from '../lib/assetSrc'

const ThreeDInformation = () => {
  const [opened, setIsOpened] = React.useState(0)
  const { t } = useTranslation()
  const close = () => setIsOpened(0)

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <div className="section-header">
          <p className="section-number">02 — {t('threeD')}</p>
          <h2 className="section-title">{t('threeD')}</h2>
        </div>

        <div className="info-cards">
          {infoBlocks.map((info, i) => {
            const index = i + 1
            const prev = i >= 1 ? () => setIsOpened(index - 1) : undefined
            const next =
              i < infoBlocks.length - 1
                ? () => setIsOpened(index + 1)
                : undefined

            const props = {
              close,
              prev,
              next,
              src: info.icon,
              title: info.title,
              alt: info.alt,
              open: () => setIsOpened(index),
              isOpen: opened === index,
            }

            if (next) {
              props.nextLogoAlt = infoBlocks[i + 1].alt
              props.nextLogo = infoBlocks[i + 1].icon
            }

            if (prev) {
              props.prevLogoAlt = infoBlocks[i - 1].alt
              props.prevLogo = infoBlocks[i - 1].icon
            }

            return (
              <IconWrapper key={info.title} {...props}>
                {info.paragraphs.map(key => (
                  <p key={key} style={{ lineHeight: 1.9, color: '#a0b0c0', marginBottom: '1.25em' }}>
                    {t(key)}
                  </p>
                ))}
                {info.image && (
                  <div style={{ marginTop: '1.5rem', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <img
                      src={assetSrc(info.image)}
                      alt={t(info.alt)}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                )}
              </IconWrapper>
            )
          })}
        </div>

        {/* Services workflow */}
        <div className="services-workflow">
          <span className="services-workflow__label">{t('service')}</span>
          {services.map((service, i) => (
            <div className="workflow-item" key={i}>
              <div className="workflow-item__icons">
                {service.icons.map(({ src, alt }, j) => {
                  const isLast = j === service.icons.length - 1
                  return (
                    <React.Fragment key={j}>
                      <img
                        className="workflow-item__icon"
                        src={assetSrc(src)}
                        alt={t(alt)}
                      />
                      {!isLast && (
                        <span className="workflow-item__arrow">→</span>
                      )}
                    </React.Fragment>
                  )
                })}
              </div>
              <p className="workflow-item__text">{t(service.copy)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThreeDInformation
