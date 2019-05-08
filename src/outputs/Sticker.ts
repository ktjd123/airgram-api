import { File, MaskPosition, PhotoSize } from './index'

export type StickerUnion = Sticker

/** Describes a sticker */
export interface Sticker {
  _: 'sticker'
  /** The identifier of the sticker set to which the sticker belongs; 0 if none */
  setId: number | string
  /** Sticker width; as defined by the sender */
  width: number
  /** Sticker height; as defined by the sender */
  height: number
  /** Emoji corresponding to the sticker */
  emoji: string
  /** True, if the sticker is a mask */
  isMask: boolean
  /** Position where the mask should be placed; may be null */
  maskPosition?: MaskPosition
  /** Sticker thumbnail in WEBP or JPEG format; may be null */
  thumbnail?: PhotoSize
  /** File containing the sticker */
  sticker: File
}
