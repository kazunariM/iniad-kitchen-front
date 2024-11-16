import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/header'
import GetArticles from '@/components/articles'

export default function Home() {
  return (
    <>
      <Head>
        <title key="title">INIAD kITchen</title>
      </Head>
      <Header />
      <main>
        <section>
          <p>複数の技術を使いそれらを組み合わせて創作活動を行う<br></br>INIAD公認サークルです。</p>
        </section>
        
        <section>
          <h2>紹介動画</h2>
          <div className={styles.youtube}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wXo2lUNqtYs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </section>
        <section>
          <h2>活動記録</h2>
          <div className={styles.article}>
            {GetArticles()}
          </div>
        </section>
        <section>
          <h2>サークルについて</h2>
          <table className={styles.section_body}>
            <tbody>
              <tr>
                <th>活動日</th>
                <td>不定期<br />赤羽台祭期間は活動多め</td>
              </tr>
              <tr>
                <th>活動場所</th>
                <td>
                  <ul>
                    <li>オンライン(Discord)</li>
                    <li>INIAD 教室</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Twitter</th>
                <td><a href="https://twitter.com/INIAD_kITchen" target={"_blank"}>@INIAD_kITchen</a></td>
              </tr>
              <tr>
                <th>連絡先</th>
                <td><a href="mailto:contact@iniad-kitchen.com">iniad.kitchen@gmail.com</a></td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>INIAD kITchenに参加する</h2>
          <div className={styles.section}>
            <p><a href="https://forms.gle/nbtAaZA5rcr6ThGa6" target={'_blank'}>こちら</a>のフォームから参加できます。</p>
            <p>フォームの回答にはINIADアカウントでのログインが必要です。</p>
          </div>
        </section>
      </main>
      <footer>
        <p><small>© 2021- INIAD kITchen</small></p>
      </footer>
    </>
  )
}
