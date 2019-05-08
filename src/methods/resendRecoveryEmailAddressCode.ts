import { PasswordStateUnion } from '../outputs'

/**
 * Resends the 2-step verification recovery email address verification code
 * @param {Object} state
 * @returns {PasswordStateUnion}
 */
export type ResendRecoveryEmailAddressCodeMethod = <ResponseT = PasswordStateUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
