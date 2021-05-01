import Link from 'next/link'

export default function Home(){
    return <div>
        <h3>Blog Page</h3>
        <Link href="/">
            Back to Home Page
        </Link>
    </div>
}