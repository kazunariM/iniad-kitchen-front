import Link from "next/link"
import Image from 'next/image'

const Header = () => {
    return (
        <header>
            <nav>
                <h1>
                    <Link href={'/'}>
                        <div><Image src={'/kITchen.png'} alt={'INIAD kITchen icon'}  layout={"fill"} objectFit={"contain"}/></div>
                        <span>INIAD kITchen</span>
                    </Link>
                </h1>
            </nav>
        </header>
    )
}

export default Header