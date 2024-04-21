import { Module } from '@nestjs/common';
import { ChapitresService } from './chapitres.service';
import { ChapitresController } from './chapitres.controller';

@Module({
  controllers: [ChapitresController],
  providers: [ChapitresService],
})
export class ChapitresModule {}
