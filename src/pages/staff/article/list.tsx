import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://iniad-kitchen.com/api/staff/'
        : 'http://localhost:8000/api/staff/',
});

export default function StaffArticleList() {
    const [articles, setArticles] = useState<Array<any> | null>(null)

    useEffect(() => {
        async function fetchData() {
            const res = await instance.get('/articles/')
            setArticles(res.data)
        }

        fetchData()
    }, [])

    if (articles) {
        const items = [<p>tset</p>]
        let data: any
        for (data of articles) {
            items.push(
                <article>
                    <div>
                        <h3><Link href={`/editor/${data.uuid}/`}>{"> "}{data.title}</Link></h3>
                        <small>{data.event_day}</small>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
                </article>
            )
        }
        return items
    } else {
        return (<></>)
    }
}