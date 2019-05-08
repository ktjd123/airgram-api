import { OkUnion } from '../outputs'

/**
 * Handles a push notification. Returns error with code 406 if the push notification
 * is not supported and connection to the server is required to fetch new data. Can
 * be called before authorization
 * @param {Object} params
 * @param {string} [params.payload] - JSON-encoded push notification payload with
 * all fields sent by the server, and "google.sent_time" and "google.notification.sound"
 * fields added
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ProcessPushNotificationMethod = <ResponseT = OkUnion>(
  params: ProcessPushNotificationParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ProcessPushNotificationParams {
  /**
   * JSON-encoded push notification payload with all fields sent by the server, and "google.sent_time"
   * and "google.notification.sound" fields added
   */
  payload?: string
}
