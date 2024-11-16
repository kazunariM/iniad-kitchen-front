import Link from "next/link"

const Footer = () => {
    return (
        <footer>
            <p>
                <Link href={'/'}>
                    <span>トップページに戻る</span>
                </Link>
            </p>
        </footer>
    )
}

export default Footer