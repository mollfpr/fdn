import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '@female-daily/shared/ui';
import './styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DataProvider } from '../contexts/DataContext';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>!Female Daily</title>
      </Head>
      <div className="app">
        <Header />
        <main>
          <DataProvider>
            <Component {...pageProps} />
          </DataProvider>
        </main>
      </div>
    </>
  );
}

export default CustomApp;
