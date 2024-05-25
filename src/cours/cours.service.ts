import { Injectable } from '@nestjs/common';
import { CreateCourDto } from './dto/create-cour.dto';
import { UpdateCourDto } from './dto/update-cour.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CoursService {
  constructor(private prisma: PrismaService) {}

  create(createCourDto: CreateCourDto) {
    return this.prisma.cours.create({data : createCourDto});
  }

  async findAll() {
    return await this.prisma.cours.findMany({include:{Field:true}}); 
  }

  findOne(id: string) {
    return this.prisma.cours.findUnique({where : {id}});
  }

  update(id: string, updateCourDto: UpdateCourDto) {
    return this.prisma.cours.update({
      where: { id },
      data: updateCourDto,
    });
  }

  remove(id: string) {
    return this.prisma.cours.delete({where : { id }});
  }
}
