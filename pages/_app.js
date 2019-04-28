import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

/*

Next.js uses the App component to initialize pages. You can override it and control the page initialization. Which allows you to do amazing things like:

Persisting layout between page changes
Keeping state when navigating pages
Custom error handling using componentDidCatch
Inject additional data into pages (for example by processing GraphQL queries)

This example below does just that.

*/

export default class CryptoNext extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  renderHead() {
    return (
      <Head>
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta key="charSet" charSet="utf-8" />
        <meta name="description" content="This is an experimental application created to provide the status and statistics of your crypto currencies." />
        <meta name="keywords" content="home,index" />
        <meta key="author" name="author" content="John Doe" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link href="./../static/css/cryptofont.min.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
      </Head>
    );
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <style jsx global>{`
      body {
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
        padding: 0;
      }
    `}</style>
        {this.renderHead()}
        <CssBaseline />
        <Component {...pageProps} />
      </Container>
    );
  }
}