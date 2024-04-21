import { Module } from '@nestjs/common';
import { CoursService } from './cours.service';
import { CoursController } from './cours.controller';

@Module({
  controllers: [CoursController],
  providers: [CoursService],
})
export class CoursModule {}
