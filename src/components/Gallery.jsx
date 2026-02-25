import React from 'react'
import Lightbox from 'react-images'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Option = styled.p`
  cursor: pointer;
  margin-bottom: 0;
  margin-left: 4px;
  margin-right: 4px;
  text-decoration: ${({ selected }) => (selected ? 'underline' : 'none')};
  &:hover {
    text-decoration: ${({ selected }) => (!selected ? 'underline' : 'none')};
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Gallery = ({ projects, language }) => {
  const { t } = useTranslation()

  const [selectedFilter, setSelectedFilter] = React.useState('all')
  const [state, setState] = React.useState({
    lightboxIsOpen: false,
    currentImage: 0,
  })

  const gotoNext = () => {
    setState({ ...state, currentImage: state.currentImage + 1 })
  }

  const changeFilter = filter => {
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

        return (
          <React.Fragment>
            <Wrapper>
              <Option
                onClick={() => changeFilter('all')}
                selected={selectedFilter === 'all'}
              >
                {t('all')}
              </Option>
              {techOptions.map(tech => (
                <React.Fragment key={tech}>
                  &nbsp;-&nbsp;
                  <Option
                    onClick={() => changeFilter(tech)}
                    selected={selectedFilter === tech}
                  >
                    {tech}
                  </Option>
                </React.Fragment>
              ))}
            </Wrapper>
            <div className="row">
              {nodes
                .filter(node =>
                  selectedFilter === 'all'
                    ? true
                    : node.technologies === selectedFilter
                )
                .map((node, i) => {
                  const slideshowImages = node.slideshow.map(image => ({
                    src: image.url,
                    alt: image.alt,
                  }))

                  return (
                    <React.Fragment key={node.id}>
                      <article className="6u 12u$(xsmall) work-item">
                        <a
                          className="image fit thumb"
                          href={node.thumbnail.url}
                          onClick={e => {
                            e.preventDefault()
                            setState({ currentImage: 0, lightboxIsOpen: i })
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
                      <Lightbox
                        currentImage={state.currentImage}
                        images={slideshowImages}
                        isOpen={state.lightboxIsOpen === i}
                        onClickImage={() => {
                          if (state.currentImage === slideshowImages.length - 1)
                            return
                          gotoNext()
                        }}
                        onClickNext={gotoNext}
                        onClickPrev={() => {
                          setState({
                            ...state,
                            currentImage: state.currentImage - 1,
                          })
                        }}
                        onClickThumbnail={lightboxImageIndex => {
                          setState({
                            ...state,
                            currentImage: lightboxImageIndex,
                          })
                        }}
                        onClose={() => {
                          setState({ currentImage: 0, lightboxIsOpen: false })
                        }}
                        backdropClosesModal
                      />
                    </React.Fragment>
                  )
                })}
            </div>
          </React.Fragment>
        )
      })()}
    </div>
  )
}

export default Gallery
