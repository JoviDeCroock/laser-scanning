import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import services from '../constants/services';

const Line = styled.div`
  align-items: unset;
  display: flex;
  margin-bottom: 12px;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1350px) {
    flex-direction: row;
    justify-content: unset;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`

const Icons = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 12px;
  @media (min-width: 1350px) {
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
  @media (min-width: 1350px) {
    margin-bottom: 0;
    width: 65%;
  }
`;

const Introduction = () => {
  const { t } = useTranslation()
  return (
    <section id="one">
      <div className="introduction">
        <h2>{t('introduction')}</h2>
        <p>{t('introCopy')}</p>
        <p>{t('service')}</p>
        {services.map(service => (
          <Line>
            <Icons>
              {service.icons.map((src, i) => {
                const isLast = i === service.icons.length - 1;
                return (
                  <React.Fragment>
                    <Image src={src} alt="image" />
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

export default Introduction
