import { Supergroup } from '../outputs'

/**
 * Some data of a supergroup or a channel has changed. This update is guaranteed to
 * come before the supergroup identifier is returned to the client
 */
export class UpdateSupergroupBaseModel {
  public _: 'updateSupergroup'
  /** New data about the supergroup */
  public supergroup: Supergroup
}
