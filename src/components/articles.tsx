import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.scss'

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://iniad-kitchen.com/api/'
      : 'http://localhost:8000/api/',
});

export default function GetArticles() {
    const [articles, setArticles] = useState<Array<any>|null>(null)

    useEffect(() => {
        async function fetchData() {
          const res = await instance.get('/articles/')
          setArticles(res.data)
        }

        fetchData()
    }, [])

    if (articles) {
        const items = []
        let data: any
        for (data of articles) {
            items.push(
                <article>
                    <div className={styles.article_header}>
                        <h3>{"> "}{data.title}</h3>
                        <small>{data.event_day}</small>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: data.text}}></div>
                </article>
            )    
        }
        return items
    } else {
        return (<></>)
    }
}