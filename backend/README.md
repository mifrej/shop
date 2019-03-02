# Service Shop Backend TypeScript GraphQL Server

This example shows how to implement a **CRUD GraphQL API with TypeScript** based on Prisma, [graphql-yoga](https://github.com/prisma/graphql-yoga) and [GraphQL Nexus](https://graphql-nexus.com/).

## How to use

### 1. Install dependencies

```
yarn install
```

### 2. Install the Prisma CLI

To run the example, you need the Prisma CLI. Please install it via Yarn globally or [using another method](https://www.prisma.io/docs/prisma-cli-and-configuration/using-the-prisma-cli-alx4/#installation):

```
yarn global add prisma
```

### 3. Set up database & deploy Prisma datamodel

```
docker-compose up -d
prisma deploy
```

### 4. Start the GraphQL server

Launch your GraphQL dev server with this command:

```
yarn start
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).

### 5. Using the CRUD GraphQL API

The schema that specifies the API operations of your GraphQL server is defined in [`./src/schema.graphql`](./src/schema.graphql). Below are a number of operations that you can send to the API using the GraphQL Playground.

Feel free to adjust any operation by adding or removing fields. The GraphQL Playground helps you with its auto-completion and query validation features.

#### Retrieve all posts and their authors

```graphql
query {
  posts {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

<Details><Summary><strong>See more API operations</strong></Summary>

#### Create a new user

```graphql
mutation {
  createUser(data: {
    name: "Sarah"
    email: "sarah@prisma.io"
  }) {
    id
  }
}
```

#### Create a new post

```graphql
mutation {
  createPost(data: {
    title: "Join the Prisma Slack"
    content: "https://slack.prisma.io"
    author: {
      connect: { email: "alice@prisma.io" }
    }
  }) {
    id
    published
    author {
      id
      name
    }
  }
}
```

#### Update an existing draft

```graphql
mutation {
  updatePost(
    where: { id: "__POST_ID__" }
    data: { published: true }
  ) {
    id
    published
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `posts`-query.

#### Search for posts with a specific title or content

```graphql
{
  posts(where: {
    OR: [{
      title_contains: "graphql"
    }, {
      content_contains: "graphql"
    }]
  }) {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

#### Retrieve a single post

```graphql
{
  post(where: { id: "__POST_ID__"}) {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `posts`-query.

#### Delete a post

```graphql
mutation {
  deletePost(where: { id: "__POST_ID__"}) {
    id
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `posts`-query.

</Details>

### 6. Changing the GraphQL schema

To make changes to the GraphQL schema, you need to manipulate the `Query` and `Mutation` types that are defined in [`index.ts`](./src/index.ts).

Note that the [`start`](./package.json#L6) script also starts a development server that automatically updates your schema every time you save a file. This way, the auto-generated [GraphQL schema](./src/generated/schema.graphql) updates whenever you make changes in to the `Query` or `Mutation` types inside your TypeScript code.

## Next steps

- [Use Prisma with an existing database](https://www.prisma.io/docs/-t003/)
- [Explore the Prisma client API](https://www.prisma.io/client/client-typescript)
- [Learn more about the GraphQL schema](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e/)
