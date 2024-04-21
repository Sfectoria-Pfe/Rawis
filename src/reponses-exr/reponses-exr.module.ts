import { Module } from '@nestjs/common';
import { ReponsesExrService } from './reponses-exr.service';
import { ReponsesExrController } from './reponses-exr.controller';

@Module({
  controllers: [ReponsesExrController],
  providers: [ReponsesExrService],
})
export class ReponsesExrModule {}
