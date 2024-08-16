import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsService {
  sendSms(phoneNumber: string, message: string): boolean {
    console.log(`Sending SMS to ${phoneNumber}: ${message}`);
    return true;
  }
}
