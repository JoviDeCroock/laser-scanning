// Weststation
import thumbWeststation from '../assets/images/thumbs/weststation.jpg'
import west1 from '../assets/images/fulls/weststation/1.jpg'
import west2 from '../assets/images/fulls/weststation/2.jpg'
import west3 from '../assets/images/fulls/weststation/3.jpg'
// Rozebeke
import thumbRozebeke from '../assets/images/thumbs/rozebeke.jpg'
import rozebeke1 from '../assets/images/fulls/rozebeke/1.jpg'
import rozebeke2 from '../assets/images/fulls/rozebeke/2.jpg'
import rozebeke3 from '../assets/images/fulls/rozebeke/3.jpg'
import rozebeke4 from '../assets/images/fulls/rozebeke/4.jpg'
// Hotel Palace
import thumbHotelPalace from '../assets/images/thumbs/hotelpalace.jpg'
import hotel3 from '../assets/images/fulls/hotelpalace/3.jpg'
import hotel4 from '../assets/images/fulls/hotelpalace/4.jpg'
import hotel5 from '../assets/images/fulls/hotelpalace/5.jpg'
// Urban Design
import thumbUrbanDesign from '../assets/images/thumbs/urbandesign.jpg'
import urban1 from '../assets/images/fulls/urbandesign/1.jpg'
import urban2 from '../assets/images/fulls/urbandesign/2.jpg'
import urban3 from '../assets/images/fulls/urbandesign/3.jpg'
import urban4 from '../assets/images/fulls/urbandesign/4.jpg'

export default [
  {
    id: 'Rozebeke',
    additionalImages: [
      { src: thumbRozebeke },
      { src: rozebeke1 },
      { src: rozebeke2 },
      { src: rozebeke3 },
      { src: rozebeke4 },
    ],
    thumbnail: thumbRozebeke,
    caption: 'Cohousing Rozebeke',
    description: '2016',
  },
  {
    id: 'UrbanDesign',
    additionalImages: [
      { src: thumbUrbanDesign },
      { src: urban1 },
      { src: urban2 },
      { src: urban3 },
      { src: urban4 },
    ],
    thumbnail: thumbUrbanDesign,
    caption: 'Urban design',
    description: '2017',
  },
  {
    id: 'Weststation',
    additionalImages: [
      { src: thumbWeststation },
      { src: west1 },
      { src: west2 },
      { src: west3 },
    ],
    thumbnail: thumbWeststation,
    caption: 'Weststation',
    description: '2018',
  },
  {
    id: 'HotelPalace',
    additionalImages: [
      { src: thumbHotelPalace },
      { src: hotel3 },
      { src: hotel4 },
      { src: hotel5 },
    ],
    thumbnail: thumbHotelPalace,
    caption: 'Hotel Palace',
    description: '2019',
  },
]
