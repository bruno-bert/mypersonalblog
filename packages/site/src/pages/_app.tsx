import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps  } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import theme from 'styles/theme'
import GlobalStyle from 'styles/global.styles'

library.add(fab, fas)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>
      <NextSeo
        title="CodePills.Tech - Another Blog about Software Development."
        description="A Blog about Software Development!"
        canonical="https://codepills.tech/"
        openGraph={{
          url: 'https://codepills.tech/',
          title:
            'CodePills.Tech - Another Blog about Software Development',
          description:
            'A Blog about Software Development',
          images: [{ url: 'https://codepills.tech/img/cover.png' }],
          site_name: 'CodePills',
          locale: 'en_US'
        }}
        twitter={{
          handle: '@Bruno_Bertoni',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
