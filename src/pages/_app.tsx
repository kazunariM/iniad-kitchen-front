import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
        <link rel="icon" type="image/png" href="/kITchen.png" />
        <title key="title">INIAD kITchen</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="INIADサークル INIAD kITchen" key="og_title" />
        <meta property="og:description" content="INIAD公認サークル「INIAD kITchen」のホームページです。" key="og_description" />
        <meta property="og:url" content="https://iniad-kitchen.com" key="og_url" />
        <meta property="og:site_name" content="INIAD kITchen Official Site" />
        <meta property="og:image" content="https://iniad-kitchen.com/kITchen.png" key="og_image" />
        <meta name="twitter:card" content="summary" key="og_twitter" />
        <meta name="twitter:site" content="INIAD_kITchen" />
    </Head>
    <Component {...pageProps} />
  </>
}
