import axios from 'axios'
import styles from '@/styles/article.module.scss'
import { useEffect, useState } from 'react'

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://iniad-kitchen.com/api/'
        : 'http://localhost:8000/api/',
});

type Props = { article_id: string }

export default function GetArticle(article_id: string){
    const [article, setArticle] = useState<any | null>(null)

    useEffect(() => {
        /*async function fetchData() {
            const res = await instance.get(`/article/${article_id}/`)
            setArticle(res.data)
        }

        fetchData()*/
        setArticle({title:"test_title",event_day:"2023/4/28",text:"<p>sssssssssssssssssssssssssssssssssssss</p>"})
    }, [])

    if (article){
        return(
            <article>
                <div>
                    <h3>{article.title}</h3>
                    <p>{article.event_day}</p>
                    <div dangerouslySetInnerHTML={{__html:article.text}}></div>
                </div>
            </article>
        )
    }
}