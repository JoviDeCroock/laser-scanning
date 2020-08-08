import React from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'

ReactModal.setAppElement(`#___gatsby`);

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

const HeaderIcon = styled.img`
  height: 75px;
  width: 75px;
  margin-right: 16px;
`;

const HeaderTitle = styled.h1`
  margin-bottom: 0px;
`;

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)",
  },
  content: {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    maxWidth: 960,
    margin: "32px auto",
    padding: 32,
    border: 0,
  },
};

const Modal = ({ children, isOpen, onRequestClose, icon, title }) => (
  <ReactModal isOpen={isOpen} style={modalStyles} contentLabel="Modal" onRequestClose={onRequestClose}>
    <HeaderWrapper>
      <HeaderIcon src={icon.src} alt={icon.alt} />
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderWrapper>
    <div>
      {children}
    </div>
  </ReactModal>
)

export default Modal;
