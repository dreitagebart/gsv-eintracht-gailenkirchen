import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import { FC } from 'react'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: 'light' }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default App
