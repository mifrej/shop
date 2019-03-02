import App, { Container } from 'next/app';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import withApolloClient from '../lib/with-apollo-client';

class MyApp extends App {
  public render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
