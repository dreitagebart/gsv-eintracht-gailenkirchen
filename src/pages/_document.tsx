import { Html, Head, Main, NextScript } from 'next/document'
import { FC } from 'react'

interface Props {}

const Document: FC<Props> = () => {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
