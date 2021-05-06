import Link from "next/link";

export default function Header() {
    return <header className="header">
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Anasayfa</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>Hakkında</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </li>
            </ul>
        </nav>
        <style jsx>{`
            .header{
                height: 60px;
                background-color: #fff;
                border-bottom: 1px solid #ccc;
            }
            a{
                text-decoration: none;
                color: #333;
            }
            
        `}</style>
    </header>
}