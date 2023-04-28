import Head from 'next/head'
import Header from '@/components/header'
import { useRouter } from 'next/router'
import GetArticle from '@/components/article'
import axios from 'axios'


export default function Detail() {
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
                <title>INIAD kITchen</title>
            </Head>
            <Header />
            <main>
                {article_id && GetArticle( article_id )}
            </main>
        </>
    )
}
