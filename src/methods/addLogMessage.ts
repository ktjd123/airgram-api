import { OkUnion } from '../outputs'

/**
 * Adds a message to TDLib internal log. This is an offline method. Can be called before
 * authorization. Can be called synchronously
 * @param {Object} params
 * @param {number} [params.verbosityLevel] - Minimum verbosity level needed for the
 * message to be logged, 0-1023
 * @param {string} [params.text] - Text of a message to log
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AddLogMessageMethod = <ResponseT = OkUnion>(
  params: AddLogMessageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AddLogMessageParams {
  /** Minimum verbosity level needed for the message to be logged, 0-1023 */
  verbosityLevel?: number
  /** Text of a message to log */
  text?: string
}
