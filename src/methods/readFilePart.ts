import { FilePartUnion } from '../outputs'

/**
 * Reads a part of a file from the TDLib file cache and returns read bytes. This method
 * is intended to be used only if the client has no direct access to TDLib's file system,
 * because it is usually slower than a direct read from the file
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file. The file must be located
 * in the TDLib file cache
 * @param {number} [params.offset] - The offset from which to read the file
 * @param {number} [params.count] - Number of bytes to read. An error will be returned
 * if there are not enough bytes available in the file from the specified position.
 * Pass 0 to read all available data from the specified position
 * @param {Object} state
 * @returns {FilePartUnion}
 */
export type ReadFilePartMethod = <ResponseT = FilePartUnion>(
  params: ReadFilePartParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ReadFilePartParams {
  /** Identifier of the file. The file must be located in the TDLib file cache */
  fileId?: number
  /** The offset from which to read the file */
  offset?: number
  /**
   * Number of bytes to read. An error will be returned if there are not enough bytes
   * available in the file from the specified position. Pass 0 to read all available data
   * from the specified position
   */
  count?: number
}
