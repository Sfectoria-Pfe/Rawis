import { Module } from '@nestjs/common';
import { InscriresService } from './inscrires.service';
import { InscriresController } from './inscrires.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [InscriresController],
  providers: [InscriresService,PrismaService],
})
export class InscriresModule {}
