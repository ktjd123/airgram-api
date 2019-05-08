import { PhotoSize } from './index'

export type PhotoUnion = Photo

/** Describes a photo */
export interface Photo {
  _: 'photo'
  /** True, if stickers were added to the photo */
  hasStickers: boolean
  /** Available variants of the photo, in different sizes */
  sizes: PhotoSize[]
}
