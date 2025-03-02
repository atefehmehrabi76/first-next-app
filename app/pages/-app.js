import React from 'react'
import Layout from '../components/Layout'

function App({Component,pageProps}) {
  return (
    <div>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </div>
  )
}

export default App