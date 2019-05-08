import { PushReceiverIdUnion } from '../outputs'

/**
 * Returns a globally unique push notification subscription identifier for identification
 * of an account, which has received a push notification. This is an offline method.
 * Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.payload] - JSON-encoded push notification payload
 * @param {Object} state
 * @returns {PushReceiverIdUnion}
 */
export type GetPushReceiverIdMethod = <ResponseT = PushReceiverIdUnion>(
  params: GetPushReceiverIdParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetPushReceiverIdParams {
  /** JSON-encoded push notification payload */
  payload?: string
}
