import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PhotoRepository } from "src/photo/photo.repository";
import { PlaceRepository } from "src/place/place.repository";
import { ReviewRepository } from "src/review/review.repository";
import { UserRepository } from "src/user/user.repository";
import { AddEvent, DeleteEvent, ModEvent } from "./class/events.class";
import { EventInterface } from "./dto/types";

@Injectable()
export class EventFactory {
    constructor(
        private reviewRepository: ReviewRepository,
        private userRepository: UserRepository,
        private placeRepository: PlaceRepository,
        private photoRepository: PhotoRepository,

      ) {}

    async getEvent(action: string): Promise<EventInterface> {
        if (action === 'ADD')
            return new AddEvent(
                this.reviewRepository, 
                this.userRepository, 
                this.placeRepository,
                this.photoRepository,
                );
        else if (action === 'MOD') 
            return new ModEvent(this.reviewRepository);
        else if (action === 'DELETE') 
            return new DeleteEvent(this.reviewRepository);
    }
}
