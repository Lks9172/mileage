import { AddEvent, DeleteEvent, ModEvent } from "./class/events.class";
import { EventInterface } from "./dto/types";

export class EventFactory {
    async getEvent(action: string): Promise<EventInterface> {
        if (action === 'ADD')
            return new AddEvent();
        else if (action === 'MOD') 
            return new ModEvent();
        else if (action === 'DELETE') 
            return new DeleteEvent();
    }
}
