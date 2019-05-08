import { JsonValueUnion } from '../outputs'

/**
 * Returns application config, provided by the server. Can be called before authorization
 * @param {Object} state
 * @returns {JsonValueUnion}
 */
export type GetApplicationConfigMethod = <ResponseT = JsonValueUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
