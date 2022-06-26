import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Review } from '../review/review.entity';
import { ActionType } from './point_log.enum';

@Entity()
export class PointLog extends BaseEntity {
  @PrimaryColumn('uuid', {name: 'point_log_id'})
  id!: string;

  @Column({ name: 'type', type:'enum', nullable: false , enum: ActionType})
  address!: ActionType;

  @Column({ name: 'value', type:'int', nullable: false })
  value!: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    nullable: false,
  })
  createdAt!: Date;

  @ManyToOne(() => Review, (review) => review.pointLog, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'review_id' })
  review!: Review;

  @ManyToOne(() => User, (user) => user.pointLog, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
