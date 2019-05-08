import { File, PhotoSize } from '../outputs'

/**
 * Describes a video note. The video must be equal in width and height, cropped to a
 * circle, and stored in MPEG4 format
 */
export class VideoNoteBaseModel {
  public _: 'videoNote'
  /** Duration of the video, in seconds; as defined by the sender */
  public duration: number
  /** Video width and height; as defined by the sender */
  public length: number
  /** Video thumbnail; as defined by the sender; may be null */
  public thumbnail?: PhotoSize
  /** File containing the video */
  public video: File
}
