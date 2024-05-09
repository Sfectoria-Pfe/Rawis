import { Injectable } from '@nestjs/common';
import { CreateExerciceDto } from './dto/create-exercice.dto';
import { UpdateExerciceDto } from './dto/update-exercice.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExercicesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateExerciceDto) {
    return this.prisma.exercice.create({ data : dto });
  }

  findAll() {
    return this.prisma.exercice.findMany();
  }

  findOne(id: string) {
    return this.prisma.exercice.findUnique({where : {id}});
  }

  update(id: string, updateExerciceDto: UpdateExerciceDto) {
    return this.prisma.exercice.update({
      where: { id },
      data: updateExerciceDto,
    })
  }

  remove(id: string) {
    return this.prisma.exercice.delete({where :{id}});
  }
}
