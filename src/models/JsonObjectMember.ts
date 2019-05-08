import { JsonValueUnion } from '../outputs'

/** Represents one member of a JSON object */
export class JsonObjectMemberBaseModel {
  public _: 'jsonObjectMember'
  /** Member's key */
  public key: string
  /** Member's value */
  public value: JsonValueUnion
}
