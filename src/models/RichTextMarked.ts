import { RichTextUnion } from '../outputs'

/** A marked rich text */
export class RichTextMarkedBaseModel {
  public _: 'richTextMarked'
  /** Text */
  public text: RichTextUnion
}
