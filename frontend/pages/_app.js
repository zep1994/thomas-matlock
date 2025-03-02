import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
      <Head>
        <title>Thomas Matlock's Site</title>
        <meta name="description" content="Thomas Matlocks Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Google Analytics */}
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=G-LL7G53VEYL`}
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LL7G53VEYL');
        `,
      }}
    />
    <Layout>

        <Component {...pageProps} />

    </Layout>
  </>
  )
}

export default MyApp