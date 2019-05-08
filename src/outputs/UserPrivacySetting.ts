/** Describes available user privacy settings */
export type UserPrivacySettingUnion = UserPrivacySettingShowStatus
  | UserPrivacySettingAllowChatInvites
  | UserPrivacySettingAllowCalls
  | UserPrivacySettingAllowPeerToPeerCalls

/** A privacy setting for managing whether the user's online status is visible */
export interface UserPrivacySettingShowStatus {
  _: 'userPrivacySettingShowStatus'
}

/** A privacy setting for managing whether the user can be invited to chats */
export interface UserPrivacySettingAllowChatInvites {
  _: 'userPrivacySettingAllowChatInvites'
}

/** A privacy setting for managing whether the user can be called */
export interface UserPrivacySettingAllowCalls {
  _: 'userPrivacySettingAllowCalls'
}

/** A privacy setting for managing whether peer-to-peer connections can be used for calls */
export interface UserPrivacySettingAllowPeerToPeerCalls {
  _: 'userPrivacySettingAllowPeerToPeerCalls'
}
