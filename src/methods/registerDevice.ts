import { DeviceTokenInputUnion } from '../inputs'
import { PushReceiverIdUnion } from '../outputs'

/**
 * Registers the currently used device for receiving push notifications. Returns a globally
 * unique identifier of the push notification subscription
 * @param {Object} params
 * @param {DeviceTokenInputUnion} [params.deviceToken] - Device token
 * @param {number[]} [params.otherUserIds] - List of user identifiers of other users
 * currently using the client
 * @param {Object} state
 * @returns {PushReceiverIdUnion}
 */
export type RegisterDeviceMethod = <ResponseT = PushReceiverIdUnion>(
  params: RegisterDeviceParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RegisterDeviceParams {
  /** Device token */
  deviceToken?: DeviceTokenInputUnion
  /** List of user identifiers of other users currently using the client */
  otherUserIds?: number[]
}
