import { appWithTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 100,
      duration: 1500,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(MyApp);