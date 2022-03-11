import { Fragment } from 'react';
import { useRouter } from 'next/router';

import '../styles/globals.css';

import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Fragment>
      {router.pathname !== '/404' && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      {router.pathname === '/404' && <Component {...pageProps} />}
    </Fragment>
  );
}

export default MyApp;
