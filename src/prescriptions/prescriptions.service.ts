import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prescription } from './entities/prescription.entity';
import { User } from '../users/entities/user.entity';
import { Appointment } from '../appointments/entities/appointment.entity';

@Injectable()
export class PrescriptionsService {
  constructor(
    @InjectRepository(Prescription)
    private prescriptionsRepository: Repository<Prescription>,
  ) {}

  async create(
    doctor: User,
    patient: User,
    appointment: Appointment,
    medication: string,
    dosage: string,
    instructions: string,
  ): Promise<Prescription> {
    const prescription = this.prescriptionsRepository.create({
      doctor,
      patient,
      appointment,
      medication,
      dosage,
      instructions,
      date: new Date(),
    });
    return this.prescriptionsRepository.save(prescription);
  }

  async findAll(): Promise<Prescription[]> {
    return this.prescriptionsRepository.find({
      relations: ['doctor', 'patient', 'appointment'],
    });
  }

  async findOne(id: number): Promise<Prescription> {
    return this.prescriptionsRepository.findOne({
      where: { id },
      relations: ['doctor', 'patient', 'appointment'],
    });
  }
}
