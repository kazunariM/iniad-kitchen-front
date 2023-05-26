import Head from 'next/head'
import Header from '@/components/header'
import { useRouter } from 'next/router'
import GetArticle from '@/components/article'
import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://iniad-kitchen.com/api/'
        : 'http://localhost:8000/api/',
})

type Props = {
    data: any,
}

export default function Detail(props: Props) {
    const router = useRouter()
    let article_id: string | null
    if (Array.isArray(router.query.article_id)) {
        article_id = router.query.article_id[0]
    } else {
        {article_id = router.query.article_id ? router.query.article_id : null}
    }

    return (
        <>
            <Head>
                {props.data.OGP_title && <meta property="og:title" content={props.data.OGP_title} key="og_title" />}
                {props.data.OGP_title && <title key="title">{props.data.OGP_title} | INIAD kITchen</title>}
                {props.data.OGP_description && <meta property="og:description" content={props.data.OGP_description} key="og_description" />}
                <meta property="og:url" content={"https://iniad-kitchen.com/detail/"+props.data.uuid} key="og_url" />
                {props.data.OGP_image && <meta property="og:image" content={props.data.OGP_image} key="og_image" />}
                {props.data.OGP_twitter && <meta name="twitter:card" content={props.data.OGP_twitter} key="og_twitter" />}
            </Head>
            <Header />
            <main>
                {article_id && GetArticle( article_id )}
            </main>
        </>
    )
}

export async function getServerSideProps({query}: {query: {article_id: string}}) {
    try {
        const res = await instance.get(`/article/head/${query.article_id}/`)
        const data = res.data
        return { props: { data } }
    } catch (error) {
        const data = {}
        return { props: { data } }
    }
}