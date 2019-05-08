import { OkUnion } from '../outputs'

/**
 * Does nothing; for testing only. This is an offline method. Can be called before authorization
 * @param {Object} state
 * @returns {OkUnion}
 */
export type TestCallEmptyMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
