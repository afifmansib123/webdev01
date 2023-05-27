import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { Stateprovider } from './Store'

export default function App({ Component, pageProps }) {
  return (
  <Stateprovider>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </Stateprovider>
  )
}
