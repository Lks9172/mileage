import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoRepository } from 'src/photo/photo.repository';
import { PlaceRepository } from 'src/place/place.repository';
import { ReviewRepository } from 'src/review/review.repository';
import { UserRepository } from 'src/user/user.repository';
import { AddEvent, ModEvent, DeleteEvent } from './class/events.class';
import { EventsController } from './events.controller';
import { EventFactory } from './events.factory';
import { EventsService } from './events.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ReviewRepository]),
        TypeOrmModule.forFeature([UserRepository]),
        TypeOrmModule.forFeature([PlaceRepository]),
        TypeOrmModule.forFeature([PhotoRepository]),
    ],
    controllers: [EventsController],
    providers: [EventsService, EventFactory, AddEvent, ModEvent, DeleteEvent],
  })export class EventsModule {}
