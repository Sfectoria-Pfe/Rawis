import { Module } from '@nestjs/common';
import { PropsQcmService } from './props-qcm.service';
import { PropsQcmController } from './props-qcm.controller';

@Module({
  controllers: [PropsQcmController],
  providers: [PropsQcmService],
})
export class PropsQcmModule {}
