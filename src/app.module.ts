import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { UserModule } from './user/user.module';
import { ReviewModule } from './review/review.module';
import { PhotoModule } from './photo/photo.module';
import { PlaceModule } from './place/place.module';
import { PointLogModule } from './point_log/point-log.module';
import { PointModule } from './point/point.module';
import { EventsModule } from './events/events.module';
import { UserRepository } from 'src/user/user.repository';
import { ReviewRepository } from './review/review.repository';
import { PlaceRepository } from './place/place.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    TypeOrmModule.forFeature([UserRepository]),
    TypeOrmModule.forFeature([ReviewRepository]),
    TypeOrmModule.forFeature([PlaceRepository]),
    UserModule,
    ReviewModule,
    PhotoModule,
    PlaceModule,
    PointLogModule,
    PointModule,
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
