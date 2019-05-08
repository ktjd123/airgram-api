import { File, PhotoSize } from './index'

export type AudioUnion = Audio

/** Describes an audio file. Audio is usually in MP3 format */
export interface Audio {
  _: 'audio'
  /** Duration of the audio, in seconds; as defined by the sender */
  duration: number
  /** Title of the audio; as defined by the sender */
  title: string
  /** Performer of the audio; as defined by the sender */
  performer: string
  /** Original name of the file; as defined by the sender */
  fileName: string
  /** The MIME type of the file; as defined by the sender */
  mimeType: string
  /**
   * The thumbnail of the album cover; as defined by the sender. The full size thumbnail
   * should be extracted from the downloaded file; may be null
   */
  albumCoverThumbnail?: PhotoSize
  /** File containing the audio */
  audio: File
}
