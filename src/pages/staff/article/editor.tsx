import Head from 'next/head'
import { ChangeEvent, useState } from 'react'

export default function StaffArticleList() {
    const [title, setTitle] = useState<string | null>(null)
    const [event_day, setEventDay] = useState<string | null>(null)
    const [leadSentence, setLeadSentence] = useState<string | null>(null)
    const [body, setBody] = useState<string | null>(null)
    const [OGPTitle, setOGPTitle] = useState<string | null>(null)
    const [OGPDescription, setOGPDescription] = useState<string | null>(null)
    const [cardType, setCardType] = useState<string | null>(null)
    const [OGPThumbnail, setOGPThumbnail] = useState<string | null>(null)

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const changeDate = (e: ChangeEvent<HTMLInputElement>) => {
        setEventDay(e.target.value)
    }

    const changeLeadSentence = (e: ChangeEvent<HTMLInputElement>) => {
        setLeadSentence(e.target.value)
    }

    const changeBody = (e: ChangeEvent<HTMLInputElement>) => {
        setBody(e.target.value)
    }

    const changeOGPTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setOGPTitle(e.target.value)
    }

    const changeOGPDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setOGPDescription(e.target.value)
    }

    const changeCardType = (e: ChangeEvent<HTMLInputElement>) => {
        setCardType(e.target.value)
    }

    const changeOGPThumbnail = (e: ChangeEvent<HTMLInputElement>) => {
        setOGPThumbnail(e.target.value)
    }

    const checkArticle = () => {
        
    }


    return (
        <>
            <section>
                <label htmlFor="title">記事タイトル</label><input type="text" name="title" onChange={changeTitle} />
                <p>{title}</p>
            </section>
            <section>
                <label htmlFor="date">日付</label><input type="date" placeholder="YYYY/MM/DD 記事に記載する日時" name="date" onChange={changeDate}/>
                <p>{event_day}</p>
            </section>
            <section>
                <label htmlFor="leadSentence">リード文</label><input type="text" placeholder="活動記録一覧にも載せる本文部分" name="leadSentence" onChange={changeLeadSentence} />
                <p>{leadSentence}</p>
            </section>
            <section>
                <label htmlFor="body">本文</label><input type="text" placeholder="各記事ページにのみ載せる本文部分" name="body" onChange={changeBody} />
                <p>{body}</p>
            </section>
            <section>
                <label htmlFor="OGPTitle">OGP タイトル</label><input type="text" placeholder="Twitter投稿用タイトル" name="OGPTitle" onChange={changeOGPTitle} />
                <p>{OGPTitle}</p>
            </section>
            <section>
                <label htmlFor="OGPDescription">OGP 説明文</label><input type="text" placeholder="Twitter投稿用説明文" name="OGPDescription" onChange={changeOGPDescription} />
                <p>{OGPDescription}</p>
            </section>
            <section>
                <label htmlFor="cardType">OGP カードタイプ</label><input type="text" placeholder="Twitter投稿向けサムネカードタイプ" name="cardType" onChange={changeCardType} />
                <p>{cardType}</p>
            </section>
            <section>
                <label htmlFor="OGPThumbnail">OGP サムネ画像</label><input type="text" placeholder="Twitter投稿向けサムネ画像" name="OGPThumbnail" onChange={changeOGPThumbnail} />
                <p>{OGPThumbnail}</p>
            </section>
            <button onClick={checkArticle}>保存</button>
        </>
    )
}
