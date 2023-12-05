import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Link href="/">Home</Link>
    <Link href="/login">Log In</Link>
    <Link href="/signup">Sign Up</Link><br></br>
    <Component {...pageProps} />
  </>
  )
}
