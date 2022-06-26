import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Place } from './place.entity'

@EntityRepository(Place)
export class ShortLinksRepository extends Repository<Place> {
}
