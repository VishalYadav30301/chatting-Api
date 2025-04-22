import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private  usersRepository: UsersRepository) {}

  async findOne(email: string): Promise<any> {
    console.log('findOne', email);  
    return await this.usersRepository.findOne(email);
  }

  async createOne(user: any): Promise<any> {
    const createOne = await this.usersRepository.createOne(user);
    return createOne;
  }
}
