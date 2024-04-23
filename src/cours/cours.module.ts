import { Module } from '@nestjs/common';
import { CoursService } from './cours.service';
import { CoursController } from './cours.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CoursController],
  providers: [CoursService, PrismaService],
})
export class CoursModule {}
