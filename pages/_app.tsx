import Navbar from '@/components/Navbar'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <SessionProvider>
      <Navbar/>
    </SessionProvider>
    <Component {...pageProps} />
  </>
  )
}
