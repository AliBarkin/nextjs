import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function Home(){
    return <Layout>
        <Head>
            <title>Blog</title>
        </Head>
        <h3>Blog Page</h3>
        <Link href="/">
            Back to Home Page
        </Link>
    </Layout>
}