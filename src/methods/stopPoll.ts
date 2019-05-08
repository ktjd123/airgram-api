import { ReplyMarkupInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Stops a poll. A poll in a message can be stopped when the message has can_be_edited
 * flag set
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the poll belongs
 * @param {number} [params.messageId] - Identifier of the message containing the
 * poll
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * for bots only
 * @param {Object} state
 * @returns {OkUnion}
 */
export type StopPollMethod = <ResponseT = OkUnion>(
  params: StopPollParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface StopPollParams {
  /** Identifier of the chat to which the poll belongs */
  chatId?: number
  /** Identifier of the message containing the poll */
  messageId?: number
  /** The new message reply markup; for bots only */
  replyMarkup?: ReplyMarkupInputUnion
}
