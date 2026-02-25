import React from 'react'
import { styled } from '../lib/styled'
import useNoBodyScroll from './useNoBodyScroll'
import Icon from './Icon'

const Dialog = styled('dialog')`
  background: transparent;
  border: 0;
  max-width: 1080px;
  width: calc(100vw - 32px);
  padding: 0;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.82);
  }
`

const Content = styled('div')`
  position: relative;
  padding: 48px 40px 28px;
  border-radius: 8px;
  background-color: #111;
`

const CloseButton = styled('button')`
  position: absolute;
  top: 8px;
  right: 8px;
  color: white;
  font-size: 24px;
  background: transparent;
  border: 0;
  cursor: pointer;
`

const NavButton = styled('button')`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 32px;
  background: transparent;
  border: 0;
  cursor: pointer;

  @keyframes lightboxArrowBounceLeft {
    0% {
      transform: translateY(-50%) translateX(0);
    }
    45% {
      transform: translateY(-50%) translateX(-6px);
    }
    100% {
      transform: translateY(-50%) translateX(0);
    }
  }

  @keyframes lightboxArrowBounceRight {
    0% {
      transform: translateY(-50%) translateX(0);
    }
    45% {
      transform: translateY(-50%) translateX(6px);
    }
    100% {
      transform: translateY(-50%) translateX(0);
    }
  }
`

const PrevButton = styled(NavButton)`
  left: 0px;

  &:hover {
    animation: lightboxArrowBounceLeft 0.38s ease-in-out;
  }
`

const NextButton = styled(NavButton)`
  right: 0px;

  &:hover {
    animation: lightboxArrowBounceRight 0.38s ease-in-out;
  }
`

const Frame = styled('div')`
  position: relative;
  display: grid;
  overflow: hidden;
`

const SlideImage = styled('img')`
  grid-area: 1 / 1;
  display: block;
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  cursor: pointer;

  &.slide-enter-next {
    animation: lightboxImageInFromRight 0.24s ease-out;
  }

  &.slide-enter-prev {
    animation: lightboxImageInFromLeft 0.24s ease-out;
  }

  &.slide-leave-next {
    animation: lightboxImageOutToLeft 0.24s ease-in;
  }

  &.slide-leave-prev {
    animation: lightboxImageOutToRight 0.24s ease-in;
  }

  @keyframes lightboxImageInFromRight {
    from {
      transform: translateX(18%);
      opacity: 0.35;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes lightboxImageInFromLeft {
    from {
      transform: translateX(-18%);
      opacity: 0.35;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes lightboxImageOutToLeft {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-18%);
      opacity: 0.2;
    }
  }

  @keyframes lightboxImageOutToRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(18%);
      opacity: 0.2;
    }
  }
`

const Caption = styled('p')`
  color: white;
  margin: 12px 0 0;
`

const Thumbnails = styled('div')`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  margin-top: 12px;
`

const Thumbnail = styled('img')`
  width: 72px;
  height: 54px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid ${props => (props.active ? '#fff' : 'transparent')};
`

const Lightbox = ({
  isOpen,
  images,
  currentImage,
  onClose,
  onNext,
  onPrev,
  onSelect,
}) => {
  const dialogId = React.useId()
  const canOpen = isOpen && images.length > 0
  const [visibleImageIndex, setVisibleImageIndex] = React.useState(currentImage)
  const [leavingImageIndex, setLeavingImageIndex] = React.useState(null)
  const [direction, setDirection] = React.useState('next')
  const transitionMs = 240

  const visibleImage = images[visibleImageIndex]
  const leavingImage =
    leavingImageIndex === null ? null : images[leavingImageIndex]

  useNoBodyScroll(canOpen)

  React.useEffect(() => {
    const dialog = document.getElementById(dialogId)

    if (!dialog || typeof dialog.showModal !== 'function') {
      return
    }

    if (canOpen && !dialog.open) {
      dialog.showModal()
    }

    if (!canOpen && dialog.open) {
      dialog.close()
    }
  }, [canOpen, dialogId])

  React.useEffect(() => {
    if (!canOpen) {
      setLeavingImageIndex(null)
      setVisibleImageIndex(currentImage)
    }
  }, [canOpen, currentImage])

  React.useEffect(() => {
    if (!canOpen || currentImage === visibleImageIndex) {
      return
    }

    setDirection(currentImage > visibleImageIndex ? 'next' : 'prev')
    setLeavingImageIndex(visibleImageIndex)
    setVisibleImageIndex(currentImage)

    const timeoutId = window.setTimeout(() => {
      setLeavingImageIndex(null)
    }, transitionMs)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [canOpen, currentImage, visibleImageIndex])

  if (!images.length) {
    return null
  }

  return (
    <Dialog
      id={dialogId}
      onCancel={e => {
        e.preventDefault()
        onClose()
      }}
      onClick={e => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
      aria-label="Project slideshow"
    >
      <Content>
        <CloseButton type="button" className="icon" onClick={onClose}>
          <Icon name="times" />
        </CloseButton>
        {currentImage > 0 && (
          <PrevButton type="button" className="icon" onClick={onPrev}>
            <Icon name="arrow-left" />
          </PrevButton>
        )}
        {currentImage < images.length - 1 && (
          <NextButton type="button" className="icon" onClick={onNext}>
            <Icon name="arrow-right" />
          </NextButton>
        )}
        <Frame>
          {leavingImage && (
            <SlideImage
              key={`leaving-${leavingImageIndex}-${direction}`}
              src={leavingImage.src}
              alt={leavingImage.alt || 'slideshow image'}
              className={`slide-leave-${direction}`}
            />
          )}
          {visibleImage && (
            <SlideImage
              key={`visible-${visibleImageIndex}-${direction}-${Boolean(
                leavingImage
              )}`}
              src={visibleImage.src}
              alt={visibleImage.alt || 'slideshow image'}
              className={leavingImage ? `slide-enter-${direction}` : undefined}
              onClick={() => {
                if (currentImage < images.length - 1) {
                  onNext()
                }
              }}
            />
          )}
        </Frame>
        <Caption>{visibleImage?.alt || ''}</Caption>
        <Thumbnails>
          {images.map((image, index) => (
            <Thumbnail
              key={image.src}
              src={image.src}
              alt={image.alt || `image ${index + 1}`}
              active={index === currentImage}
              onClick={() => onSelect(index)}
            />
          ))}
        </Thumbnails>
      </Content>
    </Dialog>
  )
}

export default Lightbox
