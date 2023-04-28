import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="icon" type="image/png" href="./kITchen.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="INIADサークル INIAD kITchen" />
        <meta property="og:description" content="INIAD公認サークル「INIAD kITchen」のホームページです。" />
        <meta property="og:url" content="https://iniad-kitchen.com" />
        <meta property="og:site_name" content="INIAD kITchen Official Site" />
        <meta property="og:image" content="https://iniad-kitchen.com/kITchen.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="INIAD_kITchen" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
