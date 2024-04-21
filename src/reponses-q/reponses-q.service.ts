import { Injectable } from '@nestjs/common';
import { CreateReponsesQDto } from './dto/create-reponses-q.dto';
import { UpdateReponsesQDto } from './dto/update-reponses-q.dto';

@Injectable()
export class ReponsesQService {
  create(createReponsesQDto: CreateReponsesQDto) {
    return 'This action adds a new reponsesQ';
  }

  findAll() {
    return `This action returns all reponsesQ`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reponsesQ`;
  }

  update(id: number, updateReponsesQDto: UpdateReponsesQDto) {
    return `This action updates a #${id} reponsesQ`;
  }

  remove(id: number) {
    return `This action removes a #${id} reponsesQ`;
  }
}
