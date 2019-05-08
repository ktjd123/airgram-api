import { JsonValueUnion } from '../outputs'

/**
 * Converts a JSON-serialized string to corresponding JsonValue object. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.json] - The JSON-serialized string
 * @param {Object} state
 * @returns {JsonValueUnion}
 */
export type GetJsonValueMethod = <ResponseT = JsonValueUnion>(
  params: GetJsonValueParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetJsonValueParams {
  /** The JSON-serialized string */
  json?: string
}
