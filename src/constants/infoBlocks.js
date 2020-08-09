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
    paragraphs: [
      `3D laserscanning is een techniek waarbij op zeer korte tijd bestaande situaties uiterste precies en in
        drie dimensies opgemeten worden. De laserscanner verricht niet enkel gedetailleerde metingen, maar
        kan tevens panoramische beelden vastleggen. Hierdoor is deze techniek uiterst geschikt om de
        complexiteit van een project te beheren aan de hand van exacte en betrouwbare 3D-voorstellingen van
        de bestaande situatie (As-built). De opmeting vormt een geschikte basis voor nauwkeurige plannen en
        modellen.`,
      `3D laserscanning kan toegepast worden voor opmetingen van gebouwen, monumenten, industriële
      installaties, infrastructuur, en zoveel meer. Dit zowel voor de constructie voor een snelle en correcte
      opmeting van de huidige situatie met een lage foutmarge en realistische panoramische beelden;
      tijdens de constructie voor as-built-, leiding- en constructieplannen; en na de constructie voor as-built
      en controleplannen.`
    ],
    image: null,
  }, {
    icon: pointcloud,
    alt: "pointcloud",
    title: "scan tot puntenwolk",
    paragraphs: [
      `Elk punt dat opgemeten wordt door de 3D laserscanner, wordt gedefinieerd door een uiterst
      nauwkeurige x-, y-, z-positie. Al deze punten samen vormen een puntenwolk die de huidige
      situatie nauwgezet weergeven. Deze puntenwolk vormt de geschikte basis voor de verwerking
      tot gedetailleerde plannen en modellen.
      De toevoeging van panoramische beelden maakt het mogelijk voor de gebruiker om een beter
      inzicht te verkrijgen in de gescande situatie. Dit leidt tot een sterke vermindering van het aantal
      plaats bezoeken en is tevens een handig visueel hulpmiddel bij overleg.`
    ],
    image: scanCloud
  }, {
    icon: plan,
    alt: 'plan of a building',
    title: 'scan tot plan',
    paragraphs: [
      `De verworven puntenwolk dient als basis voor het uitwerken van inplantingsplannen,
      grondplannen, detailplannen, verticale doorsnedes en gevelzichten. De graad van uitwerking
      wordt op voorhand vastgelegd (i.e. detaillering van deuren, ramen, ornamenten,...).`
    ],
    image: scanPlan
  }, {
    icon: drawing,
    alt: '3D model of a building',
    title: 'scan tot model',
    paragraphs: [
      `De verworven puntenwolk dient als basis voor het uitwerken van driedimensionale modellen
      en visualisaties. De graad van uitwerking wordt op voorhand vastgelegd (i.e. detaillering van
      deuren, ramen, ornamenten,...).`
    ],
    image: scanModel
  }
]

export default infoBlocks;
