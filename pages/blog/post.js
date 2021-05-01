import Link from 'next/link'

export default function Post(){
    return <div>
        <h3>Post Page</h3>
        <Link href="/">
            Back to Home Page
        </Link>
    </div>
}