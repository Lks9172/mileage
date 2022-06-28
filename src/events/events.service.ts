import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoRepository } from 'src/photo/photo.repository';
import { PlaceRepository } from 'src/place/place.repository';
import { ReviewRepository } from 'src/review/review.repository';
import { UserRepository } from 'src/user/user.repository';
import { CreateEventsDto } from './dto/create-events.dto';
import { resAdd } from './dto/types';
import { EventFactory } from './events.factory';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(ReviewRepository)
    @InjectRepository(UserRepository)
    @InjectRepository(PlaceRepository)
    @InjectRepository(PhotoRepository)
    private reviewRepository: ReviewRepository,
    private userRepository: UserRepository,
    private placeRepository: PlaceRepository,
    private photoRepository: PhotoRepository,
  ) {}
  async takeEvent(createEventsDto: CreateEventsDto): Promise<resAdd | boolean> {
    const eventFactory = new EventFactory(
        this.reviewRepository, 
        this.userRepository, 
        this.placeRepository,
        this.photoRepository,
        );
    const eventer = await eventFactory.getEvent(createEventsDto.action);
    const res = await eventer.rise(createEventsDto);
    if (res === false)
        throw new Error('업데이트 실패')
    return await eventer.rise(createEventsDto);
  }
}
