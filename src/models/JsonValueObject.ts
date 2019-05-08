import { JsonObjectMember } from '../outputs'

/** Represents a JSON object */
export class JsonValueObjectBaseModel {
  public _: 'jsonValueObject'
  /** The list of object members */
  public members: JsonObjectMember[]
}
