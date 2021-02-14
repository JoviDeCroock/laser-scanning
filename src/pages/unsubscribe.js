import React from 'react'
import { useLang, useTitle, useMeta } from 'hooked-head'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { navigate } from "gatsby"

import '../localization/i18n'
import Layout from '../components/layout'
import { useQueryParam } from '../components/useQueryParam'

const Button = styled.button`
  cursor: pointer;
  width: auto;
  height: 80%;
  margin-top: 12px;
  border: 1px solid black;
  border-radius: 4px;
  background: transparent;
`

const UnsubscribeForm = () => {
  const initialEmailValue = useQueryParam('email', '')

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState(initialEmailValue);
  const [language, setLanguage] = React.useState('nl')

  const prevLanguage = React.useRef(language)

  const { t, i18n } = useTranslation()

  useLang(language);
  useTitle('EDS Systems');
  useMeta({ name: 'description', content: t('siteDescription') });
  useMeta({ name: 'robots', content: 'noindex' })

  React.useEffect(() => {
    if (prevLanguage.current !== language) {
      i18n.changeLanguage(prevLanguage.current = language)
    }
  }, [language, i18n])

  const unsubscribe = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setLoading(true);
    setError(null);

    fetch('/.netlify/functions/mail', {
      method: 'POST',
      body: JSON.stringify({
        email
      }),
    }).then(function (res) {
      setLoading(false);
      if (!res.ok) {
        setError(t('somethingWentWrong'));
      } else {
        navigate('/')
        return;
      }
    })
  }

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <div id="main">
        <form onSubmit={unsubscribe}>
          <label htmlFor="email">Email</label>
          <input id="email" value={email} onInput={e => setEmail(e.currentTarget.value)} type="email" />
          <Button type="Submit">{t('unsubscribe')}</Button>
          {loading && <p>Sending...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </Layout>
  )
}

export default UnsubscribeForm;
