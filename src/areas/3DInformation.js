import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import IconWrapper from '../components/InformationIcon'
import infoBlocks from '../constants/infoBlocks'

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Skills = () => {
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
                {info.paragraphs.map(t => <p>{t}</p>)}
              </IconWrapper>
            ) 
          })}
        </Gallery>
      </div>
    </section>
  )
}

export default Skills
