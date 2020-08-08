import React from 'react'
import styled from 'styled-components'
import Modal from '../components/Modal'

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
`

const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 250px;
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

const ImageWrapper = styled.span`
  align-items:center;
  width: 20%;
  height: 20%;
  display: flex;
  flex-direction: column;
`;

const SubText = styled.p`
  cursor: pointer;
  margin-bottom: 0;
`;

const ButtonWrapper = styled.span`
  display: flex;
  width: 50%;
`;

const Logo = styled.img`
  cursor: pointer;
  height: 50px;
  width: 50px;
`;

const Invisible = styled.span`
  height: 50px;
  width: 50%;
  visibility: hidden;
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
  prevLogo,
  prevLogoAlt,
  nextLogo,
  nextLogoAlt,
}) => (
  <React.Fragment>
    <ImageWrapper>
      <Image alt={alt} src={src} onClick={open} />
      <SubText onClick={open}>{title}</SubText>
    </ImageWrapper>
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      title={title}
      icon={{ src, alt }}
      footer={
        <ButtonGroup>
          {prev ? (
            <ButtonWrapper>
              <Logo src={prevLogo} alt={prevLogoAlt} onClick={prev} />
              <Button className="icon fa-arrow-left" onClick={prev} />
            </ButtonWrapper>
          ) : <Invisible aria-hidden="true" />}
          {next ? (
            <ButtonWrapper>
              <Button className="icon fa-arrow-right" onClick={next} />
              <Logo src={nextLogo} alt={nextLogoAlt} onClick={next} />
            </ButtonWrapper>
          ) : <Invisible aria-hidden="true" />}
        </ButtonGroup>
      }
    >
      <React.Fragment>
        {children}
      </React.Fragment>
    </Modal>
  </React.Fragment>
)

export default IconWrapper