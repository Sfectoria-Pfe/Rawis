import { Injectable } from '@nestjs/common';
import { CreateChapitreDto } from './dto/create-chapitre.dto';
import { UpdateChapitreDto } from './dto/update-chapitre.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChapitresService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateChapitreDto) {
    return this.prisma.chapitre.create({ data : dto });
  }

  findAll(id:string) {
    return this.prisma.chapitre.findMany({
      where : {
        coursId : id
      }
    });
  }
async  findAllChaptires() {
    return this.prisma.chapitre.findMany();
  }
  findOne(id: string) {
    return this.prisma.chapitre.findUnique({where :{id}});
  }

  update(id: string, updateChapitreDto: UpdateChapitreDto) {
    return this.prisma.chapitre.update({
      where: { id },
      data: updateChapitreDto,
    });;;
  }

  remove(id: string) {
    return this.prisma.chapitre.delete({where : {id}});
  }
}
