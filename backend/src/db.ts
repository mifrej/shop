// This file connects to the remote prisma DB and gives us the ability to query it with JS

import { Prisma } from 'prisma-binding';

const db = new Prisma({
  debug: false,
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  typeDefs: 'generated/schema.graphql',
});

export default db;
