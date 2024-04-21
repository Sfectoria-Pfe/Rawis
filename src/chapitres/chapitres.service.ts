import { Injectable } from '@nestjs/common';
import { CreateChapitreDto } from './dto/create-chapitre.dto';
import { UpdateChapitreDto } from './dto/update-chapitre.dto';

@Injectable()
export class ChapitresService {
  create(createChapitreDto: CreateChapitreDto) {
    return 'This action adds a new chapitre';
  }

  findAll() {
    return `This action returns all chapitres`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chapitre`;
  }

  update(id: number, updateChapitreDto: UpdateChapitreDto) {
    return `This action updates a #${id} chapitre`;
  }

  remove(id: number) {
    return `This action removes a #${id} chapitre`;
  }
}
