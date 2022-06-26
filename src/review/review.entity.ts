import { Photo } from '../photo/photo.entity';
import { Place } from '../place/place.entity';
import { PointLog } from '../point_log/point_log.entity';
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../user/user.entity';


@Entity()
export class Review extends BaseEntity {
  @Index()
  @PrimaryColumn('uuid', {name: 'id'})
  id!: string;

  @Column({name:'content', type:'longtext', nullable: true})
  content!: string;

  @Index()
  @ManyToOne(() => User, (user) => user.review, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Index()
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
