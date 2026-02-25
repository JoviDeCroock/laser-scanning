import { Fragment } from 'preact'
import { useState } from 'preact/hooks'
import { useTranslation } from '../localization/TranslationContext'
import IconWrapper from '../components/InformationIcon'
import Icon from '../components/Icon'
import infoBlocks from '../constants/infoBlocks'
import services from '../constants/services'
import assetSrc from '../lib/assetSrc'

const ThreeDInformation = () => {
  const [opened, setIsOpened] = useState(0)
  const { t } = useTranslation()
  const close = () => setIsOpened(0)

  return (
    <section id="two">
      <div className="skills">
        <h2>{t('threeD')}</h2>
        <div className="three-d-gallery">
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
                  <p key={key}>{t(key)}</p>
                ))}
                {info.image && (
                  <div className="three-d-body-image-wrapper">
                    <img
                      className="three-d-body-image"
                      src={assetSrc(info.image)}
                      alt={t(info.alt)}
                    />
                  </div>
                )}
              </IconWrapper>
            )
          })}
        </div>
        <p className="three-d-subtitle">{t('service')}</p>
        {services.map(service => (
          <div className="three-d-line" key={service.copy}>
            <div className="three-d-icons">
              {service.icons.map(({ src, alt }, i) => {
                const isLast = i === service.icons.length - 1
                return (
                  <Fragment key={`${src}-${alt}`}>
                    <img
                      className="three-d-icon-image"
                      src={assetSrc(src)}
                      alt={t(alt)}
                    />
                    {!isLast && (
                      <span className="three-d-arrow icon">
                        <Icon name="arrow-right" />
                      </span>
                    )}
                  </Fragment>
                )
              })}
            </div>
            <p className="three-d-text">{t(service.copy)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ThreeDInformation
