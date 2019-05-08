import { LogStreamUnion } from '../outputs'

/**
 * Returns information about currently used log stream for internal logging of TDLib.
 * This is an offline method. Can be called before authorization. Can be called synchronously
 * @param {Object} state
 * @returns {LogStreamUnion}
 */
export type GetLogStreamMethod = <ResponseT = LogStreamUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
