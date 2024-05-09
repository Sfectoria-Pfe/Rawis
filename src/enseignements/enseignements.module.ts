import { Module } from '@nestjs/common';
import { EnseignementsService } from './enseignements.service';
import { EnseignementsController } from './enseignements.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EnseignementsController],
  providers: [EnseignementsService,PrismaService],
})
export class EnseignementsModule {}
