import { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import '../styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  // Providers - Context/Providers, Theme, data
  // Layout
  // props adicionales
  return (
    <Layout>    
        <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp