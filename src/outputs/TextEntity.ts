import { TextEntityTypeUnion } from './index'

export type TextEntityUnion = TextEntity

/** Represents a part of the text that needs to be formatted in some unusual way */
export interface TextEntity {
  _: 'textEntity'
  /** Offset of the entity in UTF-16 code points */
  offset: number
  /** Length of the entity, in UTF-16 code points */
  length: number
  /** Type of the entity */
  type: TextEntityTypeUnion
}
