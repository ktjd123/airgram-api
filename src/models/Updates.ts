import { UpdateUnion } from '../outputs'

/** Contains a list of updates */
export class UpdatesBaseModel {
  public _: 'updates'
  /** List of updates */
  public updates: UpdateUnion[]
}
