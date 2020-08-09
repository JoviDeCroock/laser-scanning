import drawing from '../assets/images/icons/3ddrawing.png'
import scanner from '../assets/images/icons/3dscanner.png'
import plan from '../assets/images/icons/plan.png'
import pointcloud from '../assets/images/icons/pointcloud.png'

import scanPlan from '../assets/images/scanPlan.jpg'
import scanCloud from '../assets/images/scanCloud.jpg'
import scanModel from '../assets/images/scanModel.jpg'

const infoBlocks = [
  {
    icon: scanner,
    alt: '3D laser scanner',
    title: '3D laser scanning',
    paragraphs: [`laserScanner1`, `laserScanner2`],
    image: null,
  }, {
    icon: pointcloud,
    alt: "pointcloud",
    title: "scan tot puntenwolk",
    paragraphs: [`pointcloud1`],
    image: scanCloud
  }, {
    icon: plan,
    alt: 'plan of a building',
    title: 'scan tot plan',
    paragraphs: [`plan1`],
    image: scanPlan
  }, {
    icon: drawing,
    alt: '3D model of a building',
    title: 'scan tot model',
    paragraphs: [`model1`],
    image: scanModel
  }
]

export default infoBlocks;
