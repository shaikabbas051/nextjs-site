import Head from "next/head";
import Script from "next/script";

export default function About() {
  return (
    <>
      <Script strategy="lazyOnload" src="/static/hello.js"></Script>
      <Head>
        <meta name="description" content="This is profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About Screen</h1>
    </>
  );
}
