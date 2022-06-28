import { NotFoundException } from '@nestjs/common';
import { Review } from 'src/review/review.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Photo } from './photo.entity'

@EntityRepository(Photo)
export class PhotoRepository extends Repository<Photo> {
    async findPhotoIds(attachedPhotoIds: string[]): Promise<Photo[]> {
        return await this.findByIds(attachedPhotoIds)
    }
    async updatePhoto(attachedPhotoId: string, path: string, review: Review): Promise<boolean> {
      try{
        await this.update(attachedPhotoId, {
            path,
            review
        });
        return true
      }
      catch(err){
        return false
      }
    }
}
