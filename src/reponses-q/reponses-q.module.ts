import { Module } from '@nestjs/common';
import { ReponsesQService } from './reponses-q.service';
import { ReponsesQController } from './reponses-q.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ReponsesQController],
  providers: [ReponsesQService,PrismaService],
})
export class ReponsesQModule {}
