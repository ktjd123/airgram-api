import { RichTextUnion } from '../outputs'

/** A superscript rich text */
export class RichTextSuperscriptBaseModel {
  public _: 'richTextSuperscript'
  /** Text */
  public text: RichTextUnion
}
