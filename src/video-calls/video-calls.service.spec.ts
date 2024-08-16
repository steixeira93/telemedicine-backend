import { Test, TestingModule } from '@nestjs/testing';
import { VideoCallsController } from './video-calls.controller';
import { VideoCallsService } from './video-calls.service';

describe('VideoCallsController', () => {
  let controller: VideoCallsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoCallsController],
      providers: [
        {
          provide: VideoCallsService,
          useValue: { createGoogleMeetLink: jest.fn() }, // Mock the service
        },
      ],
    }).compile();

    controller = module.get<VideoCallsController>(VideoCallsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
