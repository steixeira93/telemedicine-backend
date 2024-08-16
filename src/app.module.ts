import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { PrescriptionsModule } from './prescriptions/prescriptions.module';
import { VideoCallsModule } from './video-calls/video-calls.module';
import { NotificationsService } from './notification/notification.service';
import { SmsService } from './sms/sms.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'telemedicine_db.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'telemedicine.backend@gmail.com',
          pass: 'telemedicinebackend',
        },
      },
      defaults: {
        from: 'telemedicine.backend@gmail.com',
      },
    }),
    AuthModule,
    UsersModule,
    AppointmentsModule,
    PrescriptionsModule,
    VideoCallsModule,
  ],
  controllers: [AppController],
  providers: [AppService, NotificationsService, SmsService],
})
export class AppModule {}
