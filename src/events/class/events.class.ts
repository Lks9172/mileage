import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoRepository } from 'src/photo/photo.repository';
import { PlaceRepository } from 'src/place/place.repository';
import { ReviewRepository } from 'src/review/review.repository';
import { UserRepository } from 'src/user/user.repository';
import { CreateEventsDto } from '../dto/create-events.dto';
import { EventInterface, resAdd } from '../dto/types';


@Injectable()
export class AddEvent implements EventInterface {
  constructor(
    private reviewRepository: ReviewRepository,
    private userRepository: UserRepository,
    private placeRepository: PlaceRepository,
    private photoRepository: PhotoRepository,
  ) {}
  async rise(createEventsDto : CreateEventsDto): Promise<resAdd | boolean> {
    // 리뷰쓰기
    const user = await this.userRepository.findUser(createEventsDto.userId);
    const place = await this.placeRepository.findOne(createEventsDto.placeId);
    const photos = await this.photoRepository.findPhotoIds(createEventsDto.attachedPhotoIds);
    const review = await this.reviewRepository.createReview(createEventsDto, user, place);
    const res = await Promise.all(
        photos.map(async (photo) => {
            return this.photoRepository.updatePhoto(photo.id, photo.path, review)
    }))
    if (res.includes(false))
        return false
    const resObj = {
        user,
        review, 
        photos : await this.photoRepository.findPhotoIds(createEventsDto.attachedPhotoIds)
    }
    return resObj;
  }
}

export class ModEvent implements EventInterface {
  constructor(
    @InjectRepository(ReviewRepository)
    private reviewRepository: ReviewRepository,
  ) {}
  async rise(createEventsDto : CreateEventsDto): Promise<boolean> {
    // 리뷰쓰기
    this.reviewRepository.modifyReview(createEventsDto);
    return true;
  }
}

export class DeleteEvent implements EventInterface {
  constructor(
    @InjectRepository(ReviewRepository)
    private reviewRepository: ReviewRepository,
  ) {}
  async rise(createEventsDto : CreateEventsDto): Promise<boolean> {
    this.reviewRepository.modifyReview(createEventsDto);

    return true;
  }
}
