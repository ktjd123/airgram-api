import { LogVerbosityLevelUnion } from '../outputs'

/**
 * Returns current verbosity level of the internal logging of TDLib. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 * @param {Object} state
 * @returns {LogVerbosityLevelUnion}
 */
export type GetLogVerbosityLevelMethod = <ResponseT = LogVerbosityLevelUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
