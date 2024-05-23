import { Injectable } from '@nestjs/common';
import { CreatePropsQcmDto } from './dto/create-props-qcm.dto';
import { UpdatePropsQcmDto } from './dto/update-props-qcm.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PropsQcmService {
  constructor(private prisma: PrismaService) {}
  create(createPropsQcmDto: CreatePropsQcmDto) {
    return this.prisma.propQcm.create({data : createPropsQcmDto});
  }

  findAll() {
    return this.prisma.propQcm.findMany(); 
  }

  findOne(id: string) {
    return this.prisma.propQcm.findUnique({where : {id}});
  }

  update(id: string, updatePropsQcmDto: UpdatePropsQcmDto) {
    return this.prisma.cours.update({
      where: { id },
      data: updatePropsQcmDto,
    });
  }

  remove(id: string) {
    return this.prisma.propQcm.delete({where : { id }});
  }
}
