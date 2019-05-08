import { OkUnion } from '../outputs'

/**
 * Adds a custom server language pack to the list of installed language packs in current
 * localization target. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.languagePackId] - Identifier of a language pack to be
 * added; may be different from a name that is used in an "https://t.me/setlanguage/"
 * link
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AddCustomServerLanguagePackMethod = <ResponseT = OkUnion>(
  params: AddCustomServerLanguagePackParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AddCustomServerLanguagePackParams {
  /**
   * Identifier of a language pack to be added; may be different from a name that is used
   * in an "https://t.me/setlanguage/" link
   */
  languagePackId?: string
}
