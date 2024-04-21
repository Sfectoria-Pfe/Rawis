import { Injectable } from '@nestjs/common';
import { CreatePropsQcmDto } from './dto/create-props-qcm.dto';
import { UpdatePropsQcmDto } from './dto/update-props-qcm.dto';

@Injectable()
export class PropsQcmService {
  create(createPropsQcmDto: CreatePropsQcmDto) {
    return 'This action adds a new propsQcm';
  }

  findAll() {
    return `This action returns all propsQcm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} propsQcm`;
  }

  update(id: number, updatePropsQcmDto: UpdatePropsQcmDto) {
    return `This action updates a #${id} propsQcm`;
  }

  remove(id: number) {
    return `This action removes a #${id} propsQcm`;
  }
}
