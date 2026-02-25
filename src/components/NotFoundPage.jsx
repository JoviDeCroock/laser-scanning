import React from 'react'

import Layout from './layout'

const NotFoundPage = () => {
  const [language, setLanguage] = React.useState('nl')

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <main id="main">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </main>
    </Layout>
  )
}

export default NotFoundPage
