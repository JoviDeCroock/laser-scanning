import React from 'react'

import Layout from './layout'

const NotFoundPage = () => {
  const [language, setLanguage] = React.useState('nl')

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <div id="main">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
