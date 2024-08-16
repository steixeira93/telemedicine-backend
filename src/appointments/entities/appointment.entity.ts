import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.appointments)
  patient: User;

  @ManyToOne(() => User, (user) => user.appointments)
  doctor: User;

  @Column()
  date: Date;

  @Column()
  status: string;
}
