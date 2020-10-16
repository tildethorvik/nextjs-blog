import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
        <Head>
            <title>First post</title>
        </Head>
      <h1>Hils på Vebjørn!</h1>
      <img src="/veb.jpg" alt="Vebis photo" className="vebis" max-width='17rem'/>
      Besøk Facebook-profilen min 
      <a
        href='https://www.facebook.com/vgorseth'
      > her</a>!
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}