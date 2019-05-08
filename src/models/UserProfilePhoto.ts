import { PhotoSize } from '../outputs'

/** Contains full information about a user profile photo */
export class UserProfilePhotoBaseModel {
  public _: 'userProfilePhoto'
  /** Unique user profile photo identifier */
  public id: number | string
  /** Point in time (Unix timestamp) when the photo has been added */
  public addedDate: number
  /** Available variants of the user photo, in different sizes */
  public sizes: PhotoSize[]
}
