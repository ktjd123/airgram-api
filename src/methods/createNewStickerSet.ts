import { InputStickerInput } from '../inputs'
import { StickerSetUnion } from '../outputs'

/**
 * Creates a new sticker set; for bots only. Returns the newly created sticker set
 * @param {Object} params
 * @param {number} [params.userId] - Sticker set owner
 * @param {string} [params.title] - Sticker set title; 1-64 characters
 * @param {string} [params.name] - Sticker set name. Can contain only English letters,
 * digits and underscores. Must end with *"_by_<bot username>"* (*<bot_username>* is
 * case insensitive); 1-64 characters
 * @param {boolean} [params.isMasks] - True, if stickers are masks
 * @param {InputStickerInput[]} [params.stickers] - List of stickers to be added
 * to the set
 * @param {Object} state
 * @returns {StickerSetUnion}
 */
export type CreateNewStickerSetMethod = <ResponseT = StickerSetUnion>(
  params: CreateNewStickerSetParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CreateNewStickerSetParams {
  /** Sticker set owner */
  userId?: number
  /** Sticker set title; 1-64 characters */
  title?: string
  /**
   * Sticker set name. Can contain only English letters, digits and underscores. Must
   * end with *"_by_<bot username>"* (*<bot_username>* is case insensitive); 1-64 characters
   */
  name?: string
  /** True, if stickers are masks */
  isMasks?: boolean
  /** List of stickers to be added to the set */
  stickers?: InputStickerInput[]
}
