import { Controller, Post, Get, Param } from '@nestjs/common';
import { VideoCallsService } from './video-calls.service';

@Controller('video-calls')
export class VideoCallsController {
  constructor(private readonly videoCallsService: VideoCallsService) {}

  @Post('create/:appointmentId')
  async createRoom(
    @Param('appointmentId') appointmentId: number,
  ): Promise<string> {
    return this.videoCallsService.createRoom(appointmentId);
  }

  @Get('room/:roomId')
  async getRoomDetails(@Param('roomId') roomId: string): Promise<any> {
    return this.videoCallsService.getRoomDetails(roomId);
  }
}
