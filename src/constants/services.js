import drawing from '../assets/images/icons/3ddrawing.png'
import scanner from '../assets/images/icons/3dscanner.png'
import plan from '../assets/images/icons/plan.png'
import pointcloud from '../assets/images/icons/pointcloud.png'

const services = [
  {
    icons: [{ src: scanner, alt: 'laser-scanner' }, { src: pointcloud, alt: 'a pointcloud' }],
    copy: 'serviceMeasure',
  }, {
    icons: [{ src: scanner, alt: 'laser-scanner' }, { src: pointcloud, alt: 'a pointcloud' }, { src: plan, alt: 'a plan' }],
    copy: 'servicePlan',
  }, {
    icons: [{ src: scanner, alt: 'laser-scanner' }, { src: pointcloud, alt: 'a pointcloud' }, { src: drawing, alt: 'a 3D model' }],
    copy: 'serviceModel',
  }, {
    icons: [{ src: pointcloud, alt: 'a pointcloud' }, { src: plan, alt: 'a plan' }, { src: drawing, alt: 'a 3D model' }],
    copy: 'serviceFull',
  }
]

export default services;
