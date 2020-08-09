import intendantThreeD from '../assets/images/fulls/intendant/iso.jpg'
import intendantPlan from '../assets/images/fulls/intendant/plan.jpg'
import intendantSnede from '../assets/images/fulls/intendant/snede.jpg'
import intendantGevel from '../assets/images/fulls/intendant/gevel.jpg'
import intendantPreview from '../assets/images/fulls/intendant/preview.jpg'

import loodsThreeD from '../assets/images/fulls/loods/iso.jpg'
import loodsPlan from '../assets/images/fulls/loods/plan.jpg'
import loodsSnede from '../assets/images/fulls/loods/snede.jpg'
import loodsGevel from '../assets/images/fulls/loods/gevel.jpg'
import loodsPreview from '../assets/images/fulls/loods/preview.jpg'

import penthouseThreeD from '../assets/images/fulls/penthouse/iso.jpg'
import penthousePlan from '../assets/images/fulls/penthouse/plan.jpg'
import penthousePlanDak from '../assets/images/fulls/penthouse/planDak.jpg'
import penthouseGevel from '../assets/images/fulls/penthouse/gevel.jpg'
import penthousePreview from '../assets/images/fulls/penthouse/preview.jpg'

import grootbijgaardestraatThreeD from '../assets/images/fulls/grootbijgaardestraat/iso.jpg'
import grootbijgaardestraatPlan from '../assets/images/fulls/grootbijgaardestraat/plan.jpg'
import grootbijgaardestraatSection from '../assets/images/fulls/grootbijgaardestraat/section.jpg'
import grootbijgaardestraatGevel from '../assets/images/fulls/grootbijgaardestraat/gevel.jpg'
import grootbijgaardestraatPreview from '../assets/images/fulls/grootbijgaardestraat/preview.jpg'

export default [
  {
    id: 'Intendant',
    additionalImages: [
      { src: intendantThreeD },
      { src: intendantPlan },
      { src: intendantSnede },
      { src: intendantGevel },
    ],
    thumbnail: intendantPreview,
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
    thumbnail: loodsPreview,
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
    thumbnail: penthousePreview,
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
    thumbnail: grootbijgaardestraatPreview,
    caption: 'Grootbijgaardestraat',
    description: '2020',
  },
]
