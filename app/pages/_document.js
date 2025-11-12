// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Link to favicon */}
          <link rel="icon" href="/favicon.ico" />
          {/* Optionally, for specific sizes or types */}
          {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
          {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
