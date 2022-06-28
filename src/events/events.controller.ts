import { Body, Controller, Post } from '@nestjs/common';
import { CreateEventsDto } from './dto/create-events.dto';
import { resBody } from './dto/types';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) {}

    @Post('/')
    async completeOrder(
      @Body() createEventsDto: CreateEventsDto,
    ): Promise<resBody> {
      const data = await this.eventsService.takeEvent(createEventsDto);

      const res = {
        success: true,
        data
      }
      return res;
    }
}
