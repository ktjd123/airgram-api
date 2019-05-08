import { OkUnion } from '../outputs'

/**
 * Removes an active notification from notification list. Needs to be called only if
 * the notification is removed by the current user
 * @param {Object} params
 * @param {number} [params.notificationGroupId] - Identifier of notification group
 * to which the notification belongs
 * @param {number} [params.notificationId] - Identifier of removed notification
 * @param {Object} state
 * @returns {OkUnion}
 */
export type RemoveNotificationMethod = <ResponseT = OkUnion>(
  params: RemoveNotificationParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RemoveNotificationParams {
  /** Identifier of notification group to which the notification belongs */
  notificationGroupId?: number
  /** Identifier of removed notification */
  notificationId?: number
}
