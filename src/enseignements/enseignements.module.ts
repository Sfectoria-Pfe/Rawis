import { Module } from '@nestjs/common';
import { EnseignementsService } from './enseignements.service';
import { EnseignementsController } from './enseignements.controller';

@Module({
  controllers: [EnseignementsController],
  providers: [EnseignementsService],
})
export class EnseignementsModule {}
