import { PhotoSize } from '../outputs'

/** Describes a photo */
export class PhotoBaseModel {
  public _: 'photo'
  /** True, if stickers were added to the photo */
  public hasStickers: boolean
  /** Available variants of the photo, in different sizes */
  public sizes: PhotoSize[]
}
