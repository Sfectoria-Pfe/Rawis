import { Module } from '@nestjs/common';
import { PropsQcmService } from './props-qcm.service';
import { PropsQcmController } from './props-qcm.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PropsQcmController],
  providers: [PropsQcmService, PrismaService],
})
export class PropsQcmModule {}
