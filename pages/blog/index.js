import Link from 'next/link';
import Head from 'next/head';

export default function Home(){
    return (
    <>
        <Head>
            <title>Blog</title>
        </Head>
        <h3>Blog Page</h3>
        <Link href="/">
            Back to Home Page
        </Link>
    </>
    )
}