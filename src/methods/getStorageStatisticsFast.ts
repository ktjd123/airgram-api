import { StorageStatisticsFastUnion } from '../outputs'

/**
 * Quickly returns approximate storage usage statistics. Can be called before authorization
 * @param {Object} state
 * @returns {StorageStatisticsFastUnion}
 */
export type GetStorageStatisticsFastMethod = <ResponseT = StorageStatisticsFastUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
