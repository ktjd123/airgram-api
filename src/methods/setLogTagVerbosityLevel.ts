import { OkUnion } from '../outputs'

/**
 * Sets the verbosity level for a specified TDLib internal log tag. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.tag] - Logging tag to change verbosity level
 * @param {number} [params.newVerbosityLevel] - New verbosity level; 1-1024
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetLogTagVerbosityLevelMethod = <ResponseT = OkUnion>(
  params: SetLogTagVerbosityLevelParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetLogTagVerbosityLevelParams {
  /** Logging tag to change verbosity level */
  tag?: string
  /** New verbosity level; 1-1024 */
  newVerbosityLevel?: number
}
