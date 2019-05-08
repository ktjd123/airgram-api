import { PassportElementsWithErrorsUnion } from '../outputs'

/**
 * Returns already available Telegram Passport elements suitable for completing a Telegram
 * Passport authorization form. Result can be received only once for each authorization
 * form
 * @param {Object} params
 * @param {number} [params.autorizationFormId] - Authorization form identifier
 * @param {string} [params.password] - Password of the current user
 * @param {Object} state
 * @returns {PassportElementsWithErrorsUnion}
 */
export type GetPassportAuthorizationFormAvailableElementsMethod = <ResponseT = PassportElementsWithErrorsUnion>(
  params: GetPassportAuthorizationFormAvailableElementsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetPassportAuthorizationFormAvailableElementsParams {
  /** Authorization form identifier */
  autorizationFormId?: number
  /** Password of the current user */
  password?: string
}
