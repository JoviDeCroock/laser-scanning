import { Fragment } from 'preact'
import { useState } from 'preact/hooks'
import { useTranslation } from '../localization/TranslationContext'
import Lightbox from './Lightbox'

const Gallery = ({ projects, language }) => {
  const { t } = useTranslation()

  const [selectedFilter, setSelectedFilter] = useState('all')
  const [openedNodeIndex, setOpenedNodeIndex] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)

  const changeFilter = filter => {
    setOpenedNodeIndex(null)
    setCurrentImage(0)

    if (selectedFilter === filter) {
      setSelectedFilter('all')
    } else {
      setSelectedFilter(filter)
    }
  }

  return (
    <div>
      {(() => {
        const currentLanguage =
          language === 'nl' ? 'nl-be' : language === 'en' ? 'en-gb' : 'fr-be'
        const nodes = projects
          .filter(node => node.lang === currentLanguage)
          .sort((a, b) => {
            const bYear = Number(b.year)
            const aYear = Number(a.year)
            if (bYear !== aYear) {
              return bYear - aYear
            }

            return +new Date(b.createdAt) - +new Date(a.createdAt)
          })

        const techOptions = nodes.reduce(
          (acc, node) =>
            node.technologies && !acc.includes(node.technologies)
              ? [...acc, node.technologies]
              : acc,
          []
        )

        const filteredNodes = nodes.filter(node =>
          selectedFilter === 'all' ? true : node.technologies === selectedFilter
        )

        const openedNode =
          openedNodeIndex === null ? null : filteredNodes[openedNodeIndex]

        const slideshowImages = openedNode
          ? openedNode.slideshow.map(image => ({
              src: image.url,
              alt: image.alt,
            }))
          : []

        return (
          <Fragment>
            <div className="project-gallery-filter">
              <button
                type="button"
                className={`project-gallery-filter__option ${
                  selectedFilter === 'all' ? 'is-selected' : ''
                }`}
                onClick={() => changeFilter('all')}
              >
                {t('all')}
              </button>
              {techOptions.map(tech => (
                <Fragment key={tech}>
                  <span
                    aria-hidden="true"
                    className="project-gallery-filter__separator"
                  >
                    -
                  </span>
                  <button
                    type="button"
                    className={`project-gallery-filter__option ${
                      selectedFilter === tech ? 'is-selected' : ''
                    }`}
                    onClick={() => changeFilter(tech)}
                  >
                    {tech}
                  </button>
                </Fragment>
              ))}
            </div>
            <div className="row">
              {filteredNodes.map((node, i) => (
                <article key={node.id} className="6u 12u$(xsmall) work-item">
                  <a
                    className="image fit thumb"
                    href={node.thumbnail.url}
                    onClick={e => {
                      e.preventDefault()
                      setCurrentImage(0)
                      setOpenedNodeIndex(i)
                    }}
                  >
                    <img
                      alt={node.thumbnail.alt || 'thumbnail'}
                      src={node.thumbnail.url}
                    />
                  </a>
                  <h3>
                    {node.title} - {node.year}
                  </h3>
                  <p>{node.technologies || ''}</p>
                </article>
              ))}
            </div>
            <Lightbox
              currentImage={currentImage}
              images={slideshowImages}
              isOpen={openedNodeIndex !== null}
              onClose={() => {
                setCurrentImage(0)
                setOpenedNodeIndex(null)
              }}
              onNext={() => {
                if (currentImage < slideshowImages.length - 1) {
                  setCurrentImage(currentImage + 1)
                }
              }}
              onPrev={() => {
                if (currentImage > 0) {
                  setCurrentImage(currentImage - 1)
                }
              }}
              onSelect={setCurrentImage}
            />
          </Fragment>
        )
      })()}
    </div>
  )
}

export default Gallery
