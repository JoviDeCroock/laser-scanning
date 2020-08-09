import intendantThreeD from '../assets/images/fulls/intendant/iso.jpg'
import intendantPlan from '../assets/images/fulls/intendant/plan.jpg'
import intendantSnede from '../assets/images/fulls/intendant/snede.jpg'
import intendantGevel from '../assets/images/fulls/intendant/gevel.jpg'

import loodsThreeD from '../assets/images/fulls/loods/iso.jpg'
import loodsPlan from '../assets/images/fulls/loods/plan.jpg'
import loodsSnede from '../assets/images/fulls/loods/snede.jpg'
import loodsGevel from '../assets/images/fulls/loods/gevel.jpg'

import penthouseThreeD from '../assets/images/fulls/penthouse/iso.jpg'
import penthousePlan from '../assets/images/fulls/penthouse/plan.jpg'
import penthousePlanDak from '../assets/images/fulls/penthouse/planDak.jpg'
import penthouseGevel from '../assets/images/fulls/penthouse/gevel.jpg'

import grootbijgaardestraatThreeD from '../assets/images/fulls/grootbijgaardestraat/iso.jpg'
import grootbijgaardestraatPlan from '../assets/images/fulls/grootbijgaardestraat/plan.jpg'
import grootbijgaardestraatSection from '../assets/images/fulls/grootbijgaardestraat/section.jpg'
import grootbijgaardestraatGevel from '../assets/images/fulls/grootbijgaardestraat/gevel.jpg'

export default [
  {
    id: 'Intendant',
    additionalImages: [
      { src: intendantThreeD },
      { src: intendantPlan },
      { src: intendantSnede },
      { src: intendantGevel },
    ],
    thumbnail: intendantThreeD,
    caption: 'Intendant',
    description: '2019',
  },
  {
    id: 'Loods',
    additionalImages: [
      { src: loodsThreeD },
      { src: loodsPlan },
      { src: loodsSnede },
      { src: loodsGevel },
    ],
    thumbnail: loodsThreeD,
    caption: 'Loods',
    description: '2019',
  },
  {
    id: 'Penthouse',
    additionalImages: [
      { src: penthouseThreeD },
      { src: penthousePlan },
      { src: penthousePlanDak },
      { src: penthouseGevel },
    ],
    thumbnail: penthouseThreeD,
    caption: 'Penthouse',
    description: '2020',
  },
  {
    id: 'Grootbijgaardestraat',
    additionalImages: [
      { src: grootbijgaardestraatThreeD },
      { src: grootbijgaardestraatPlan },
      { src: grootbijgaardestraatSection },
      { src: grootbijgaardestraatGevel },
    ],
    thumbnail: grootbijgaardestraatThreeD,
    caption: 'Grootbijgaardestraat',
    description: '2020',
  },
]
