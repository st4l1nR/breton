import type { NextPage } from 'next';
import Head from 'next/head';
import { AppProps } from 'next/app';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import '../styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>Breton</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <ToastContainer />
        {getLayout(<Component {...pageProps} />)}
      </div>
    </>
  );
}

export default MyApp;
