import * as dotenv from 'dotenv';
import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import schema from './schema';

dotenv.config();

const server = new GraphQLServer({
  context: { prisma },
  schema,
});

const port: string = process.env.APP_PORT || '4000';

server.start({ port }, () =>
  // tslint:disable-next-line:no-console
  console.log(`🚀 Server ready at http://localhost:${port}`),
);
