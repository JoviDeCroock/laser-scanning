import React from 'react'
import styled from 'styled-components'
import Modal from '../components/Modal'

const Image = styled.img`
  cursor: pointer;
  width: 20%;
  height: 20%;
`

const IconWrapper = ({ src, alt, title, children}) => {
  const [isOpen, setIsopen] = React.useState(false);
  return (
    <React.Fragment>
      <Image alt={alt} src={src} onClick={() => setIsopen(true)} />
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsopen(false);
        }}
        title={title}
        icon={{ src, alt }}
      >
        {children}
      </Modal>
    </React.Fragment>
  )
}

export default IconWrapper