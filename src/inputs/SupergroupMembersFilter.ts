/** Specifies the kind of chat members to return in getSupergroupMembers */
export type SupergroupMembersFilterInputUnion = SupergroupMembersFilterRecentInput
  | SupergroupMembersFilterAdministratorsInput
  | SupergroupMembersFilterSearchInput
  | SupergroupMembersFilterRestrictedInput
  | SupergroupMembersFilterBannedInput
  | SupergroupMembersFilterBotsInput

/** Returns recently active users in reverse chronological order */
export interface SupergroupMembersFilterRecentInput {
  _: 'supergroupMembersFilterRecent'
}

/** Returns the creator and administrators */
export interface SupergroupMembersFilterAdministratorsInput {
  _: 'supergroupMembersFilterAdministrators'
}

/** Used to search for supergroup or channel members via a (string) query */
export interface SupergroupMembersFilterSearchInput {
  _: 'supergroupMembersFilterSearch'
  /** Query to search for */
  query?: string
}

/** Returns restricted supergroup members; can be used only by administrators */
export interface SupergroupMembersFilterRestrictedInput {
  _: 'supergroupMembersFilterRestricted'
  /** Query to search for */
  query?: string
}

/** Returns users banned from the supergroup or channel; can be used only by administrators */
export interface SupergroupMembersFilterBannedInput {
  _: 'supergroupMembersFilterBanned'
  /** Query to search for */
  query?: string
}

/** Returns bot members of the supergroup or channel */
export interface SupergroupMembersFilterBotsInput {
  _: 'supergroupMembersFilterBots'
}
