import { Photo } from '../photo/photo.entity';
import { Place } from '../place/place.entity';
import { PointLog } from '../point_log/point_log.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../user/user.entity';


@Entity()
export class Review extends BaseEntity {
  @PrimaryColumn('uuid', {name: 'id'})
  id!: string;

  @Column({name:'content', type:'longtext', nullable: true})
  content!: string;

  @ManyToOne(() => User, (user) => user.review, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @ManyToOne(() => Place, (place) => place.review, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'place_id' })
  place!: Place;

  @OneToMany(() => Photo, (photo) => photo.review)
  photo!: Photo[];

  @OneToMany(() => PointLog, (pointLog) => pointLog.review)
  pointLog!: PointLog[];
}
