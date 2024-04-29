import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles


  const cours1 = await prisma.cours.create({
    data: {
      title: "Spring boot",
      description: "Spring boot"
    },
  });
  const cours2 = await prisma.cours.create({
    data: {
      title: "Spring boot",
      description: "Spring boot"
    },
  });
}

  

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });