import React from "react";
import App, { Container, NextAppContext } from "next/app";
import { Theme } from "../hooks/Theme";
import { AppContextProvider } from "../components/AppContext";
import { WithAuth } from "../hoc/withAuth";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <AppContextProvider>
          <Theme>
            <WithAuth>
              <Component {...pageProps} />
            </WithAuth>
          </Theme>
        </AppContextProvider>
      </Container>
    );
  }
}

export default MyApp;
