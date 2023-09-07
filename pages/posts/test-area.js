import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
export default function FirstPost({allPostsData}) {
  return (
    <Layout>
      <Head>
        <title>JavaScript Test Area</title>
      </Head>
      <h1>Test Area</h1>
      <p>Below are tested javascript functions result:</p>
    </Layout>
  )
}