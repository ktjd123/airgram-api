import { ChatPhoto } from '../outputs'

/** A chat photo was changed */
export class UpdateChatPhotoBaseModel {
  public _: 'updateChatPhoto'
  /** Chat identifier */
  public chatId: number
  /** The new chat photo; may be null */
  public photo?: ChatPhoto
}
