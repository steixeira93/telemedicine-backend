import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';
import { Prescription } from './entities/prescription.entity';

@Controller('prescriptions')
export class PrescriptionsController {
  usersService: any;
  constructor(private readonly prescriptionsService: PrescriptionsService) {}

  @Post()
  async create(
    @Body()
    createPrescriptionDto: {
      doctorId: number;
      patientId: number;
      appointmentId: number;
      medication: string;
      dosage: string;
      instructions: string;
    },
  ): Promise<Prescription> {
    const {
      doctorId,
      patientId,
      appointmentId,
      medication,
      dosage,
      instructions,
    } = createPrescriptionDto;
    const doctor = await this.usersService.findOne(doctorId);
    const patient = await this.usersService.findOne(patientId);
    const appointment = await this.usersService.findOne(appointmentId);
    return this.prescriptionsService.create(
      doctor,
      patient,
      appointment,
      medication,
      dosage,
      instructions,
    );
  }

  @Get()
  async findAll(): Promise<Prescription[]> {
    return this.prescriptionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Prescription> {
    return this.prescriptionsService.findOne(id);
  }
}
