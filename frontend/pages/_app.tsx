import ApolloClient from 'apollo-boost';
import App, { Container } from 'next/app';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import Page from '../components/page/page';
import withApolloClient from '../lib/with-apollo-client';

interface P {
  apolloClient: ApolloClient<any>;
}

class MyApp extends App<P> {
  public render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
