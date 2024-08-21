import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('patients')
  async findAllPatients(): Promise<User[]> {
    return this.usersService.findAllPatients();
  }

  @Get('doctors')
  async findAllDoctors(): Promise<User[]> {
    return this.usersService.findAllDoctors();
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post('register')
  async register(@Body() userData: User): Promise<User> {
    return this.usersService.create(userData);
  }
}
