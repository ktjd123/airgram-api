import { PageBlockCaption, PageBlockUnion } from '../outputs'

/** A slideshow */
export class PageBlockSlideshowBaseModel {
  public _: 'pageBlockSlideshow'
  /** Slideshow item contents */
  public pageBlocks: PageBlockUnion[]
  /** Block caption */
  public caption: PageBlockCaption
}
