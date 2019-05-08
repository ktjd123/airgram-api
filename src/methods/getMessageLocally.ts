import { MessageUnion } from '../outputs'

/**
 * Returns information about a message, if it is available locally without sending network
 * request. This is an offline request
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message to get
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type GetMessageLocallyMethod = <ResponseT = MessageUnion>(
  params: GetMessageLocallyParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetMessageLocallyParams {
  /** Identifier of the chat the message belongs to */
  chatId?: number
  /** Identifier of the message to get */
  messageId?: number
}
