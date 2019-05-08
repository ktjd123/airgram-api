import { Poll } from '../outputs'

/** A message with a poll */
export class MessagePollBaseModel {
  public _: 'messagePoll'
  /** Poll */
  public poll: Poll
}
