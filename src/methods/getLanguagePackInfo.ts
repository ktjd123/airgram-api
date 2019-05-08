import { LanguagePackInfoUnion } from '../outputs'

/**
 * Returns information about a language pack. Returned language pack identifier may
 * be different from a provided one. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.languagePackId] - Language pack identifier
 * @param {Object} state
 * @returns {LanguagePackInfoUnion}
 */
export type GetLanguagePackInfoMethod = <ResponseT = LanguagePackInfoUnion>(
  params: GetLanguagePackInfoParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetLanguagePackInfoParams {
  /** Language pack identifier */
  languagePackId?: string
}
