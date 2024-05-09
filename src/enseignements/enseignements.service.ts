import { Injectable } from '@nestjs/common';
import { CreateEnseignementDto } from './dto/create-enseignement.dto';
import { UpdateEnseignementDto } from './dto/update-enseignement.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnseignementsService {
  constructor(private prisma: PrismaService) {}

  create(createEnseignementDto: CreateEnseignementDto) {
    return this.prisma.enseignement.create({ data : createEnseignementDto});
  }

  findAll() {
    return this.prisma.enseignement.findMany();
  }

  findOne(id: string) {
    return this.prisma.enseignement.findUnique({where : {id}});
  }

  update(id: string, updateEnseignementDto: UpdateEnseignementDto) {
    return this.prisma.enseignement.update({
      where: { id },
      data: updateEnseignementDto,
    });;;
  }

  remove(id: string) {
    return this.prisma.enseignement.delete({where : {id}});
  }
}
