import { Injectable } from '@nestjs/common';
import { CreateInscrireDto } from './dto/create-inscrire.dto';
import { UpdateInscrireDto } from './dto/update-inscrire.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InscriresService {
  constructor(private prisma: PrismaService) {}

  create(createInscrireDto: CreateInscrireDto) {
    return this.prisma.inscrire.create({ data: createInscrireDto});
  }

  findAll() {
    return this.prisma.inscrire.findMany();
  }

  findOne(id: string) {
    return this.prisma.inscrire.findUnique({where : {id}});
  }

  update(id: string, updateInscrireDto: UpdateInscrireDto) {
    return this.prisma.inscrire.update({
      where: { id },
      data: updateInscrireDto,
    });;
  }

  remove(id: string) {
    return this.prisma.inscrire.delete({where : { id }});
  }
}
