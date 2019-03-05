import { prisma } from '../src/generated/prisma-client';

async function main() {
  await prisma.createUser({
    email: 'alice@prisma.io',
    name: 'Alice',
  });
  await prisma.createUser({
    email: 'bob@prisma.io',
    name: 'Bob',
  });
}

main().catch(e => console.error(e));
