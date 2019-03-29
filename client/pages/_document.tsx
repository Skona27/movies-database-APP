/** @jsx jsx */
import { jsx } from "@emotion/core";

import Document, { Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <style>
          @import
          url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700&subset=latin-ext');
        </style>
        <body
          css={{
            padding: "0",
            margin: "0",
            boxSizing: "border-box",
            fontFamily: "Raleway, sans-serif"
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
