import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt'; 
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

  const salt = await bcrypt.genSalt()
  const hashPassword = await bcrypt.hash ('admin1', salt)
  const user = await prisma.user.create ({
    data : {
      nom     : 'Siwar',
      prenom  : 'Zalfeni',
      email   : 'Admin1@gmail.com',
      password : hashPassword,
      phone    : '94031697',
      role     : 'Admin'
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