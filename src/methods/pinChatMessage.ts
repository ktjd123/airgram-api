import { OkUnion } from '../outputs'

/**
 * Pins a message in a chat; requires appropriate administrator rights in the group
 * or channel
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat
 * @param {number} [params.messageId] - Identifier of the new pinned message
 * @param {boolean} [params.disableNotification] - True, if there should be no notification
 * about the pinned message
 * @param {Object} state
 * @returns {OkUnion}
 */
export type PinChatMessageMethod = <ResponseT = OkUnion>(
  params: PinChatMessageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface PinChatMessageParams {
  /** Identifier of the chat */
  chatId?: number
  /** Identifier of the new pinned message */
  messageId?: number
  /** True, if there should be no notification about the pinned message */
  disableNotification?: boolean
}
