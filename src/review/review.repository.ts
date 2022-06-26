import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Review } from './review.entity'

@EntityRepository(Review)
export class ShortLinksRepository extends Repository<Review> {
}
