/**
 * The number of online group members has changed. This update with non-zero count is
 * sent only for currently opened chats. There is no guarantee that it will be sent
 * just after the count has changed
 */
export class UpdateChatOnlineMemberCountBaseModel {
  public _: 'updateChatOnlineMemberCount'
  /** Identifier of the chat */
  public chatId: number
  /** New number of online members in the chat, or 0 if unknown */
  public onlineMemberCount: number
}
