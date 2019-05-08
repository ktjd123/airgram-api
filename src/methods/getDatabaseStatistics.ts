import { DatabaseStatisticsUnion } from '../outputs'

/**
 * Returns database statistics
 * @param {Object} state
 * @returns {DatabaseStatisticsUnion}
 */
export type GetDatabaseStatisticsMethod = <ResponseT = DatabaseStatisticsUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
