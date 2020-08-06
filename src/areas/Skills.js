import React from 'react'
import { useTranslation } from 'react-i18next'

import SkillIndicator from '../components/SkillIndicator'

const Skills = () => {
  const { t } = useTranslation()
  return (
    <section id="two">
      <div className="skills">
        <h2>{t('skills')}</h2>
        <SkillIndicator title="AutoCad" level={8} />
        <SkillIndicator title="Adobe Photoshop" level={7.5} />
        <SkillIndicator title="Adobe InDesign" level={7.5} />
        <SkillIndicator title="Sketchup" level={7.5} />
        <SkillIndicator title="Revit" level={7.5} />
        <SkillIndicator title="Rhinoceros" level={5} />
      </div>
    </section>
  )
}

export default Skills
