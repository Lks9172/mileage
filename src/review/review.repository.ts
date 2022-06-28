import { CreateEventsDto } from 'src/events/dto/create-events.dto';
import { Place } from 'src/place/place.entity';
import { User } from 'src/user/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Review } from './review.entity'

@EntityRepository(Review)
export class ReviewRepository extends Repository<Review> {
  async createReview(createEventsDto: CreateEventsDto, user: User, place: Place): Promise<Review> {
    const { type, action, reviewId, content, attachedPhotoIds, userId, placeId } = createEventsDto;
    const dummy ={
      reviewId,
      content: content,
      user,
      place,
    }
    const review = this.create(dummy);
    await this.save(review);

    return review;
  }

  async modifyReview(createEventsDto: CreateEventsDto): Promise<boolean> {
    return true;
  }

  async deleteReview(createEventsDto: CreateEventsDto): Promise<boolean> {
    return true;
  }

}
