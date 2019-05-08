import { Notification } from '../outputs'

/** A notification was changed */
export class UpdateNotificationBaseModel {
  public _: 'updateNotification'
  /** Unique notification group identifier */
  public notificationGroupId: number
  /** Changed notification */
  public notification: Notification
}
