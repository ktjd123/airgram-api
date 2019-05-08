import { LogTagsUnion } from '../outputs'

/**
 * Returns list of available TDLib internal log tags, for example, ["actor", "binlog",
 * "connections", "notifications", "proxy"]. This is an offline method. Can be called
 * before authorization. Can be called synchronously
 * @param {Object} state
 * @returns {LogTagsUnion}
 */
export type GetLogTagsMethod = <ResponseT = LogTagsUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
