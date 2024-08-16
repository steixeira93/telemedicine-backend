import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { UsersService } from '../users/users.service';

describe('AppointmentsController', () => {
  let controller: AppointmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentsController],
      providers: [
        {
          provide: AppointmentsService,
          useValue: {
            /* mock methods if necessary */
          },
        },
        {
          provide: UsersService,
          useValue: {
            /* mock methods if necessary */
          },
        },
      ],
    }).compile();

    controller = module.get<AppointmentsController>(AppointmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
