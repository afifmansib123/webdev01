import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { Stateprovider } from './store'

export default function App({ Component, pageProps }) {
  return (
   <Stateprovider>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </Stateprovider>
  )
}
