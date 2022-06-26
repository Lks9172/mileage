import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity'

@EntityRepository(User)
export class ShortLinksRepository extends Repository<User> {
}
