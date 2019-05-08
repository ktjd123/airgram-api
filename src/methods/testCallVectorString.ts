import { TestVectorStringUnion } from '../outputs'

/**
 * Returns the received vector of strings; for testing only. This is an offline method.
 * Can be called before authorization
 * @param {Object} params
 * @param {string[]} [params.x] - Vector of strings to return
 * @param {Object} state
 * @returns {TestVectorStringUnion}
 */
export type TestCallVectorStringMethod = <ResponseT = TestVectorStringUnion>(
  params: TestCallVectorStringParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface TestCallVectorStringParams {
  /** Vector of strings to return */
  x?: string[]
}
