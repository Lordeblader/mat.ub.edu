import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { JetBrains_Mono, Roboto, Castoro } from 'next/font/google'

const sansFont = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-sans'
})

const displayFont = Castoro({
  weight: ['400'],
  subsets: ["latin", 'latin-ext'],
  variable: '--font-display'
})

const monoFont = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-mono'
});

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${sansFont.variable} ${displayFont.variable} ${monoFont.variable} font-sans font-light`}>
    <Component {...pageProps} />
  </main>
}
