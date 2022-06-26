import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Review } from '../review/review.entity';

@Entity()
export class Place extends BaseEntity {
  @PrimaryColumn('uuid', {name: 'place_id'})
  id!: string;

  @Column({ name: 'address', type:'longtext', nullable: false })
  address!: string;

  @OneToMany(() => Review, (review) => review.place)
  review!: Review[];
}
