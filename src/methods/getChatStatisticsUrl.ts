import { HttpUrlUnion } from '../outputs'

/**
 * Returns URL with the chat statistics. Currently this method can be used only for
 * channels
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.parameters] - Parameters from "tg://statsrefresh?params=******"
 * link
 * @param {boolean} [params.isDark] - Pass true if a URL with the dark theme must
 * be returned
 * @param {Object} state
 * @returns {HttpUrlUnion}
 */
export type GetChatStatisticsUrlMethod = <ResponseT = HttpUrlUnion>(
  params: GetChatStatisticsUrlParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetChatStatisticsUrlParams {
  /** Chat identifier */
  chatId?: number
  /** Parameters from "tg://statsrefresh?params=******" link */
  parameters?: string
  /** Pass true if a URL with the dark theme must be returned */
  isDark?: boolean
}
