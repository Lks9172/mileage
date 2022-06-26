import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Photo } from './photo.entity'

@EntityRepository(Photo)
export class ShortLinksRepository extends Repository<Photo> {
}
