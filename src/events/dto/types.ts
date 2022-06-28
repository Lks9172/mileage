import { Photo } from "src/photo/photo.entity";
import { Review } from "src/review/review.entity";
import { User } from "src/user/user.entity";
import { CreateEventsDto } from "./create-events.dto";

export declare type resBody = {
  success: boolean;
  data: resAdd | boolean;
};

export declare type resAdd = {
  user: User,
  review: Review,
  photos: Photo[]
}

export interface EventInterface {
  rise(createEventsDto : CreateEventsDto): Promise<resAdd | boolean>
}

