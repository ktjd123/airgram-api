/** A payment has been completed */
export class MessagePaymentSuccessfulBaseModel {
  public _: 'messagePaymentSuccessful'
  /**
   * Identifier of the message with the corresponding invoice; can be an identifier of
   * a deleted message
   */
  public invoiceMessageId: number
  /** Currency for the price of the product */
  public currency: string
  /** Total price for the product, in the minimal quantity of the currency */
  public totalAmount: number
}
