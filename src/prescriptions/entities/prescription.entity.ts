import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Appointment } from '../../appointments/entities/appointment.entity';

@Entity()
export class Prescription {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.prescriptions)
  doctor: User;

  @ManyToOne(() => User, (user) => user.prescriptions)
  patient: User;

  @ManyToOne(() => Appointment)
  appointment: Appointment;

  @Column()
  medication: string;

  @Column()
  dosage: string;

  @Column()
  instructions: string;

  @Column({ type: 'date' })
  date: Date;
}
