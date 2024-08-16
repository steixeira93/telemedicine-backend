import { Injectable } from '@nestjs/common';

@Injectable()
export class VideoCallsService {
  async createRoom(appointmentId: number): Promise<string> {
    // Aqui você faria a integração com a API de videochamadas, como Twilio, agora, etc.
    const roomId = `room-${appointmentId}`;
    return roomId; // Retorne o ID da sala de videochamada
  }

  async getRoomDetails(roomId: string): Promise<any> {
    // Retorne os detalhes da sala
    return { roomId };
  }
}
