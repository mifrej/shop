import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import { WithApolloState } from '../typings/types';

let apolloClient: ApolloClient<any>;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState: WithApolloState<any> | {}) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    cache: new InMemoryCache().restore(initialState || {}),
    connectToDevTools: process.browser,
    link: new HttpLink({
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      uri: process.env.BACKEND_URL, // Server URL (must be absolute)
    }),
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
  });
}

export default function initApollo<TCache = any>(
  initialState: WithApolloState<TCache> | {},
) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
