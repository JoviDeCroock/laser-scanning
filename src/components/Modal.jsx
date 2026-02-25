import React from 'react'
import { styled } from '../lib/styled'
import useNoBodyScroll from './useNoBodyScroll'
import Icon from './Icon'

const StyledDialog = styled('dialog')`
  background-color: white;
  border: 1px solid transparent;
  border-radius: 10px;
  max-width: 960px;
  min-height: 500px;
  padding: 32px;
  position: relative;
  margin: 64px auto;

  @media (min-width: 768px) {
    min-height: 900px;
  }

  :focus {
    outline: none;
  }

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.58);
  }
`

const HeaderWrapper = styled('div')`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`

const HeaderIcon = styled('img')`
  height: 75px;
  width: 75px;
  margin-right: 16px;
`

const HeaderTitle = styled('h1')`
  margin-bottom: 0;
`

const Body = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 64px;
`

const Footer = styled('div')`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 32px;
  left: 50%;
  right: 50%;
`

const Button = styled('button')`
  color: white;
  position: absolute;
  background-color: transparent;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  font-size: 24px;
  margin-left: 16px;
  top: -32px;
  right: 0;
`

const Modal = ({ children, isOpen, onRequestClose, icon, title, footer }) => {
  const dialogId = React.useId()

  useNoBodyScroll(isOpen)

  React.useEffect(() => {
    const dialog = document.getElementById(dialogId)

    if (!dialog || typeof dialog.showModal !== 'function') {
      return
    }

    if (isOpen && !dialog.open) {
      dialog.showModal()
    }

    if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [dialogId, isOpen])

  return (
    <StyledDialog
      id={dialogId}
      onCancel={e => {
        e.preventDefault()
        onRequestClose()
      }}
      onClick={e => {
        if (e.target === e.currentTarget) {
          onRequestClose()
        }
      }}
      aria-label={title}
    >
      <Button
        className="icon"
        type="button"
        aria-label="Close"
        onClick={onRequestClose}
      >
        <Icon name="times" />
      </Button>
      <HeaderWrapper>
        <HeaderIcon src={icon?.src || ''} alt={icon?.alt || ''} />
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderWrapper>
      <Body>
        <div>{children}</div>
        {footer && <Footer>{footer}</Footer>}
      </Body>
    </StyledDialog>
  )
}

export default Modal
