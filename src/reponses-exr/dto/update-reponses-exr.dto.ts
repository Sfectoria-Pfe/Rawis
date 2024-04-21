import { PartialType } from '@nestjs/swagger';
import { CreateReponsesExrDto } from './create-reponses-exr.dto';

export class UpdateReponsesExrDto extends PartialType(CreateReponsesExrDto) {}
