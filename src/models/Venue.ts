import { Location } from '../outputs'

/** Describes a venue */
export class VenueBaseModel {
  public _: 'venue'
  /** Venue location; as defined by the sender */
  public location: Location
  /** Venue name; as defined by the sender */
  public title: string
  /** Venue address; as defined by the sender */
  public address: string
  /**
   * Provider of the venue database; as defined by the sender. Currently only "foursquare"
   * needs to be supported
   */
  public provider: string
  /** Identifier of the venue in the provider database; as defined by the sender */
  public id: string
  /** Type of the venue in the provider database; as defined by the sender */
  public type: string
}
