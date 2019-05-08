import { OkUnion } from '../outputs'

/**
 * Removes the pinned message from a chat; requires appropriate administrator rights
 * in the group or channel
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat
 * @param {Object} state
 * @returns {OkUnion}
 */
export type UnpinChatMessageMethod = <ResponseT = OkUnion>(
  params: UnpinChatMessageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface UnpinChatMessageParams {
  /** Identifier of the chat */
  chatId?: number
}
