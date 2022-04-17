import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Lightbox from 'react-images'
import styled from 'styled-components'

const query = graphql`
query projects {
  projects: allPrismicProject {
      nodes {
        createdAt: first_publication_date
        data {
          body {
            ... on PrismicProjectDataBodySlideshow {
              id
              items {
                image {
                  alt
                  url
                }
              }
            }
          }
          technologies {
            text
          }
          title {
            text
          }
          year {
            text
          }
          thumbnail {
            url
            alt
          }
        }
        lang
      }
  }
}
`

const Option = styled.p`
  cursor: pointer;
  margin-right: 8px;
  text-decoration: ${({ selected }) => (selected ? 'underline' : 'none')};
  &:hover {
    text-decoration: ${({ selected }) => (!selected ? 'underline' : 'none')};;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Gallery = ({ images, language }) => {
  const [selectedFilter, setSelectedFilter] = React.useState('')
  const [state, setState] = React.useState({ lightboxIsOpen: false, currentImage: 0 })

  const gotoNext = () => {
    setState({ ...state, currentImage: state.currentImage + 1 })
  }

  const changeFilter = (filter) => {
    if (selectedFilter === filter) {
      setSelectedFilter('')
    } else {
      setSelectedFilter(filter)
    }
  }

  return (
    <StaticQuery
      query={query}
      render={data => {
        const currentLanguage = language === 'nl' ? 'nl-be' : language === 'en' ? 'en-gb' : 'fr-be';
        const nodes = data.projects.nodes
          .filter(n => n.lang === currentLanguage)
          .sort((a, b) => {
            const bYear = Number(b.data.year.text);
            const aYear = Number(a.data.year.text)
            if (bYear !== aYear) {
              return bYear - aYear;
            }

            return +new Date(b.createdAt) - +new Date(a.createdAt)
          });

        const techOptions = nodes.reduce((acc, node) => node.data.technologies && node.data.technologies.text && !acc.includes(node.data.technologies.text) ? [...acc, node.data.technologies.text] : acc, [])

        return (
          <div>
            <Wrapper>
              {techOptions.map(tech => <Option onClick={() => changeFilter(tech)} selected={selectedFilter === tech} key={tech}>{tech}</Option>)}
            </Wrapper>
            <div className="row">
              {nodes ? (
                nodes.filter(node => selectedFilter ? node.data.technologies && node.data.technologies.text === selectedFilter : true).map(({ data: node }, i) => (
                  <React.Fragment key={i}>
                    <article className="6u 12u$(xsmall) work-item" key={i}>
                      <a
                        className="image fit thumb"
                        href={node.thumbnail.url}
                        onClick={e => {
                          e.preventDefault()
                          setState({ currentImage: 0, lightboxIsOpen: i })
                        }}
                      >
                        <img alt="thumbnail" src={node.thumbnail.url} />
                      </a>
                      <h3>{node.title.text} - {node.year.text}</h3>
                      <p>{node.technologies.text || ''}</p>
                    </article>
                    <Lightbox
                      currentImage={state.currentImage}
                      images={node.body[0].items.map(({ image }) => ({ src: image.url, alt: image.alt }))}
                      isOpen={state.lightboxIsOpen === i}
                      onClickImage={() => {
                        if (state.currentImage === images.length - 1) return
                        gotoNext()
                      }}
                      onClickNext={gotoNext}
                      onClickPrev={() => {
                        setState({ ...state, currentImage: state.currentImage - 1 })
                      }}
                      onClickThumbnail={i => {
                        setState({ ...state, currentImage: i })
                      }}
                      onClose={() => {
                        setState({ currentImage: 0, lightboxIsOpen: false })
                      }}
                      backdropClosesModal
                    />
                  </React.Fragment>
                ))
              ) : <React.Fragment />}
            </div>
          </div>
        )
      }}
    />
  )
}

export default Gallery;
