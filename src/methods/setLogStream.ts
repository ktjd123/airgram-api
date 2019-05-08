import { LogStreamInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Sets new log stream for internal logging of TDLib. This is an offline method. Can
 * be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {LogStreamInputUnion} [params.logStream] - New log stream
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetLogStreamMethod = <ResponseT = OkUnion>(
  params: SetLogStreamParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetLogStreamParams {
  /** New log stream */
  logStream?: LogStreamInputUnion
}
