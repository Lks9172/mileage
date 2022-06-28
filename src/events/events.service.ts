import { Injectable } from '@nestjs/common';
import { EventFactory } from './events.factory';

@Injectable()
export class EventsService {
  async takeEvent(action: string): Promise<boolean> {
    const eventFactory = new EventFactory();
    const eventer = await eventFactory.getEvent(action);
    return true
  }
}
