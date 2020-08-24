import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Lightbox from 'react-images'

const query = graphql`
query projects {
  projects: allPrismicProject {
      nodes {
        data {
          body {
            ... on PrismicProjectBodySlideshow {
              id
              items {
                image {
                  alt
                  url
                }
              }
            }
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

const Gallery = ({ images, language }) => {
  const [state, setState] = React.useState({ lightboxIsOpen: false, currentImage: 0 })

  const gotoNext = () => {
    setState({ ...state, currentImage: state.currentImage + 1 })
  }

  return (
    <StaticQuery
      query={query}
      render={data => {
        const currentLanguage = language === 'nl' ? 'nl-be' : 'fr-be';
        const nodes = data.projects.nodes.filter(n => n.lang === currentLanguage);
        return (
          <div>
            <div className="row">
              {nodes ? (
                nodes.map(({ data: node }, i) => console.log(node) || (
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
                      <h3>{node.title.text}</h3>
                      <p>{node.year.text}</p>
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
