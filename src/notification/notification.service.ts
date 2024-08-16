import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SmsService } from '../sms/sms.service';

@Injectable()
export class NotificationsService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly smsService: SmsService,
  ) {}

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    await this.mailerService.sendMail({
      to,
      subject,
      text: body,
    });
  }

  async sendSms(to: string, message: string): Promise<void> {
    await this.smsService.sendSms(to, message); // Implementação do SMS dependerá do provedor que você escolher
  }
}
