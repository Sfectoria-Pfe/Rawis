import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Chapitre } from 'src/chapitres/entities/chapitre.entity';

@Injectable()
export class QuizsService {
  constructor(private prisma: PrismaService) { }
  async create(createQuizDto: CreateQuizDto[]) {
    return await Promise.all(createQuizDto.map(async elem => await this.prisma.quiz.create({
      data: {
        question: elem.question,
        chapitreId: elem.chapitreId,
        PropQcm: {
          create: elem.propQcm.map((e) => {
            return {
              proposition: e.proposition,
              status: e.status
            }
          }
          )
        }

      }
    })))
  }


  async findAll(idChapitre: string) {
    return await this.prisma.quiz.findMany({where:{chapitreId:idChapitre}, include: { PropQcm: true } });
  }

  // findOne(id: string) {
  //   return this.prisma.quiz.findUnique({ where: { id } });
  // }

  // update(id: string, updateQuizDto: UpdateQuizDto) {
  //   return this.prisma.cours.update({
  //     where: { id },
  //     data: updateQuizDto,
  //   });
  // }

  remove(id: string) {
    return this.prisma.quiz.delete({ where: { id } });
  }
}
