import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findUser(userId: string): Promise<User> {
    const user = this.findOne(userId);

    if (!user) {
      throw new NotFoundException(`Can't find Product with id ${userId}`);
    }

    return user;
  }
}
