import React from 'react'
import styled from 'styled-components'
import Modal from '../components/Modal'

const Image = styled.img`
  cursor: pointer;
  width: 20%;
  height: 20%;
`

const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const Button = styled.button`  
  background-color: white;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  height: 50px;
  width: 50px;
  margin-left: 16px;
`;

const IconWrapper = ({
  src, 
  alt,
  title,
  children,
  isOpen,
  close,
  open,
  next,
  prev,
}) => (
  <React.Fragment>
    <Image alt={alt} src={src} onClick={open} />
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      title={title}
      icon={{ src, alt }}
      footer={
        <ButtonWrapper>
          {prev && <Button className="icon fa-arrow-left" onClick={prev} />}
          {next && <Button className="icon fa-arrow-right" onClick={next} />}
        </ButtonWrapper>
      }
    >
      <React.Fragment>
        {children}
      </React.Fragment>
    </Modal>
  </React.Fragment>
)

export default IconWrapper