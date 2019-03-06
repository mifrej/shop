import { prisma } from '../src/generated/prisma-client';

async function main() {
  await prisma.createUser({
    name: 'Alice',
  });
  await prisma.createUser({
    name: 'Bob',
  });
}

main().catch(e => console.error(e));
