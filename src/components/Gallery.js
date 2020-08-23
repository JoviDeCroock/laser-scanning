import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Lightbox from 'react-images'

const query = graphql`
query projects {
  projects: allPrismicProject {
    edges {
      node {
        data {
          body {
            ... on PrismicProjectBodyListOfArticles {
              id
              primary {
                picture {
                  url
                  alt
                }
              }
            }
          }
          title {
            raw
          }
          year {
            raw
          }
          thumbnail {
            url
            alt
          }
        }
      }
    }
  }
}
`

const Gallery = ({ images }) => {
  const [state, setState] = React.useState({ lightboxIsOpen: false, currentImage: 0 })

  const gotoNext = () => {
    setState({ ...state, currentImage: state.currentImage + 1 })
  }

  return (
    <StaticQuery
      query={query}
      render={data => console.log('data', data) || (
        <div>
          <div className="row">
            {images ? (
              images.map((obj, i) => (
                <React.Fragment key={i}>
                  <article className="6u 12u$(xsmall) work-item" key={i}>
                    <a
                      className="image fit thumb"
                      href={obj.thumbnail}
                      onClick={e => {
                        e.preventDefault()
                        setState({ currentImage: 0, lightboxIsOpen: i })
                      }}
                    >
                      <img alt="thumbnail" src={obj.thumbnail} />
                    </a>
                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                  </article>
                  <Lightbox
                    currentImage={state.currentImage}
                    images={obj.additionalImages}
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
      )}
    />
  )
}

export default Gallery;
