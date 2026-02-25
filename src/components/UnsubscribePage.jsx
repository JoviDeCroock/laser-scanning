import { useState } from 'preact/hooks'
import { styled } from '../lib/styled'
import Layout from './layout'
import { useQueryParam } from './useQueryParam'
import { translate } from '../localization/translations'

const Button = styled('button')`
  cursor: pointer;
  width: auto;
  height: 80%;
  margin-top: 12px;
  border: 1px solid black;
  border-radius: 4px;
  background: transparent;
`

const UnsubscribePage = () => {
  const initialEmailValue = useQueryParam('email', '')

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(initialEmailValue)
  const [language, setLanguage] = useState('nl')
  const t = key => translate(language, key)

  const unsubscribe = e => {
    e.preventDefault()
    e.stopPropagation()

    setLoading(true)
    setError(null)

    fetch('/.netlify/functions/mail', {
      method: 'POST',
      body: JSON.stringify({
        email,
      }),
    }).then(res => {
      setLoading(false)
      if (!res.ok) {
        setError(t('somethingWentWrong'))
      } else {
        window.location.assign('/')
      }
    })
  }

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <main id="main">
        <form onSubmit={unsubscribe}>
          <label htmlFor="email">{`Email* (${t('mandatory')})`}</label>
          <input
            id="email"
            value={email}
            onInput={e => setEmail(e.currentTarget.value)}
            type="email"
          />
          <Button disabled={!email} type="Submit">
            {t('unsubscribe')}
          </Button>
          {loading && <p>{t('sending')}...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </main>
    </Layout>
  )
}

export default UnsubscribePage
