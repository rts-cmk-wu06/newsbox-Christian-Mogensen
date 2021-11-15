import Header from '../components/Header'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
  <>  
  <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
