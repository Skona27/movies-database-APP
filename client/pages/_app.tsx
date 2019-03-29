import React from "react";
import App, {Container, NextAppContext} from "next/app";
import {Theme} from "../hooks/Theme";

class MyApp extends App {
  static async getInitialProps({Component, ctx}: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;

    return (
      <Container>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </Container>
    );
  }
}

export default MyApp;
