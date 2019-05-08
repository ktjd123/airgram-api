import { JsonValueInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Saves application log event on the server. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.type] - Event type
 * @param {number} [params.chatId] - Optional chat identifier, associated with the
 * event
 * @param {JsonValueInputUnion} [params.data] - The log event data
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SaveApplicationLogEventMethod = <ResponseT = OkUnion>(
  params: SaveApplicationLogEventParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SaveApplicationLogEventParams {
  /** Event type */
  type?: string
  /** Optional chat identifier, associated with the event */
  chatId?: number
  /** The log event data */
  data?: JsonValueInputUnion
}
