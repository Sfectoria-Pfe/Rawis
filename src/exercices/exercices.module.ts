import { Module } from '@nestjs/common';
import { ExercicesService } from './exercices.service';
import { ExercicesController } from './exercices.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ExercicesController],
  providers: [ExercicesService,PrismaService],
})
export class ExercicesModule {}
