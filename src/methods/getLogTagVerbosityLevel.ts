import { LogVerbosityLevelUnion } from '../outputs'

/**
 * Returns current verbosity level for a specified TDLib internal log tag. This is an
 * offline method. Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.tag] - Logging tag to change verbosity level
 * @param {Object} state
 * @returns {LogVerbosityLevelUnion}
 */
export type GetLogTagVerbosityLevelMethod = <ResponseT = LogVerbosityLevelUnion>(
  params: GetLogTagVerbosityLevelParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetLogTagVerbosityLevelParams {
  /** Logging tag to change verbosity level */
  tag?: string
}
