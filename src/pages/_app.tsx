import '@/styles/globals.scss'
import App, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import axios, { AxiosResponse } from 'axios'
import { parseCookies, setCookie } from 'nookies'

interface PageProps {
  is_active: boolean,
  can_publish: boolean
}

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
      ? 'https://iniad-kitchen.com/api/staff/'
      : 'http://localhost:8000/api/staff/',
})

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<{ pageProps: PageProps }> {
    let pageProps: PageProps = { is_active: false, can_publish: false }
    const cookies = parseCookies(ctx)
    setCookie(ctx, 'sessionid', cookies.sessionid)
    
    if (ctx.pathname.startsWith('/staff/')) {
      try {
          const response: AxiosResponse<{ is_active: false, can_publish: false }> = await instance.get('/check/', {
            headers: {
              cookie: `sessionid=${cookies.sessionid}`,
            },
            withCredentials: true
          })
          const authenticated = response.data.is_active  
          if (!authenticated && ctx.res) {
            ctx.res.writeHead(302, { Location: '/' })
            ctx.res.end()
          }
      } catch (error) {
        if (ctx.res) {
          ctx.res.writeHead(302, { Location: '/' })
          ctx.res.end()
        }
      }
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
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
}

export default MyApp