import Layout from "../components/Layout";
import "../styles/globals.scss";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALITYCS}`}
      />
      {/* eslint-disable-next-line @next/next/inline-script-id */}
      <Script strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALITYCS}');
    `}
      </Script>
      <Layout>
        <>
          <Head>
            <title>David Vargas Hernández</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta
              name="description"
              content="El blog de David Vargas Hernández"
            />
          </Head>
          <Component {...pageProps} />
        </>
      </Layout>
    </>
  );
}

export default MyApp;
