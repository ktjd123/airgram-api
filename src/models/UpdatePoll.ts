import { Poll } from '../outputs'

/** Information about a poll was updated; for bots only */
export class UpdatePollBaseModel {
  public _: 'updatePoll'
  /** New data about the poll */
  public poll: Poll
}
