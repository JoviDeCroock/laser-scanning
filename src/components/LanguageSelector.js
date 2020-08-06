import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 980px) {
    justify-content: center;
  }
`

// TODO: make into style-less button (or link?)!
const Option = styled.p`
  cursor: pointer;
  text-decoration: ${({ selected }) => (selected ? 'underline' : 'none')};
`

const LanguageSelector = ({ language, setLanguage }) => (
  <Wrapper>
    <Option selected={language === 'nl'} onClick={() => setLanguage('nl')}>
      NL
    </Option>
    &nbsp;|&nbsp;
    <Option selected={language === 'fr'} onClick={() => setLanguage('fr')}>
      FR
    </Option>
    &nbsp;|&nbsp;
    <Option selected={language === 'en'} onClick={() => setLanguage('en')}>
      EN
    </Option>
  </Wrapper>
)

export default LanguageSelector
