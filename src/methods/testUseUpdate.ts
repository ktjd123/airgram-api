import { UpdateUnion } from '../outputs'

/**
 * Does nothing and ensures that the Update object is used; for testing only. This is
 * an offline method. Can be called before authorization
 * @param {Object} state
 * @returns {UpdateUnion}
 */
export type TestUseUpdateMethod = <ResponseT = UpdateUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
