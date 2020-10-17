import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hei! Jeg heter Tilde Thorvik!</p>
        
        <section className={utilStyles.apLogo}>
          <a href="https://www.instagram.com/tildetullia/">
            <img src="/images/instagram.png" className='ap-logo'/>
          </a>
          <a href="https://www.facebook.com/tilde.thorvik/">
            <img src="/images/fb.png" className='ap-logo'/>
          </a>
        </section>
      </section>
    </Layout>
  )
}