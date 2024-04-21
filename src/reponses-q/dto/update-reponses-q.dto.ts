import { PartialType } from '@nestjs/swagger';
import { CreateReponsesQDto } from './create-reponses-q.dto';

export class UpdateReponsesQDto extends PartialType(CreateReponsesQDto) {}
