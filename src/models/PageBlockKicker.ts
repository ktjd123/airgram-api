import { RichTextUnion } from '../outputs'

/** A kicker */
export class PageBlockKickerBaseModel {
  public _: 'pageBlockKicker'
  /** Kicker */
  public kicker: RichTextUnion
}
