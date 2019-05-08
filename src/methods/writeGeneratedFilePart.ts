import { OkUnion } from '../outputs'

/**
 * Writes a part of a generated file. This method is intended to be used only if the
 * client has no direct access to TDLib's file system, because it is usually slower
 * than a direct write to the destination file
 * @param {Object} params
 * @param {number | string} [params.generationId] - The identifier of the generation
 * process
 * @param {number} [params.offset] - The offset from which to write the data to the
 * file
 * @param {string} [params.data] - The data to write
 * @param {Object} state
 * @returns {OkUnion}
 */
export type WriteGeneratedFilePartMethod = <ResponseT = OkUnion>(
  params: WriteGeneratedFilePartParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface WriteGeneratedFilePartParams {
  /** The identifier of the generation process */
  generationId?: number | string
  /** The offset from which to write the data to the file */
  offset?: number
  /** The data to write */
  data?: string
}
