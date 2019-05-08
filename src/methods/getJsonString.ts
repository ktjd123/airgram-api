import { JsonValueInputUnion } from '../inputs'
import { TextUnion } from '../outputs'

/**
 * Converts a JsonValue object to corresponding JSON-serialized string. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {JsonValueInputUnion} [params.jsonValue] - The JsonValue object
 * @param {Object} state
 * @returns {TextUnion}
 */
export type GetJsonStringMethod = <ResponseT = TextUnion>(
  params: GetJsonStringParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetJsonStringParams {
  /** The JsonValue object */
  jsonValue?: JsonValueInputUnion
}
