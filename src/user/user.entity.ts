import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Review } from '../review/review.entity';
import { PointLog } from '../point_log/point_log.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn('uuid', {name: 'user_id'})
  id!: string;

  @Column({ name: 'mileage', nullable: false, default: 0})
  mileage!: number;

  @OneToMany(() => Review, (review) => review.user)
  review!: Review[];

  @OneToMany(() => PointLog, (pointLog) => pointLog.user)
  pointLog!: PointLog[];
}
