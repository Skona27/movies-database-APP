/** @jsx jsx */
import {jsx} from '@emotion/core'

import Document, {Main, NextScript} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps}
  }

  render() {
    return (
      <html>

      <body css={{
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
      }}>
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }
}

export default MyDocument