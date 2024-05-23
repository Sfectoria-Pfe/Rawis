import { Injectable } from '@nestjs/common';
import { CreateReponsesQDto } from './dto/create-reponses-q.dto';
import { UpdateReponsesQDto } from './dto/update-reponses-q.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReponsesQService {
  constructor(private prisma: PrismaService) {}
  create(dto: CreateReponsesQDto) {
    return this.prisma.reponseQ.create({data : dto});
  }

  findAll() {
    return this.prisma.reponseQ.findMany(); 
  }

  findOne(id: string) {
    return this.prisma.reponseQ.findUnique({where : {id}});
  }

  update(id: string, updateReponsesQDto: UpdateReponsesQDto) {
    return this.prisma.reponseQ.update({
      where: { id },
      data: updateReponsesQDto,
    });
  }

  remove(id: string) {
    return this.prisma.reponseQ.delete({where : { id }});
  }
}
