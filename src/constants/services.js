import drawing from '../assets/images/icons/3ddrawing.png'
import scanner from '../assets/images/icons/3dscanner.png'
import plan from '../assets/images/icons/plan.png'
import pointcloud from '../assets/images/icons/pointcloud.png'

const services = [
  {
    icons: [{ src: scanner, alt: 'scanner' }, { src: pointcloud, alt: 'scanToCloud' }],
    copy: 'serviceMeasure',
  }, {
    icons: [{ src: scanner, alt: 'scanner' }, { src: pointcloud, alt: 'scanToCloud' }, { src: plan, alt: 'scanToPlan' }],
    copy: 'servicePlan',
  }, {
    icons: [{ src: scanner, alt: 'scanner' }, { src: pointcloud, alt: 'scanToCloud' }, { src: drawing, alt: 'scanToModel' }],
    copy: 'serviceModel',
  }, {
    icons: [{ src: pointcloud, alt: 'scanToCloud' }, { src: plan, alt: 'scanToPlan' }, { src: drawing, alt: 'scanToModel' }],
    copy: 'serviceFull',
  }
]

export default services;
