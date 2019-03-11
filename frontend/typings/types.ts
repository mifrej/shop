import ApolloClient from 'apollo-boost';
import { IncomingHttpHeaders } from 'http';
import { NextContext } from 'next';
import { NextAppContext } from 'next/app';
import { DefaultQuery } from 'next/router';

declare global {
  namespace NodeJS {
    interface Global {
      fetch: {
        (input: RequestInfo, init?: RequestInit | undefined): Promise<Response>;
        (input: RequestInfo, init?: RequestInit | undefined): Promise<Response>;
      };
    }
    interface Process {
      browser?: boolean;
    }
  }
}

export interface WithApolloOptions {
  getDataFromTree?: 'always' | 'never' | 'ssr';
}

export interface WithApolloState<TCache> {
  data?: TCache;
}

export interface WithApolloProps<TCache> {
  apolloState: WithApolloState<TCache>;
}

export interface InitApolloOptions<TCache> {
  ctx?: NextContext<DefaultQuery>;
  headers?: IncomingHttpHeaders;
  initialState?: TCache;
}

export type InitApolloClient<TCache> = (
  options: InitApolloOptions<TCache>,
) => ApolloClient<TCache>;

export interface AppContext<Q extends DefaultQuery = DefaultQuery>
  extends NextContext<Q> {
  // Custom prop added by withApollo
  apolloClient: ApolloClient<any>;
}

export interface ApolloContext<Q extends DefaultQuery = DefaultQuery>
  extends NextAppContext<Q> {
  ctx: AppContext<Q>;
}
export interface Theme {
  background: string;
  black: string;
  color: string;
  lightGrey: string;
  maxWidth: string;
}
