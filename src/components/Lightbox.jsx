import React from 'react'
import { styled } from '../lib/styled'
import useNoBodyScroll from './useNoBodyScroll'

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

const Image = styled('img')`
  display: block;
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  cursor: pointer;
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
`

const PrevButton = styled(NavButton)`
  left: 0px;
`

const NextButton = styled(NavButton)`
  right: 0px;
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
  const current = images[currentImage]
  const canOpen = isOpen && images.length > 0

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
        <CloseButton
          type="button"
          className="icon fa-times"
          onClick={onClose}
        />
        {currentImage > 0 && (
          <PrevButton
            type="button"
            className="icon fa-arrow-left"
            onClick={onPrev}
          />
        )}
        {currentImage < images.length - 1 && (
          <NextButton
            type="button"
            className="icon fa-arrow-right"
            onClick={onNext}
          />
        )}
        <Image
          src={current.src}
          alt={current.alt || 'slideshow image'}
          onClick={() => {
            if (currentImage < images.length - 1) {
              onNext()
            }
          }}
        />
        <Caption>{current.alt || ''}</Caption>
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
