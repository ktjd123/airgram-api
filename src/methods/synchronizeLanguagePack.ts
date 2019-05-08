import { OkUnion } from '../outputs'

/**
 * Fetches the latest versions of all strings from a language pack in the current localization
 * target from the server. This method doesn't need to be called explicitly for the
 * current used/base language packs. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.languagePackId] - Language pack identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SynchronizeLanguagePackMethod = <ResponseT = OkUnion>(
  params: SynchronizeLanguagePackParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SynchronizeLanguagePackParams {
  /** Language pack identifier */
  languagePackId?: string
}
