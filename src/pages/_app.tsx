import App from "next/app";
import Head from "next/head";
import "ress";
import { GlobalStore } from "~/store/global";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Next App</title>
        </Head>
        <GlobalStore.Provider>
          <Component {...pageProps} />
        </GlobalStore.Provider>
      </>
    );
  }
}
