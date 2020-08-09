import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import IconWrapper from '../components/InformationIcon'
import infoBlocks from '../constants/infoBlocks'
import services from '../constants/services';

const Line = styled.div`
  align-items: unset;
  display: flex;
  margin-bottom: 12px;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1080px) {
    flex-direction: row;
    justify-content: unset;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`

const Icons = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 6px;
  @media (min-width: 1080px) {
    margin-bottom: 0;
    width: 35%;
  }
`;

const Arrow = styled.span`
  margin-right: 16px;
  margin-left: 16px;
  font-size: 16px;
`;

const Text = styled.p`
  margin: 0;
  margin-bottom: 12px;
  font-size: 16px;
  @media (min-width: 1080px) {
    margin-bottom: 0;
    width: 65%;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const SubTitle = styled.p`
  margin-top: 32px;
  margin-bottom: 16px;
`;

const BodyImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BodyImage = styled.img`
  width: 100%;
  height: auto;
`;

const ThreeDInformation = () => {
  const [opened, setIsOpened] = React.useState(0);
  const { t } = useTranslation()
  const close = () => setIsOpened(0);

  return (
    <section id="two">
      <div className="skills">
        <h2>{t('threeD')}</h2>
        <Gallery>
          {infoBlocks.map((info, i) => {
            const index = i + 1;
            const prev = i >= 1 ? () => setIsOpened(index - 1) : undefined;
            const next = i < infoBlocks.length - 1 ? () => setIsOpened(index + 1) : undefined;

            const props = {
              close,
              prev,
              next,
              src: info.icon,
              title: info.title,
              alt: info.alt,
              open: () => setIsOpened(index),
              isOpen: opened === index,
            };

            if (next) {
              props.nextLogoAlt = infoBlocks[i + 1].alt;
              props.nextLogo = infoBlocks[i + 1].icon;
            }

            if (prev) {
              props.prevLogoAlt = infoBlocks[i - 1].alt;
              props.prevLogo = infoBlocks[i - 1].icon;
            }

            return (
              <IconWrapper {...props}>
                {info.paragraphs.map(key => <p>{t(key)}</p>)}
                {info.image && <BodyImageWrapper><BodyImage src={info.image} alt={info.alt} /></BodyImageWrapper>}
              </IconWrapper>
            ) 
          })}
        </Gallery>
        <SubTitle>{t('service')}</SubTitle>
        {services.map(service => (
          <Line>
            <Icons>
              {service.icons.map(({ src, alt }, i) => {
                const isLast = i === service.icons.length - 1;
                return (
                  <React.Fragment>
                    <Image src={src} alt={alt} />
                    {!isLast && <Arrow className="icon fa-arrow-right" />}
                  </React.Fragment>
                )
              })}
            </Icons>
            <Text>{t(service.copy)}</Text>
          </Line>
        ))}
      </div>
    </section>
  )
}

export default ThreeDInformation
