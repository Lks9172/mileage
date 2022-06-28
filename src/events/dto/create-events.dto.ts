import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';
import { ActionType } from '../../point_log/point_log.enum'

export class CreateEventsDto {
  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  action: ActionType;

  @IsNotEmpty()
  @IsUUID()
  reviewId: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsArray()
  attachedPhotoIds: string[];

  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  placeId: string;
}
