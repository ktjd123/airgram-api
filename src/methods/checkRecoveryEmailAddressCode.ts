import { PasswordStateUnion } from '../outputs'

/**
 * Checks the 2-step verification recovery email address verification code
 * @param {Object} params
 * @param {string} [params.code] - Verification code
 * @param {Object} state
 * @returns {PasswordStateUnion}
 */
export type CheckRecoveryEmailAddressCodeMethod = <ResponseT = PasswordStateUnion>(
  params: CheckRecoveryEmailAddressCodeParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CheckRecoveryEmailAddressCodeParams {
  /** Verification code */
  code?: string
}
