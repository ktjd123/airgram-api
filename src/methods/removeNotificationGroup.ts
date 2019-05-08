import { OkUnion } from '../outputs'

/**
 * Removes a group of active notifications. Needs to be called only if the notification
 * group is removed by the current user
 * @param {Object} params
 * @param {number} [params.notificationGroupId] - Notification group identifier
 * @param {number} [params.maxNotificationId] - Maximum identifier of removed notifications
 * @param {Object} state
 * @returns {OkUnion}
 */
export type RemoveNotificationGroupMethod = <ResponseT = OkUnion>(
  params: RemoveNotificationGroupParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RemoveNotificationGroupParams {
  /** Notification group identifier */
  notificationGroupId?: number
  /** Maximum identifier of removed notifications */
  maxNotificationId?: number
}
