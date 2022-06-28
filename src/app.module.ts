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

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
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
