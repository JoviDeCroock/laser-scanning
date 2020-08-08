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
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
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
          {prev && (
            <ButtonWrapper>
              <Logo src={prevLogo} alt={prevLogoAlt} />
              <Button className="icon fa-arrow-left" onClick={prev} />
            </ButtonWrapper>
          )}
          {next && (
            <ButtonWrapper>
              <Button className="icon fa-arrow-right" onClick={next} />
              <Logo src={nextLogo} alt={nextLogoAlt} />
            </ButtonWrapper>
          )}
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