import { Body, Controller, Post } from '@nestjs/common';
import { CreateEventsDto } from './dto/create-events.dto';

@Controller('events')
export class EventsController {
    @Post('/')
    async completeOrder(
      @Body() createEventsDto: CreateEventsDto,
    ): Promise<any> {
      const result = {
        success: true,
      };
  
      console.log(`${createEventsDto} : 주문의 배송이 완료되었습니다.`);
  
      return result;
    }
}
