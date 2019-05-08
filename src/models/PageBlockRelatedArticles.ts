import { PageBlockRelatedArticle, RichTextUnion } from '../outputs'

/** Related articles */
export class PageBlockRelatedArticlesBaseModel {
  public _: 'pageBlockRelatedArticles'
  /** Block header */
  public header: RichTextUnion
  /** List of related articles */
  public articles: PageBlockRelatedArticle[]
}
