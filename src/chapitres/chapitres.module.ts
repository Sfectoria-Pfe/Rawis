import { Module } from '@nestjs/common';
import { ChapitresService } from './chapitres.service';
import { ChapitresController } from './chapitres.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ChapitresController],
  providers: [ChapitresService,PrismaService],
})
export class ChapitresModule {}
