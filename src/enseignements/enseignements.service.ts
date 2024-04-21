import { Injectable } from '@nestjs/common';
import { CreateEnseignementDto } from './dto/create-enseignement.dto';
import { UpdateEnseignementDto } from './dto/update-enseignement.dto';

@Injectable()
export class EnseignementsService {
  create(createEnseignementDto: CreateEnseignementDto) {
    return 'This action adds a new enseignement';
  }

  findAll() {
    return `This action returns all enseignements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enseignement`;
  }

  update(id: number, updateEnseignementDto: UpdateEnseignementDto) {
    return `This action updates a #${id} enseignement`;
  }

  remove(id: number) {
    return `This action removes a #${id} enseignement`;
  }
}
