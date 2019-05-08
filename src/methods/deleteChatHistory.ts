import { OkUnion } from '../outputs'

/**
 * Deletes all messages in the chat. Use Chat.can_be_deleted_only_for_self and Chat.can_be_deleted_for_all_users
 * fields to find whether and how the method can be applied to the chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.removeFromChatList] - Pass true if the chat should be
 * removed from the chat list
 * @param {boolean} [params.revoke] - Pass true to try to delete chat history for
 * all users
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DeleteChatHistoryMethod = <ResponseT = OkUnion>(
  params: DeleteChatHistoryParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DeleteChatHistoryParams {
  /** Chat identifier */
  chatId?: number
  /** Pass true if the chat should be removed from the chat list */
  removeFromChatList?: boolean
  /** Pass true to try to delete chat history for all users */
  revoke?: boolean
}
