import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Review } from '../review/review.entity';

@Entity()
export class Photo extends BaseEntity {
  @PrimaryColumn('uuid', {name: 'id'})
  id!: string;

  @Column({ name: 'path', nullable: false })
  path!: string;

  @ManyToOne(() => Review, (review) => review.photo, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'review_id' })
  review!: Review;
}
