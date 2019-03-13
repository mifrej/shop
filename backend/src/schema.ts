import { makePrismaSchema, prismaObjectType } from 'nexus-prisma';
import * as path from 'path';
import datamodelInfo from './generated/nexus-prisma';
import { prisma } from './generated/prisma-client';
import { resolvers } from './resolvers';

// const Mutation = prismaObjectType({
//   name: 'Mutation',
//   definition(t) {
//     t.prismaFields(['createItem', 'deleteItem', 'createUser', 'deleteUser']);
//   },
// });

const schema = makePrismaSchema({
  // Provide all the GraphQL types we've implemented
  types: resolvers,

  // Configure the interface to Prisma
  prisma: {
    client: prisma,
    datamodelInfo,
  },

  // Specify where Nexus should put the generated files
  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },

  // Configure nullability of input arguments: All arguments are non-nullable by default
  nonNullDefaults: {
    input: false,
    output: false,
  },

  // Configure automatic type resolution for the TS representations of the associated types
  typegenAutoConfig: {
    contextType: 'types.Context',
    sources: [
      {
        alias: 'types',
        source: path.join(__dirname, './types.ts'),
      },
    ],
  },
});

export default schema;
