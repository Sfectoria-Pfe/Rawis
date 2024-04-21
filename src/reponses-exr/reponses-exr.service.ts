import { Injectable } from '@nestjs/common';
import { CreateReponsesExrDto } from './dto/create-reponses-exr.dto';
import { UpdateReponsesExrDto } from './dto/update-reponses-exr.dto';

@Injectable()
export class ReponsesExrService {
  create(createReponsesExrDto: CreateReponsesExrDto) {
    return 'This action adds a new reponsesExr';
  }

  findAll() {
    return `This action returns all reponsesExr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reponsesExr`;
  }

  update(id: number, updateReponsesExrDto: UpdateReponsesExrDto) {
    return `This action updates a #${id} reponsesExr`;
  }

  remove(id: number) {
    return `This action removes a #${id} reponsesExr`;
  }
}
