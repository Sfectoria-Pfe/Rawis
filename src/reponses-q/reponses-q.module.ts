import { Module } from '@nestjs/common';
import { ReponsesQService } from './reponses-q.service';
import { ReponsesQController } from './reponses-q.controller';

@Module({
  controllers: [ReponsesQController],
  providers: [ReponsesQService],
})
export class ReponsesQModule {}
