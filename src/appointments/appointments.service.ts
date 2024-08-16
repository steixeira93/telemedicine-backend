import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentsRepository: Repository<Appointment>,
  ) {}

  async create(patient: User, doctor: User, date: Date): Promise<Appointment> {
    const appointment = this.appointmentsRepository.create({
      patient,
      doctor,
      date,
      status: 'scheduled',
    });

    return this.appointmentsRepository.save(appointment);
  }

  async findAll(): Promise<Appointment[]> {
    return this.appointmentsRepository.find({
      relations: ['patient', 'doctor'],
    });
  }

  async findOne(id: number): Promise<Appointment> {
    return this.appointmentsRepository.findOne({
      where: { id },
      relations: ['patient', 'doctor'],
    });
  }

  async update(id: number, status: string): Promise<void> {
    await this.appointmentsRepository.update(id, { status });
  }
}
