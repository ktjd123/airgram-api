import { OkUnion } from '../outputs'

/**
 * Deletes all information about a language pack in the current localization target.
 * The language pack which is currently in use (including base language pack) or is
 * being synchronized can't be deleted. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.languagePackId] - Identifier of the language pack to delete
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DeleteLanguagePackMethod = <ResponseT = OkUnion>(
  params: DeleteLanguagePackParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DeleteLanguagePackParams {
  /** Identifier of the language pack to delete */
  languagePackId?: string
}
