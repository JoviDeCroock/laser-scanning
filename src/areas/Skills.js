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
        <ImageWrapper alt="3D laser scanner" src={scanner}/>
        <ImageWrapper alt="pointcloud" src={pointcloud} />
        <ImageWrapper alt="plan of a building" src={plan} />
        <ImageWrapper alt="3D model of building" src={drawing} />
      </div>
    </section>
  )
}

export default Skills
