import { RichTextUnion } from '../outputs'

/** A rich text anchor */
export class RichTextAnchorBaseModel {
  public _: 'richTextAnchor'
  /** Text */
  public text: RichTextUnion
  /** Anchor name */
  public name: string
}
