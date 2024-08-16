import { Module } from '@nestjs/common';
import { VideoCallsService } from './video-calls.service';
import { VideoCallsController } from './video-calls.controller';

@Module({
  providers: [VideoCallsService],
  controllers: [VideoCallsController],
})
export class VideoCallsModule {}
