import Link from 'next/link';
import Head from 'next/head';

export default function About(){
    return (
    <>
        <Head>
            <title>Hakkında</title>
        </Head>

        <h3>About Page</h3>
        
        <Link href="/">
            Back to Home Page
        </Link>
        <style jsx>{`
            h3{
                font-size: 20px;
            }
        `}</style>
    </>
    )
}