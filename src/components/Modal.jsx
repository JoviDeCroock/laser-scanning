import React from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import useNoBodyScroll from './useNoBodyScroll'

if (typeof document !== 'undefined') {
  ReactModal.setAppElement('#app')
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`

const HeaderIcon = styled.img`
  height: 75px;
  width: 75px;
  margin-right: 16px;
`

const HeaderTitle = styled.h1`
  margin-bottom: 0px;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 64px;
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 32px;
  left: 50%;
  right: 50%;
`

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.58)',
    overflow: 'auto',
  },
}

const StyledModal = styled(ReactModal)`
  background-color: white;
  border: 1px solid transparent;
  border-radius: 10px;
  bottom: auto;
  left: auto;
  max-width: 960px;
  min-height: 500px;
  padding: 32px;
  position: relative;
  right: auto;
  top: auto;
  margin: 64px auto;
  @media (min-width: 768px) {
    min-height: 900px;
  }

  :focus {
    outline: none;
  }
`

const Button = styled.button`
  color: white;
  position: absolute;
  background-color: transparent;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  font-size: 24px;
  margin-left: 16px;
  top: -32px;
  right: 0px;
`

const Modal = ({ children, isOpen, onRequestClose, icon, title, footer }) => {
  useNoBodyScroll(isOpen)
  return (
    <StyledModal
      isOpen={isOpen}
      style={modalStyles}
      contentLabel="Modal"
      onRequestClose={onRequestClose}
    >
      <Button className="icon fa-times" onClick={onRequestClose} />
      <HeaderWrapper>
        <HeaderIcon src={icon?.src || ''} alt={icon?.alt || ''} />
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderWrapper>
      <Body>
        <div>{children}</div>
        {footer && <Footer>{footer}</Footer>}
      </Body>
    </StyledModal>
  )
}

export default Modal
