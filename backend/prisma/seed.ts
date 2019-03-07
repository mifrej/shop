import { prisma } from '../src/generated/prisma-client';

async function main() {
  await prisma.createUser({
    email: 'hi@great.com',
    name: 'Alice',
    password: 'testtest',
  });
  await prisma.createUser({
    email: 'hi@cool.com',
    name: 'Bob',
    password: 'testtest',
  });
}

main().catch(e => console.error(e));
