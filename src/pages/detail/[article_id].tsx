import Head from 'next/head'
import Header from '@/components/header'
import { useRouter } from 'next/router'
import GetArticle from '@/components/article'


export default function Detail() {
    const router = useRouter();
    const { article_id } = router.query;
    return (
        <>
            <Head>
                <title>INIAD kITchen</title>
            </Head>
            <Header />
            <main>
                {article_id && GetArticle( article_id[0] )}
            </main>
        </>
    )
}