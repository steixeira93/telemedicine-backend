import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(userData: User): Promise<User> {
    const existingUser = await this.usersRepository.findOne({
      where: { username: userData.username },
    });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const salt = bcrypt.genSaltSync(10);
    userData.password = bcrypt.hashSync(userData.password, salt);
    return this.usersRepository.save(userData);
  }

  async findAllPatients(): Promise<User[]> {
    return this.usersRepository.find({ where: { role: 'patient' } });
  }

  async findAllDoctors(): Promise<User[]> {
    return this.usersRepository.find({ where: { role: 'doctor' } });
  }

  async findOneById(id: number): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
