import { CountUnion } from '../outputs'

/**
 * Returns file downloaded prefix size from a given offset
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file
 * @param {number} [params.offset] - Offset from which downloaded prefix size should
 * be calculated
 * @param {Object} state
 * @returns {CountUnion}
 */
export type GetFileDownloadedPrefixSizeMethod = <ResponseT = CountUnion>(
  params: GetFileDownloadedPrefixSizeParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetFileDownloadedPrefixSizeParams {
  /** Identifier of the file */
  fileId?: number
  /** Offset from which downloaded prefix size should be calculated */
  offset?: number
}
