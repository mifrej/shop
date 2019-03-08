import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import schema from './schema';

const server = new GraphQLServer({
  context: { prisma },
  schema,
});

// tslint:disable-next-line:no-console
server.start(() => console.log(`🚀 Server ready at http://localhost:4000`));
