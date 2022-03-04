import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div className='base-page'>
      <Head>
      <title>Movie DB</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />  
      <style jsx>{`
        .base-page {
          padding-top: 80px;
        }
      `}</style>
    </div>

    )
}

export default MyApp
