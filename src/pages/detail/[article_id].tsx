import Head from 'next/head'
import styles from '@/styles/article.module.scss'
import Header from '@/components/header'
import { useRouter } from 'next/router'


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
                <p>{article_id}</p>
            </main>
        </>
    )
}