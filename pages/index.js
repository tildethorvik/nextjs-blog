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
        <p>Hei! Jeg heter Vebjørn og liker sjakk, Vømmøl og geografi.</p>
        
        <section className={utilStyles.apLogo}>
          <a href="https://trondelag.arbeiderpartiet.no/politikere/101909-vebjrn-gorseth">
            <img
                src="/images/ap-logo.png"
                className='ap-logo'
                alt={"ap-logo"}
            />
          </a>
          <a href="https://www.instagram.com/vgorseth/">
            <img src="/images/instagram.png" className='ap-logo'/>
          </a>
          <a href="https://www.facebook.com/vgorseth/">
            <img src="/images/fb.png" className='ap-logo'/>
          </a>
        </section>
      </section>
    </Layout>
  )
}