import { PartialType } from '@nestjs/swagger';
import { CreateChapitreDto } from './create-chapitre.dto';

export class UpdateChapitreDto extends PartialType(CreateChapitreDto) {}
