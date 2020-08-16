import React from 'react'
import Lightbox from 'react-images'

const Gallery = ({ images }) => {
  const ref = React.useRef()
  const [state, setState] = React.useState({ lightboxIsOpen: false, currentImage: 0 })

  React.useEffect(() => {
    if (state.lightboxIsOpen !== false) {
      const handleClickOutside = e => {
        if (e.target === ref.current || !ref.current.contains(e.target)) {
          closeLightbox()
        }
      }
  
      setTimeout(() => {
        ref.current = document.getElementById('lightboxBackdrop');
        ref.current.addEventListener('mousedown', handleClickOutside);
      });

  
      return () => {
        ref.current.removeEventListener('mousedown', handleClickOutside);
      }
    }
  }, [state.lightboxIsOpen])
  
  const openLightbox = (i, e) => {
    e.preventDefault()
    setState({ currentImage: 0, lightboxIsOpen: 0 })
  }

  const closeLightbox = () => {
    setState({ currentImage: 0, lightboxIsOpen: false })
  }

  const gotoPrevious = () => {
    setState({ ...state, currentImage: state.currentImage - 1 })
  }

  const gotoNext = () => {
    setState({ ...state, currentImage: state.currentImage + 1 })
  }

  const gotoImage = i => {
    setState({ ...state, currentImage: i })
  }

  const handleClickImage = () => {
    if (state.currentImage === images.length - 1) return
    gotoNext()
  }

  return (
    <div>
      <div className="row">
        {images ? (
          images.map((obj, i) => (
            <React.Fragment key={i}>
              <article className="6u 12u$(xsmall) work-item" key={i}>
                <a
                  className="image fit thumb"
                  href={obj.thumbnail}
                  onClick={e => { openLightbox(i, e) }}
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
                onClickImage={handleClickImage}
                onClickNext={gotoNext}
                onClickPrev={gotoPrevious}
                onClickThumbnail={gotoImage}
                onClose={closeLightbox}
              />
            </React.Fragment>
          ))
        ) : <React.Fragment />}
      </div>
    </div>
  )
}

export default Gallery
