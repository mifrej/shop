import gql from 'graphql-tag';
import { ApolloConsumer } from 'react-apollo';
import { allPostsQuery, allPostsQueryVars } from './PostList';

export default function Submit() {
  return (
    <ApolloConsumer>
      {client => (
        <form onSubmit={event => handleSubmit(event, client)}>
          <h1>Submit</h1>
          <input placeholder="title" name="title" type="text" required />
          <input placeholder="url" name="url" type="url" required />
          <button type="submit">Submit</button>
          <style jsx>{`
            form {
              border-bottom: 1px solid #ececec;
              padding-bottom: 20px;
              margin-bottom: 20px;
            }
            h1 {
              font-size: 20px;
            }
            input {
              display: block;
              margin-bottom: 10px;
            }
          `}</style>
        </form>
      )}
    </ApolloConsumer>
  );
}

function handleSubmit(event, client) {
  event.preventDefault();
  const form = event.target;
  const formData = new window.FormData(form);
  const title = formData.get('title');
  const url = formData.get('url');
  form.reset();

  client.mutate({
    mutation: gql`
      mutation createPost($title: String!, $url: String!) {
        createPost(title: $title, url: $url) {
          id
          title
          votes
          url
          createdAt
        }
      }
    `,
    update: (proxy, { data: { createPost } }) => {
      const data = proxy.readQuery({
        query: allPostsQuery,
        variables: allPostsQueryVars,
      });
      proxy.writeQuery({
        data: {
          ...data,
          allPosts: [createPost, ...data.allPosts],
        },
        query: allPostsQuery,
        variables: allPostsQueryVars,
      });
    },
    variables: { title, url },
  });
}
