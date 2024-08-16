import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './entities/appointment.entity';
import { UsersService } from '../users/users.service';

@Controller('appointments')
export class AppointmentsController {
  constructor(
    private readonly appointmentsService: AppointmentsService,
    private readonly usersService: UsersService, // Injeção do UsersService
  ) {}

  @Post()
  async create(
    @Body()
    createAppointmentDto: {
      patientId: number;
      doctorId: number;
      date: Date;
    },
  ): Promise<Appointment> {
    const { patientId, doctorId, date } = createAppointmentDto;
    const patient = await this.usersService.findOneById(patientId);
    const doctor = await this.usersService.findOneById(doctorId);
    return this.appointmentsService.create(patient, doctor, new Date(date));
  }

  @Get()
  async findAll(): Promise<Appointment[]> {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Appointment> {
    return this.appointmentsService.findOne(id);
  }
}
