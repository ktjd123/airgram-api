import { FormattedText, InputFileUnion, InputThumbnail } from '../outputs'

/** An animation message (GIF-style). */
export class InputMessageAnimationBaseModel {
  public _: 'inputMessageAnimation'
  /** Animation file to be sent */
  public animation: InputFileUnion
  /** Animation thumbnail, if available */
  public thumbnail: InputThumbnail
  /** Duration of the animation, in seconds */
  public duration: number
  /** Width of the animation; may be replaced by the server */
  public width: number
  /** Height of the animation; may be replaced by the server */
  public height: number
  /** Animation caption; 0-GetOption("message_caption_length_max") characters */
  public caption: FormattedText
}
