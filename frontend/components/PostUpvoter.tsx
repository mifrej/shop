import gql from 'graphql-tag';
import React from 'react';
import { ApolloConsumer } from 'react-apollo';

export default function PostUpvoter({ votes, id }) {
  return (
    <ApolloConsumer>
      {client => (
        <button onClick={() => upvotePost(votes, id, client)}>
          {votes}
          <style jsx>{`
            button {
              background-color: transparent;
              border: 1px solid #e4e4e4;
              color: #000;
            }
            button:active {
              background-color: transparent;
            }
            button:before {
              align-self: center;
              border-color: transparent transparent #000000 transparent;
              border-style: solid;
              border-width: 0 4px 6px 4px;
              content: '';
              height: 0;
              margin-right: 5px;
              width: 0;
            }
          `}</style>
        </button>
      )}
    </ApolloConsumer>
  );
}

function upvotePost(votes, id, client) {
  client.mutate({
    mutation: gql`
      mutation updatePost($id: ID!, $votes: Int) {
        updatePost(id: $id, votes: $votes) {
          id
          __typename
          votes
        }
      }
    `,
    optimisticResponse: {
      __typename: 'Mutation',
      updatePost: {
        id,
        __typename: 'Post',
        votes: votes + 1,
      },
    },
    variables: {
      id,
      votes: votes + 1,
    },
  });
}
