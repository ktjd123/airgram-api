import { AuthenticationCodeInfo, TermsOfService } from './index'

/** Represents the current authorization state of the client */
export type AuthorizationStateUnion = AuthorizationStateWaitTdlibParameters
  | AuthorizationStateWaitEncryptionKey
  | AuthorizationStateWaitPhoneNumber
  | AuthorizationStateWaitCode
  | AuthorizationStateWaitPassword
  | AuthorizationStateReady
  | AuthorizationStateLoggingOut
  | AuthorizationStateClosing
  | AuthorizationStateClosed

/** TDLib needs TdlibParameters for initialization */
export interface AuthorizationStateWaitTdlibParameters {
  _: 'authorizationStateWaitTdlibParameters'
}

/** TDLib needs an encryption key to decrypt the local database */
export interface AuthorizationStateWaitEncryptionKey {
  _: 'authorizationStateWaitEncryptionKey'
  /** True, if the database is currently encrypted */
  isEncrypted: boolean
}

/** TDLib needs the user's phone number to authorize */
export interface AuthorizationStateWaitPhoneNumber {
  _: 'authorizationStateWaitPhoneNumber'
}

/** TDLib needs the user's authentication code to finalize authorization */
export interface AuthorizationStateWaitCode {
  _: 'authorizationStateWaitCode'
  /** True, if the user is already registered */
  isRegistered: boolean
  /**
   * Telegram terms of service, which should be accepted before user can continue registration;
   * may be null
   */
  termsOfService?: TermsOfService
  /** Information about the authorization code that was sent */
  codeInfo: AuthenticationCodeInfo
}

/** The user has been authorized, but needs to enter a password to start using the application */
export interface AuthorizationStateWaitPassword {
  _: 'authorizationStateWaitPassword'
  /** Hint for the password; may be empty */
  passwordHint: string
  /** True if a recovery email address has been set up */
  hasRecoveryEmailAddress: boolean
  /**
   * Pattern of the email address to which the recovery email was sent; empty until a
   * recovery email has been sent
   */
  recoveryEmailAddressPattern: string
}

/** The user has been successfully authorized. TDLib is now ready to answer queries */
export interface AuthorizationStateReady {
  _: 'authorizationStateReady'
}

/** The user is currently logging out */
export interface AuthorizationStateLoggingOut {
  _: 'authorizationStateLoggingOut'
}

/**
 * TDLib is closing, all subsequent queries will be answered with the error 500. Note
 * that closing TDLib can take a while. All resources will be freed only after authorizationStateClosed
 * has been received
 */
export interface AuthorizationStateClosing {
  _: 'authorizationStateClosing'
}

/**
 * TDLib client is in its final state. All databases are closed and all resources are
 * released. No other updates will be received after this. All queries will be responded
 * to with error code 500. To continue working, one should create a new instance of
 * the TDLib client
 */
export interface AuthorizationStateClosed {
  _: 'authorizationStateClosed'
}
