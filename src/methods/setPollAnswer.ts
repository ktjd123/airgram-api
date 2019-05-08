import { OkUnion } from '../outputs'

/**
 * Changes user answer to a poll
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the poll belongs
 * @param {number} [params.messageId] - Identifier of the message containing the
 * poll
 * @param {number[]} [params.optionIds] - 0-based identifiers of options, chosen
 * by the user. Currently user can't choose more than 1 option
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetPollAnswerMethod = <ResponseT = OkUnion>(
  params: SetPollAnswerParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetPollAnswerParams {
  /** Identifier of the chat to which the poll belongs */
  chatId?: number
  /** Identifier of the message containing the poll */
  messageId?: number
  /**
   * 0-based identifiers of options, chosen by the user. Currently user can't choose more
   * than 1 option
   */
  optionIds?: number[]
}
