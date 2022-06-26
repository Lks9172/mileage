import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { PointLog } from './point_log.entity'

@EntityRepository(PointLog)
export class ShortLinksRepository extends Repository<PointLog> {
}
