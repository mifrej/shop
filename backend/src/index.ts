import * as dotenv from 'dotenv';
dotenv.config();

import { GraphQLServer } from 'graphql-yoga';
// prisma is our db connector
import { prisma } from './generated/prisma-client';
import schema from './schema';

const server = new GraphQLServer({
  context: { prisma },
  schema,
});

// const port: string = process.env.APP_PORT || '4000';

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  ctx => {
    // tslint:disable-next-line:no-console
    console.log(`🚀 Server is running on port http://localhost:${ctx.port}`);
  },
);
