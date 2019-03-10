import ApolloClient from 'apollo-boost';
import App, { Container } from 'next/app';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'theming';
import Page from '../components/page/page';
import theme from '../components/theme/theme';
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
          <ThemeProvider theme={theme}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
