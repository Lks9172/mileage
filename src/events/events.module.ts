import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsController } from './events.controller';

@Module({
    // imports: [
    //   TypeOrmModule.forFeature([OrderRepository]),
    // ],
    controllers: [EventsController],
    // providers: [OrderService],
  })export class EventsModule {}
