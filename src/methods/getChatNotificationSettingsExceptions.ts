import { NotificationSettingsScopeInputUnion } from '../inputs'
import { ChatsUnion } from '../outputs'

/**
 * Returns list of chats with non-default notification settings
 * @param {Object} params
 * @param {NotificationSettingsScopeInputUnion} [params.scope] - If specified, only
 * chats from the specified scope will be returned
 * @param {boolean} [params.compareSound] - If true, also chats with non-default
 * sound will be returned
 * @param {Object} state
 * @returns {ChatsUnion}
 */
export type GetChatNotificationSettingsExceptionsMethod = <ResponseT = ChatsUnion>(
  params: GetChatNotificationSettingsExceptionsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetChatNotificationSettingsExceptionsParams {
  /** If specified, only chats from the specified scope will be returned */
  scope?: NotificationSettingsScopeInputUnion
  /** If true, also chats with non-default sound will be returned */
  compareSound?: boolean
}
