import { ErrorUnion } from '../outputs'

/**
 * Does nothing and ensures that the Error object is used; for testing only. This is
 * an offline method. Can be called before authorization
 * @param {Object} state
 * @returns {ErrorUnion}
 */
export type TestUseErrorMethod = <ResponseT = ErrorUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
