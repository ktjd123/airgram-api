import { HttpUrlUnion } from '../outputs'

/**
 * Returns a private HTTPS link to a message in a chat. Available only for already sent
 * messages in supergroups and channels. The link will work only for members of the
 * chat
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the message
 * belongs
 * @param {number} [params.messageId] - Identifier of the message
 * @param {Object} state
 * @returns {HttpUrlUnion}
 */
export type GetMessageLinkMethod = <ResponseT = HttpUrlUnion>(
  params: GetMessageLinkParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetMessageLinkParams {
  /** Identifier of the chat to which the message belongs */
  chatId?: number
  /** Identifier of the message */
  messageId?: number
}
