import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from './notification.service';
import { SmsService } from '../sms/sms.service'; // Supondo que você tenha esse serviço
import { MailerService } from '@nestjs-modules/mailer';

describe('NotificationsService', () => {
  let service: NotificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationsService,
        {
          provide: MailerService,
          useValue: { sendMail: jest.fn() }, // Mock the MailerService
        },
        {
          provide: SmsService,
          useValue: { sendSms: jest.fn() }, // Mock the SmsService
        },
      ],
    }).compile();

    service = module.get<NotificationsService>(NotificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
