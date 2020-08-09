import drawing from '../assets/images/icons/3ddrawing.png'
import scanner from '../assets/images/icons/3dscanner.png'
import plan from '../assets/images/icons/plan.png'
import pointcloud from '../assets/images/icons/pointcloud.png'

const services = [
  {
    icons: [scanner, pointcloud],
    copy: 'serviceMeasure',
  }, {
    icons: [scanner, pointcloud, plan],
    copy: 'servicePlan',
  }, {
    icons: [scanner, pointcloud, drawing],
    copy: 'serviceModel',
  }, {
    icons: [pointcloud, plan, drawing],
    copy: 'serviceFull',
  }
]

export default services;
