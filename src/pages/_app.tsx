
import GlobalStyle from '../styles/global';
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }: any) {
  return (<>
    <GlobalStyle />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}