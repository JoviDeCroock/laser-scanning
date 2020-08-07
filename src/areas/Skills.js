import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import drawing from '../assets/images/icons/3ddrawing.png'
import scanner from '../assets/images/icons/3dscanner.png'
import plan from '../assets/images/icons/plan.png'
import pointcloud from '../assets/images/icons/pointcloud.png'

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
`

const Image = styled.img`
  cursor: pointer;
  width: 20%;
  height: 20%;
`

const Skills = () => {
  const { t } = useTranslation()

  // TODO: onClick of icon open modal with information.
  return (
    <section id="two">
      <div className="skills">
        <h2>{t('skills')}</h2>
        <Gallery>
          <Image alt="3D laser scanner" src={scanner}/>
          <Image alt="pointcloud" src={pointcloud} />
          <Image alt="plan of a building" src={plan} />
          <Image alt="3D model of building" src={drawing} />
        </Gallery>

      </div>
    </section>
  )
}

export default Skills
