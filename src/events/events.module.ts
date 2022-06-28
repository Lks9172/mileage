import { Module } from '@nestjs/common';
import { AddEvent, DeleteEvent, ModEvent } from './class/events.class';
import { EventsController } from './events.controller';
import { EventFactory } from './events.factory';
import { EventsService } from './events.service';

@Module({
    // imports: [
    //   TypeOrmModule.forFeature([OrderRepository]),
    // ],
    controllers: [EventsController],
    providers: [EventsService, EventFactory, AddEvent, ModEvent, DeleteEvent],
    // providers: [OrderService],
  })export class EventsModule {}
