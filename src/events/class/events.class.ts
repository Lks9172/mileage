import { EventInterface } from '../dto/types';

export class AddEvent implements EventInterface {
  async event(): Promise<boolean> {
    return true;
  }
}

export class ModEvent implements EventInterface {
  async event(): Promise<boolean> {
    return true;
  }
}

export class DeleteEvent implements EventInterface {
  async event(): Promise<boolean> {
    return true;
  }
}
