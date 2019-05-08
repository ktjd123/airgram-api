import { MessageForwardOriginUnion } from './index'

export type MessageForwardInfoUnion = MessageForwardInfo

/** Contains information about a forwarded message */
export interface MessageForwardInfo {
  _: 'messageForwardInfo'
  /** Origin of a forwarded message */
  origin: MessageForwardOriginUnion
  /** Point in time (Unix timestamp) when the message was originally sent */
  date: number
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the chat from which the message was forwarded last time; 0 if unknown
   */
  fromChatId: number
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the original message from which the new message was forwarded last time; 0 if
   * unknown
   */
  fromMessageId: number
}
