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
    title: 'threeDScanning',
    paragraphs: [`laserScanner1`, `laserScanner2`],
    image: null,
    alt: 'scanner',
  }, {
    icon: pointcloud,
    title: "scanToCloud",
    paragraphs: [`pointcloud1`],
    image: scanCloud,
    alt: 'scanToCloud'
  }, {
    icon: plan,
    title: 'scanToPlan',
    paragraphs: [`plan1`],
    image: scanPlan,
    alt: 'scanToPlan'
  }, {
    icon: drawing,
    title: 'scanToModel',
    paragraphs: [`model1`],
    image: scanModel,
    alt: 'scanToModel'
  }
]

export default infoBlocks;
