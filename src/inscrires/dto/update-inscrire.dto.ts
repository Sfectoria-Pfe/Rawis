import { PartialType } from '@nestjs/swagger';
import { CreateInscrireDto } from './create-inscrire.dto';

export class UpdateInscrireDto extends PartialType(CreateInscrireDto) {}
