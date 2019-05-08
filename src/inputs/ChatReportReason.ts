/** Describes the reason why a chat is reported */
export type ChatReportReasonInputUnion = ChatReportReasonSpamInput
  | ChatReportReasonViolenceInput
  | ChatReportReasonPornographyInput
  | ChatReportReasonChildAbuseInput
  | ChatReportReasonCopyrightInput
  | ChatReportReasonCustomInput

/** The chat contains spam messages */
export interface ChatReportReasonSpamInput {
  _: 'chatReportReasonSpam'
}

/** The chat promotes violence */
export interface ChatReportReasonViolenceInput {
  _: 'chatReportReasonViolence'
}

/** The chat contains pornographic messages */
export interface ChatReportReasonPornographyInput {
  _: 'chatReportReasonPornography'
}

/** The chat has child abuse related content */
export interface ChatReportReasonChildAbuseInput {
  _: 'chatReportReasonChildAbuse'
}

/** The chat contains copyrighted content */
export interface ChatReportReasonCopyrightInput {
  _: 'chatReportReasonCopyright'
}

/** A custom reason provided by the user */
export interface ChatReportReasonCustomInput {
  _: 'chatReportReasonCustom'
  /** Report text */
  text?: string
}
