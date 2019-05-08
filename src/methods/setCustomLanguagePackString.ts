import { LanguagePackStringInput } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Adds, edits or deletes a string in a custom local language pack. Can be called before
 * authorization
 * @param {Object} params
 * @param {string} [params.languagePackId] - Identifier of a previously added custom
 * local language pack in the current localization target
 * @param {LanguagePackStringInput} [params.newString] - New language pack string
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetCustomLanguagePackStringMethod = <ResponseT = OkUnion>(
  params: SetCustomLanguagePackStringParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetCustomLanguagePackStringParams {
  /**
   * Identifier of a previously added custom local language pack in the current localization
   * target
   */
  languagePackId?: string
  /** New language pack string */
  newString?: LanguagePackStringInput
}
