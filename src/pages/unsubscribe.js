import React from 'react'
import { useLang, useTitle, useMeta } from 'hooked-head'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import '../localization/i18n'
import Layout from '../components/layout'
import { useQueryParam } from '../components/useQueryParam'

const Button = styled.button`
  cursor: pointer;
  width: auto;
  height: 80%;
  border: 1px solid transparent;
  border-radius: 100%;
  filter: drop-shadow(2px 4px 6px #787878);
`

const UnsubscribeForm = () => {
  const initialEmailValue = useQueryParam('email', '')

  const [email, setEmail] = React.useState(initialEmailValue);
  const [language, setLanguage] = React.useState('nl')

  const prevLanguage = React.useRef(language)

  const { t, i18n } = useTranslation()

  useLang(language);
  useTitle('EDS Systems');
  useMeta({ name: 'description', content: t('siteDescription') });

  React.useEffect(() => {
    if (prevLanguage.current !== language) {
      i18n.changeLanguage(prevLanguage.current = language)
    }
  }, [language, i18n])

  const unsubscribe = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Fetch to a netlify function
  }

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <div id="main">
        <form onSubmit={unsubscribe}>
          <label htmlFor="email">Email</label>
          <input id="email" value={email} onInput={e => setEmail(e.currentTarget.value)} type="email" />
          <Button type="Submit">{t('unsubscribe')}</Button>
        </form>
      </div>
    </Layout>
  )
}

export default UnsubscribeForm;
