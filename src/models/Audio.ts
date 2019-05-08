import { File, PhotoSize } from '../outputs'

/** Describes an audio file. Audio is usually in MP3 format */
export class AudioBaseModel {
  public _: 'audio'
  /** Duration of the audio, in seconds; as defined by the sender */
  public duration: number
  /** Title of the audio; as defined by the sender */
  public title: string
  /** Performer of the audio; as defined by the sender */
  public performer: string
  /** Original name of the file; as defined by the sender */
  public fileName: string
  /** The MIME type of the file; as defined by the sender */
  public mimeType: string
  /**
   * The thumbnail of the album cover; as defined by the sender. The full size thumbnail
   * should be extracted from the downloaded file; may be null
   */
  public albumCoverThumbnail?: PhotoSize
  /** File containing the audio */
  public audio: File
}
