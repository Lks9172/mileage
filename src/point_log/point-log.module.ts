import { Module } from '@nestjs/common';
import { PointLogService } from './point-log.service';

@Module({
  providers: [PointLogService]
})
export class PointLogModule {}
