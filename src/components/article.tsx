import axios from 'axios'
import { useEffect, useState } from 'react'

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://iniad-kitchen.com/api/'
        : 'http://localhost:8000/api/',
});

type Props = { article_id: string }

export default function GetArticle(props:Props){
    const [article, setArticle] = useState<any | null>(null)

    useEffect(() => {
        async function fetchData() {
            const res = await instance.get(`/article/${props.article_id}/`)
            setArticle(res.data)
        }

        fetchData()
    }, [])
}