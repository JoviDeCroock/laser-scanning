import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import Modal from '../components/Modal'

const Image = styled.img`
  cursor: pointer;
  width: auto;
  height: 80%;
  border: 1px solid transparent;
  border-radius: 100%;

  &:hover {
    transition: all .33s ease-in-out;
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`

const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: auto;
`

const Button = styled.button`  
  background-color: white;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  height: auto;
  width: auto;
  margin-left: 16px;
`;

const ImageWrapper = styled.span`
  align-items:center;
  width: 50%;
  height: 75%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 20%;
    margin-left: unset;
    margin-right: unset;
  }
`;

const SubText = styled.p`
  cursor: pointer;
  margin-bottom: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:hover {
    text-decoration: underline;
  }
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
}) => {
  const { t } = useTranslation()
  return (
    <React.Fragment>
      <ImageWrapper>
        <Image title={t(title)} alt={t(alt)} src={src} onClick={open} />
        <SubText title={t(title)} onClick={open}>{t(title)}</SubText>
      </ImageWrapper>
      <Modal
        isOpen={isOpen}
        onRequestClose={close}
        title={t(title)}
        icon={{ src, alt: t(alt) }}
        footer={
          <ButtonGroup>
            {prev && (
              <ButtonWrapper>
                <Logo src={prevLogo} alt={t(prevLogoAlt)} onClick={prev} />
                <Button className="icon fa-arrow-left" onClick={prev} />
              </ButtonWrapper>
            )}
            {next && (
              <ButtonWrapper>
                <Button className="icon fa-arrow-right" onClick={next} />
                <Logo src={nextLogo} alt={t(nextLogoAlt)} onClick={next} />
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
}

export default IconWrapper