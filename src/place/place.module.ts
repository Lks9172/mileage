import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceRepository } from './place.repository';
import { PlaceService } from './place.service';

@Module({
  imports: [
    ],
  providers: [PlaceService]
})
export class PlaceModule {}
