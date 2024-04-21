import { PartialType } from '@nestjs/swagger';
import { CreatePropsQcmDto } from './create-props-qcm.dto';

export class UpdatePropsQcmDto extends PartialType(CreatePropsQcmDto) {}
