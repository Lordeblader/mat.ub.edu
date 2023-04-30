import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/ico_ub_escut-150x150.png" sizes="32x32" />
        <link rel="icon" href="/ico_ub_escut-300x300.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/ico_ub_escut-300x300.png" />
        <meta name="msapplication-TileImage" content="/ico_ub_escut-300x300.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
