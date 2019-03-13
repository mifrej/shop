import { intArg, mutationType, stringArg } from 'nexus';

export const Mutation = mutationType({
  definition(t) {
    t.field('createItem', {
      args: {
        description: stringArg(),
        image: stringArg({ nullable: true }),
        largeImage: stringArg({ nullable: true }),
        price: intArg(),
        title: stringArg(),
      },
      resolve: (
        parent,
        args,
        ctx,
        // tslint:disable-next-line:ter-arrow-body-style
      ) => {
        // const userId = getUserID(ctx)
        return ctx.prisma.createItem({
          ...args,
        });
      },
      type: 'Item',
    });
  },
});
