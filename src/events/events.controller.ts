import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEventsDto } from './dto/create-events.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) {}

    @Post('/')
    async completeOrder(
      @Body() createEventsDto: CreateEventsDto,
    ): Promise<CreateEventsDto> {
      const result = {
        success: true,
      };
      await this.eventsService.takeEvent(createEventsDto.action);
      return createEventsDto;
    }
}
