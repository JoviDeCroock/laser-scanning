import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import drawing from '../assets/images/icons/3ddrawing.png'
import scanner from '../assets/images/icons/3dscanner.png'
import plan from '../assets/images/icons/plan.png'
import pointcloud from '../assets/images/icons/pointcloud.png'

const ImageWrapper = styled.img`
  cursor: pointer;
  width: 25%;
  height: 25%;
`

const Skills = () => {
  const { t } = useTranslation()

  // TODO: onClick of icon open modal with information.
  return (
    <section id="two">
      <div className="skills">
        <h2>{t('skills')}</h2>
        <ImageWrapper src={scanner}/>
        <ImageWrapper src={pointcloud} />
        <ImageWrapper src={plan} />
        <ImageWrapper src={drawing} />
      </div>
    </section>
  )
}

export default Skills
