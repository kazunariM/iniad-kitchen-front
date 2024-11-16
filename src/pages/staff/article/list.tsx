import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link';
import { parseCookies } from 'nookies'

const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://iniad-kitchen.com/api/staff/'
        : 'http://localhost:8000/api/staff/',
});

type Props = {
    data: any,
}

export default function StaffArticleList(props: Props) {
    // const [articles, setArticles] = useState<Array<any> | null>(null)

    // useEffect(() => {
    //     const cookies = parseCookies()
    //     async function fetchData() {
    //         const res = await instance.get('/articles/')
    //         setArticles(res.data)
    //     }

    //     fetchData()
    // }, [])

    if (props.data) {
        const items = []
        let data: any
        for (data of props.data) {
            items.push(
                <article>
                    <div>
                        <h3><Link href={`editor/${data.uuid}/`}>{"> "}{data.title}</Link></h3>
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

export async function getServerSideProps() {
    const cookies = parseCookies()
    try {
        const res = await instance.get(`/articles/`, {
            headers: {
              cookie: `sessionid=${cookies.sessionid}`,
            },
          }
        )
        const data = res.data
        return { props: { data } }
    } catch (error) {
        const data = {}
        return { props: { data } }
    }
}