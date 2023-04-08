// import '@/styles/globals.css'
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return <Component {...pageProps} />
}
