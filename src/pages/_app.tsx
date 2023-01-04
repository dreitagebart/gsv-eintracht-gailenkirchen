import { DefaultMantineColor, MantineProvider, Tuple } from '@mantine/core'
import { AppProps } from 'next/app'
import { Anybody, Montserrat } from '@next/font/google'
import { FC } from 'react'

type ExtendedColors = 'brand' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedColors, Tuple<string, 10>>
  }
}

const headingFont = Anybody({ weight: '400' })
const normalFont = Montserrat({ weight: '400' })

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: (theme) => ({
          a: {
            transition: 'all 300ms ease-out',
            color: theme.colors.gray[8],
            textDecoration: 'none'
          }
        }),
        defaultGradient: {
          deg: 240,
          from: '#20d89c',
          to: '#087856'
        },
        primaryColor: 'brand',
        colorScheme: 'light',
        headings: {
          ...headingFont.style,
          sizes: {
            h1: { fontSize: 60 },
            h2: { fontSize: 48 },
            h3: { fontSize: 38 },
            h4: { fontSize: 30 },
            h5: { fontSize: 24 },
            h6: { fontSize: 20 }
          }
        },
        fontFamily: normalFont.style.fontFamily,
        fontSizes: {
          xs: 10,
          sm: 12,
          md: 18,
          lg: 22,
          xl: 24
        },
        colors: {
          brand: [
            '#defff6',
            '#b4fbe6',
            '#87f7d5',
            '#5af4c5',
            '#33f0b5',
            '#20d89c',
            '#14a878',
            '#087856',
            '#004833',
            '#001a0f'
          ]
        }
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default App
