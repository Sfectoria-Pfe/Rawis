import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt'; 
import { fieldsData } from './data';
// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles


const fieldsIds=[]

for (let index = 0; index < fieldsData.length; index++) {
  
  const fields = await prisma.field.create({
    data:fieldsData[index]
  })
  fieldsIds.push(fields.id)
}
  const cours1 = await prisma.cours.create({
    data: {
      title: "Spring boot",
      description: "Spring boot",
      semestre : 'Semestre2',
      fieldId: fieldsIds[0],
    },
  });

  
  const salt1 = await bcrypt.genSalt()
  const hashPassword1 = await bcrypt.hash ('admin1', salt1)
  const user1 = await prisma.user.create ({
    data : {
      nom     : 'Siwar',
      prenom  : 'Zalfeni',
      email   : 'Admin1@gmail.com',
      password : hashPassword1,
      phone    : '94031697',
      role     : 'Admin'
    },
  });
  // const chapitre1 = await prisma.chapitre.create({
  //   data: {
  //     title: "Introduction",
  //     description : "hernjfdioezfizeje",
  //     link : "http://localhost:4000/upload/4894baf71b99165b010969a72f3b0f582.pdf",
  //     coursId : "663786c5911056f668a8bf04"
  //   },
  // });
  const salt2 = await bcrypt.genSalt()
  const hashPassword2 = await bcrypt.hash ('123456', salt2)
  const user2 = await prisma.user.create ({
    data : {
      nom     : 'Siwar2',
      prenom  : 'Zalfeni2',
      email   : 'siwar2@gmail.com',
      password : hashPassword2,
      phone    : '94031697',
      role     : 'Etudiant'
    },
  });
  const salt3 = await bcrypt.genSalt()
  const hashPassword3 = await bcrypt.hash ('654321', salt3)
  const user3 = await prisma.user.create ({
    data : {
      nom     : 'Siwar3',
      prenom  : 'Zalfeni3',
      email   : 'siwar3@gmail.com',
      password : hashPassword3,
      phone    : '94031697',
      role     : 'Enseignant',
      Enseignement : {create : {coursId : cours1.id}}
    },
  });

  const cours2 = await prisma.cours.create({
    data: {
      title: "React js",
      description: "React js",
      semestre : 'Semestre1',
      fieldId: fieldsIds[1],

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