import { NotFoundException } from '@nestjs/common';
import { CreateEventsDto } from 'src/events/dto/create-events.dto';
import { User } from 'src/user/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Place } from './place.entity';

@EntityRepository(Place)
export class PlaceRepository extends Repository<Place> {
    async findPlace(placeId: string): Promise<Place> {
        const place = await this.findOne({id: placeId});
    
        if (!place) {
          throw new NotFoundException(`Can't find Product with id ${placeId}`);
        }
    
        return place;
      }

}
