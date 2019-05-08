import { NetworkStatisticsEntryUnion } from './index'

export type NetworkStatisticsUnion = NetworkStatistics

/** A full list of available network statistic entries */
export interface NetworkStatistics {
  _: 'networkStatistics'
  /** Point in time (Unix timestamp) when the app began collecting statistics */
  sinceDate: number
  /** Network statistics entries */
  entries: NetworkStatisticsEntryUnion[]
}
