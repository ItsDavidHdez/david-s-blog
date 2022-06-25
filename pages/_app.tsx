import Layout from "../components/Layout";
import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default MyApp;
